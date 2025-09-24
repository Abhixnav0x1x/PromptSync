import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { prompt, image, selected_ids } = await req.json();
  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
  }

  const { data: llms, error } = await supabase
    .from("llms")
    .select("id, model_name, nickname, api_key")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  const selected: string[] | null = Array.isArray(selected_ids) ? selected_ids : null;
  const toUse = selected && selected.length ? (llms ?? []).filter((l) => selected.includes((l as any).id)) : (llms ?? []);

  const appUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  // If image is a data URL, upload to Supabase Storage and use public URL
  let imageUrl: string | null = null;
  if (typeof image === "string" && image.startsWith("data:")) {
    try {
      const matches = image.match(/^data:(.*?);base64,(.*)$/);
      if (matches) {
        const contentType = matches[1] || "application/octet-stream";
        const base64 = matches[2];
        const buffer = Buffer.from(base64, "base64");
        const path = `attachments/${Date.now()}_${Math.random().toString(36).slice(2)}.jpg`;
        const { error: upErr } = await supabase.storage
          .from("attachments")
          .upload(path, buffer, { contentType, cacheControl: "3600", upsert: false });
        if (!upErr) {
          const { data } = supabase.storage.from("attachments").getPublicUrl(path);
          imageUrl = data?.publicUrl || null;
        }
      }
    } catch (e) {
      imageUrl = null; // fallback to sending original image below
    }
  } else if (typeof image === "string") {
    imageUrl = image; // already a URL
  }

  const PRIMARY_TIMEOUT_MS = 60000; // 25s primary
  const RETRY_TIMEOUT_MS = 12000; // 12s retry
  const RETRY_DELAY_MS = 60000; // wait 60s before retry
  // Use model defaults (omit max_tokens)
  const PRIMARY_MAX_TOKENS: number | undefined = undefined;
  const RETRY_MAX_TOKENS: number | undefined = undefined;

  async function requestOnce(l: any, maxTokens: number | undefined, timeoutMs: number): Promise<{ id: string; model_name: string; nickname: string; content: string }>{
    const apiKey = (l as any).api_key as string;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
          // Recommended by OpenRouter to improve acceptance/rate limits
          "HTTP-Referer": appUrl,
          Referer: appUrl,
          "X-Title": "Seesim",
        },
        body: JSON.stringify((() => {
          const payload: any = {
            model: l.model_name,
            temperature: 0.7,
            messages: [
              { role: "system", content: "You are a helpful assistant." },
              imageUrl
                ? {
                    role: "user",
                    content: [
                      { type: "text", text: prompt },
                      { type: "image_url", image_url: { url: imageUrl } },
                    ],
                  }
                : { role: "user", content: prompt },
            ],
          };
          if (typeof maxTokens === "number" && maxTokens > 0) {
            payload.max_tokens = maxTokens;
          }
          return payload;
        })()),
        signal: controller.signal,
      });
      if (!res.ok) {
        // Try to parse JSON error; fallback to text
        let errText = "";
        try {
          const j = await res.json();
          errText = j?.error?.message || j?.message || JSON.stringify(j);
        } catch {
          errText = await res.text();
        }
        if (imageUrl) {
          const lower = (errText || "").toLowerCase();
          if (lower.includes("image") || lower.includes("vision") || res.status === 400) {
            throw new Error("This LLM does not support file upload");
          }
        }
        throw new Error(errText || `OpenRouter error ${res.status}`);
      }
      const json = await res.json();
      const choices = json?.choices;
      if (!Array.isArray(choices) || !choices.length) {
        throw new Error(`No choices in response: ${JSON.stringify(json)}`);
      }
      const content = choices[0]?.message?.content ?? "";
      if (!content) {
        throw new Error(`Empty content in response: ${JSON.stringify(json)}`);
      }
      return { id: l.id, model_name: l.model_name, nickname: l.nickname, content };
    } catch (err: any) {
      const msg = String(err?.message || err);
      if (controller.signal.aborted || /AbortError/i.test(msg)) {
        throw new Error(`Timed out after ${Math.round(timeoutMs / 1000)}s`);
      }
      throw err;
    } finally {
      clearTimeout(timeout);
    }
  }
  const results = await Promise.allSettled(
    toUse.map(async (l) => {
      try {
        // Primary attempt
        return await requestOnce(l, PRIMARY_MAX_TOKENS, PRIMARY_TIMEOUT_MS);
      } catch (err: any) {
        const msg = String(err?.message || err);
        // Retry only on timeouts/overload/5xx-like errors
        if (/timed out/i.test(msg) || /abort/i.test(msg) || /overload|rate|capacity|gateway|timeout/i.test(msg)) {
          await new Promise((r) => setTimeout(r, RETRY_DELAY_MS));
          try {
            return await requestOnce(l, RETRY_MAX_TOKENS, RETRY_TIMEOUT_MS);
          } catch (e2) {
            throw e2;
          }
        }
        throw err;
      }
    })
  );

  const response = results.map((r, idx) => {
    const l = (toUse as any[])[idx] || {};
    if (r.status === "fulfilled") {
      return { ...r.value, status: "success" };
    }
    return {
      id: l.id,
      model_name: l.model_name,
      nickname: l.nickname,
      status: "error",
      error: String((r as any).reason),
    } as any;
  });

  return NextResponse.json({ results: response });
}
