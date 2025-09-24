"use client";
import React, { useEffect, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useAppStore } from "@/store/useAppStore";

export type SidebarLLM = { id: string; model_name: string; nickname?: string | null };

type Props = {
  open: boolean;
  onClose: () => void;
  email: string;
  llms: SidebarLLM[];
  onAdd: () => void;
  onDelete: (id: string) => void;
};

export default function MobileSidebar({ open, onClose, email, llms, onAdd, onDelete }: Props) {
  const [convos, setConvos] = useState<any[]>([]);
  const { selectedLLMIds, setSelectedLLMIds } = useAppStore();
  const [selectorOpen, setSelectorOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/conversations");
        const j = res.ok ? await res.json() : { conversations: [] };
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        // Normalize arrays
        const remoteArr: any[] = Array.isArray(j.conversations) ? j.conversations : [];
        const localArr: any[] = Array.isArray(local) ? local : [];
        // Build a stable key: prefer id; fallback to prompt|created_at
        const byKey: Record<string, any> = {};
        const add = (c: any, prefer = false) => {
          if (!c) return;
          const prompt = typeof c.prompt === "string" ? c.prompt : "";
          const created = c.created_at || c.createdAt || "";
          const id = typeof c.id === "string" && c.id ? c.id : `${prompt}|${created}`;
          if (prefer || !(id in byKey)) byKey[id] = c;
        };
        // Local first
        for (const c of localArr) add(c, false);
        // Remote overwrites local duplicates
        for (const c of remoteArr) add(c, true);
        // Sort by created_at desc and filter duplicates by identical prompt text
        const merged = Object.values(byKey).sort((a: any, b: any) => {
          const ta = new Date(a.created_at || a.createdAt || 0).getTime();
          const tb = new Date(b.created_at || b.createdAt || 0).getTime();
          return tb - ta;
        });
        const seenPrompt = new Set<string>();
        const uniqByPrompt = merged.filter((c: any) => {
          const p = typeof c.prompt === "string" ? c.prompt.trim() : "";
          if (!p) return true; // keep empties
          if (seenPrompt.has(p)) return false;
          seenPrompt.add(p);
          return true;
        });
        setConvos(uniqByPrompt.slice(0, 10));
      } catch {}
    }
    if (open) load();
  }, [open]);

  async function openConversationById(id: string) {
    // Try localStorage first (usually contains full results)
    const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
    let conv = local.find((c: any) => c.id === id);
    if (!conv) {
      try {
        const res = await fetch(`/api/conversations/${id}`);
        if (res.ok) conv = await res.json();
      } catch {}
    }
    if (!conv) return;
    // Dispatch event for Dashboard to consume
    window.dispatchEvent(new CustomEvent("load_conversation", { detail: conv }));
    onClose();
  }

  async function deleteConversation(id: string) {
    try {
      await fetch(`/api/conversations/${id}`, { method: "DELETE" });
    } catch {}
    // remove from local storage
    const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
    const filtered = local.filter((c: any) => c.id !== id);
    localStorage.setItem("seesim_conversations", JSON.stringify(filtered));
    setConvos((s) => s.filter((x) => x.id !== id));
  }

  return (
    <div className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
         aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`mobilesidebar-panel absolute inset-y-0 left-0 w-[85%] max-w-[320px] transform bg-white shadow-xl transition-transform duration-200 ${open ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="font-semibold text-gray-900">Menu</div>
          <button onClick={() => setSelectorOpen(true)} aria-label="Select active LLMs" title="Select active LLMs" className="rounded-md border border-blue-900 bg-blue-900 px-2 py-1 text-sm text-white hover:bg-blue-800">
            {/* sliders icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="2" y1="14" x2="6" y2="14"/><line x1="10" y1="8" x2="14" y2="8"/><line x1="18" y1="16" x2="22" y2="16"/></svg>
          </button>
        </div>
        <div className="h-full overflow-y-auto p-4 pb-20">
          <div className="flex flex-col space-y-4 text-sm text-gray-700">
            <div className="ms-card rounded-md bg-gray-50 p-3 shadow-sm">
              <div className="truncate font-medium" title={email}>{email}</div>
            </div>
            {/* Removed mid-menu Settings card per request */}
            {/* Removed Saved LLMs section (managed in Settings) */}
            <div className="ms-card rounded-md bg-gray-50 p-3 shadow-sm">
              <div className="mb-2 text-xs uppercase text-gray-500">Past Conversations</div>
              {convos.length === 0 ? (
                <div className="text-xs text-gray-500">No conversations</div>
              ) : (
                <ul className="space-y-1">
                  {convos.map((c, idx) => {
                    const key = c?.id || `${c?.prompt || ""}|${c?.created_at || c?.createdAt || ""}|${idx}`;
                    const hasId = typeof c?.id === "string" && c.id.length > 0;
                    return (
                      <li key={key} className="flex items-center justify-between gap-2 truncate">
                        <button
                          onClick={() => hasId && openConversationById(c.id)}
                          className="truncate text-left hover:underline disabled:opacity-50"
                          title={c.prompt}
                          disabled={!hasId}
                        >
                          {c.prompt}
                        </button>
                        <button
                          onClick={() => hasId && deleteConversation(c.id)}
                          className="rounded px-2 py-0.5 text-xs text-red-600 hover:bg-red-50 disabled:opacity-50"
                          aria-label="Delete conversation"
                          title="Delete conversation"
                          disabled={!hasId}
                        >
                          {/* bin */}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></svg>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
        {/* Footer actions */}
        <div className="mobilesidebar-footer absolute bottom-0 left-0 right-0 border-t bg-white px-4 py-3">
          <Link
            href="/dashboard/settings"
            className="flex w-full items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm transition-all hover:bg-gray-100"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c0 .7.4 1.31 1 1.61.6.3 1 .91 1 1.61s-.4 1.31-1 1.61c-.6.3-1 .91-1 1.61z"/></svg>
            <span>Settings</span>
          </Link>
        </div>
      </div>

      {/* Selector backdrop to close on outside click */}
      <div
        className={`absolute inset-0 ${selectorOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={selectorOpen ? "false" : "true"}
      >
        <div
          className={`absolute inset-0 transition-opacity ${selectorOpen ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundColor: "rgba(0,0,0,0.25)" }}
          onClick={() => setSelectorOpen(false)}
        />
      </div>

      {/* Secondary slide-out: Active LLM selector (overlays from left) */}
      <div
        className={`absolute inset-y-0 left-0 z-50 w-[85%] max-w-[320px] transform bg-white shadow-2xl transition-transform duration-200 ${selectorOpen ? "translate-x-0" : "-translate-x-full"}`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="font-semibold text-gray-900">Active LLMs</div>
          <button onClick={() => setSelectorOpen(false)} aria-label="Close" title="Close" className="rounded-md border px-2 py-1 text-sm bg-gray-100 hover:bg-gray-200">
            {/* X icon */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div className="h-full overflow-y-auto p-4 pb-20 text-sm text-gray-700">
          <div className="ms-card rounded-md bg-gray-50 p-3 shadow-sm">
            <div className="mb-2 text-xs uppercase text-gray-500">Choose responders</div>
            <ul className="space-y-2">
              {llms.map((l) => (
                <li key={l.id} className="flex items-center justify-between gap-2">
                  <label className="flex items-center gap-2 truncate">
                    <input
                      type="checkbox"
                      checked={selectedLLMIds.includes(l.id)}
                      onChange={() => {
                        const curr = new Set(selectedLLMIds || []);
                        if (curr.has(l.id)) curr.delete(l.id); else curr.add(l.id);
                        const arr = Array.from(curr);
                        setSelectedLLMIds(arr);
                        localStorage.setItem("seesim_selected_llms", JSON.stringify(arr));
                      }}
                    />
                    <span className="truncate" title={l.model_name}>{l.nickname || l.model_name}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 text-xs text-gray-500">Changes are saved automatically.</div>
        </div>
      </div>
    </div>
  );
}
