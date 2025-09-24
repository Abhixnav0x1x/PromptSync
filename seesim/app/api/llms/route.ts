import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServer } from "@/lib/supabase/server";

// Normalize various paste formats from OpenRouter into a slug like
// provider/model[:variant] (e.g., google/gemma-3-1-4-it:free)
function normalizeOpenRouterSlug(input: string): string {
  let s = (input || "").trim();
  // If a URL is pasted, extract the last path segment
  try {
    if (/^https?:\/\//i.test(s)) {
      const u = new URL(s);
      const parts = u.pathname.split("/").filter(Boolean);
      // common: /models/<slug>
      const maybeModelsIdx = parts.findIndex((p) => p.toLowerCase() === "models");
      if (maybeModelsIdx !== -1 && parts[maybeModelsIdx + 1]) {
        s = parts[maybeModelsIdx + 1];
      } else {
        s = parts.pop() || s;
      }
    }
  } catch {
    // ignore URL parsing errors, fallback to raw string
  }
  // Extract first slug-like token if extra text present
  const m = s.match(/[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+(?::[A-Za-z0-9._-]+)?/);
  if (m) s = m[0];
  return s.toLowerCase();
}

const BodySchema = z.object({
  model_name: z.string().min(1),
  api_key: z.string().min(1),
  nickname: z.string().optional().nullable(),
});

export async function GET() {
  const supabase = createSupabaseServer();
  const {
    data: { user },
    error: uerr,
  } = await supabase.auth.getUser();
  if (uerr || !user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("llms")
    .select("id, user_id, model_name, nickname, created_at")
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ llms: data });
}

export async function POST(req: Request) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const json = await req.json();
  const parsed = BodySchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const { model_name, api_key, nickname } = parsed.data;
  const normalizedModel = normalizeOpenRouterSlug(model_name);

  const { data, error } = await supabase
    .from("llms")
    .insert({ user_id: user.id, model_name: normalizedModel, api_key, nickname })
    .select("id, user_id, model_name, nickname, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ llm: data });
}
