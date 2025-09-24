import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase/server";

export async function GET() {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { data, error } = await supabase
    .from("conversations")
    .select("id, prompt, results, image_url, file_name, file_type, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ conversations: data ?? [] });
}

export async function POST(req: Request) {
  const supabase = createSupabaseServer();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { prompt, results, image_url, file_name, file_type } = body || {};
  if (!prompt || typeof prompt !== "string")
    return NextResponse.json({ error: "Invalid prompt" }, { status: 400 });
  if (!Array.isArray(results))
    return NextResponse.json({ error: "Invalid results" }, { status: 400 });

  const { data, error } = await supabase
    .from("conversations")
    .insert({ user_id: user.id, prompt, results, image_url: image_url || null, file_name: file_name || null, file_type: file_type || null })
    .select("id, created_at")
    .single();
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ id: data.id, created_at: data.created_at });
}
