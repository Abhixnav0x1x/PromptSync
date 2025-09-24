"use client";
import React, { useEffect, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";
import Link from "next/link";

export type SidebarLLM = { id: string; model_name: string; nickname?: string | null };

type Props = {
  email: string;
  llms: SidebarLLM[];
  onAdd: () => void;
  onDelete: (id: string) => void;
};

export default function Sidebar({ email, llms, onAdd, onDelete }: Props) {
  const [convos, setConvos] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/conversations");
        const j = res.ok ? await res.json() : { conversations: [] };
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        const byId: Record<string, any> = {};
        for (const c of local) if (c.id) byId[c.id] = c;
        for (const c of j.conversations || []) byId[c.id] = c;
        const merged = Object.values(byId).sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setConvos(merged.slice(0, 15));
      } catch {}
    }
    load();
  }, []);

  async function deleteConversation(id: string) {
    try {
      await fetch(`/api/conversations/${id}`, { method: "DELETE" });
    } catch {}
    const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
    const filtered = local.filter((c: any) => c.id !== id);
    localStorage.setItem("seesim_conversations", JSON.stringify(filtered));
    setConvos((s) => s.filter((x) => x.id !== id));
  }
  return (
    <aside className="hidden md:flex md:w-[280px] flex-col border-r bg-gray-50/60">
      <div className="flex-1 p-4 flex flex-col space-y-4 text-sm text-gray-700">
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="truncate font-medium" title={email}>{email}</div>
        </div>
        <div className="flex items-center justify-between rounded-md bg-white p-3 shadow-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .7.4 1.31 1 1.61.6.3 1 .91 1 1.61s-.4 1.31-1 1.61c-.6.3-1 .91-1 1.61z"/></svg>
            <span className="font-medium">Settings</span>
          </div>
          <Link href="/dashboard/settings" className="rounded-md border px-2 py-1 text-xs hover:bg-gray-100">Open</Link>
        </div>
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="mb-2 text-xs uppercase text-gray-500">Saved LLMs</div>
          <ul className="space-y-1">
            {llms.map((l) => (
              <li key={l.id} className="flex items-center justify-between gap-2 truncate">
                <span className="truncate" title={l.model_name}>{l.nickname || l.model_name}</span>
                <button
                  onClick={() => onDelete(l.id)}
                  className="rounded px-2 py-0.5 text-xs text-red-600 transition-all hover:bg-red-50"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <Link href="/dashboard/settings" className="mt-3 inline-flex w-full items-center justify-center rounded-md border px-3 py-1.5 text-sm transition-all hover:bg-gray-100">Manage in Settings</Link>
          <div className="mt-3 h-2 w-full rounded bg-gray-100">
            <div className="h-2 w-1/3 rounded bg-gray-300" />
          </div>
          <div className="mt-1 text-xs text-gray-500">Token usage</div>
        </div>
        <div className="rounded-md bg-white p-3 shadow-sm">
          <div className="mb-2 text-xs uppercase text-gray-500">Past Conversations</div>
          {convos.length === 0 ? (
            <div className="text-xs text-gray-500">No conversations</div>
          ) : (
            <ul className="space-y-1">
              {convos.map((c) => (
                <li key={c.id} className="flex items-center justify-between gap-2 truncate">
                  <span className="truncate" title={c.prompt}>{c.prompt}</span>
                  <button onClick={() => deleteConversation(c.id)} className="rounded px-2 py-0.5 text-xs text-red-600 hover:bg-red-50" aria-label="Delete conversation" title="Delete conversation">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t bg-white p-4">
        <button
          onClick={async () => {
            const supabase = createSupabaseClient();
            await supabase.auth.signOut();
            window.location.href = "/";
          }}
          className="w-full rounded-md border px-3 py-2 text-sm text-red-600 transition-all hover:bg-red-50"
        >
          Log out
        </button>
      </div>
    </aside>
  );
}
