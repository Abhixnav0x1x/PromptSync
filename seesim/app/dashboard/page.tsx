import { redirect } from "next/navigation";
import { getServerSession, createSupabaseServer } from "@/lib/supabase/server";
import DashboardClient from "./DashboardClient";

export default async function DashboardPage() {
  const session = await getServerSession();
  if (!session) redirect("/login");
  const supabase = createSupabaseServer();
  const { data: llms } = await supabase
    .from("llms")
    .select("id, model_name, nickname")
    .order("created_at", { ascending: false });

  return <DashboardClient email={session.user.email!} initialLlms={llms ?? []} />;
}
