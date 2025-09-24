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
  const m = s.match(/[A-Za-z0-9._-]+\/[A-Za-z0-9._-]+(?::[A-Za-z0-9._-]+)?/);
  if (m) s = m[0];
  return s.toLowerCase();
}

const PatchSchema = z.object({
  model_name: z.string().min(1).optional(),
  api_key: z.string().min(1).optional(),
  nickname: z.string().optional().nullable(),
});

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const json = await req.json();
  const parsed = PatchSchema.safeParse(json);
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });

  const updates: any = {};
  if (parsed.data.model_name) updates.model_name = normalizeOpenRouterSlug(parsed.data.model_name);
  if (parsed.data.nickname !== undefined) updates.nickname = parsed.data.nickname;
  if (parsed.data.api_key) updates.api_key = parsed.data.api_key;

  const { data, error } = await supabase
    .from("llms")
    .update(updates)
    .eq("id", params.id)
    .select("id, user_id, model_name, nickname, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ llm: data });
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { error, count } = await supabase
    .from("llms")
    .delete({ count: "exact" })
    .eq("id", params.id)
    .eq("user_id", user.id);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!count) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ ok: true }, { status: 200 });
}
