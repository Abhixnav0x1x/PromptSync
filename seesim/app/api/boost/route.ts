import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function POST(req: Request) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const { prompt, llm_id } = body || {};
  if (!prompt || typeof prompt !== "string") {
    return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
  }
  if (!llm_id || typeof llm_id !== "string") {
    return NextResponse.json({ error: "Missing llm_id" }, { status: 400 });
  }

  const { data: llm, error } = await supabase
    .from("llms")
    .select("id, model_name, nickname, api_key")
    .eq("id", llm_id)
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!llm) return NextResponse.json({ error: "LLM not found" }, { status: 404 });

  const appUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

  const controller = new AbortController();
  const timeoutMs = 20000;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${llm.api_key}`,
        "HTTP-Referer": appUrl,
        Referer: appUrl,
        "X-Title": "Seesim",
      },
      body: JSON.stringify({
        model: llm.model_name,
        temperature: 0.2,
        messages: [
          {
            role: "system",
            content:
              "You are a prompt engineer. Rewrite the user's prompt to be clearer, structured, and optimized for high-quality answers. Preserve the user's intent, constraints, and any domain-specific details. Do not add new requirements. Output only the improved prompt.",
          },
          { role: "user", content: prompt },
        ],
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      let msg = "";
      try {
        const j = await res.json();
        msg = j?.error?.message || j?.message || JSON.stringify(j);
      } catch {
        msg = await res.text();
      }
      throw new Error(msg || `OpenRouter error ${res.status}`);
    }
    const json = await res.json();
    const improved: string = json?.choices?.[0]?.message?.content || "";
    if (!improved.trim()) {
      return NextResponse.json({ prompt }, { status: 200 });
    }
    return NextResponse.json({ prompt: improved });
  } catch (err: any) {
    const msg = String(err?.message || err);
    if (controller.signal.aborted) {
      return NextResponse.json({ error: `Timed out after ${Math.round(timeoutMs / 1000)}s` }, { status: 504 });
    }
    return NextResponse.json({ error: msg }, { status: 500 });
  } finally {
    clearTimeout(timeout);
  }
}
