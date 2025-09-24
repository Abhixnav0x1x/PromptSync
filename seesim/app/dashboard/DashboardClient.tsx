"use client";
import { useEffect, useMemo, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import PromptInputBar from "./components/PromptInputBar";
import ModelResponseCard from "./components/ModelResponseCard";
import LLMModal from "./components/LLMModal";
import TopBar from "./components/TopBar";
import MobileSidebar from "./components/MobileSidebar";

type LLM = {
  id: string;
  model_name: string;
  nickname?: string | null;
};

export default function DashboardClient({
  email,
  initialLlms,
}: {
  email: string;
  initialLlms: LLM[];
}) {
  const { llms, setLLMs, responses, setResponse, selectedLLMIds, setSelectedLLMIds, promptBoostLLMId, setPromptBoostLLMId } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [sending, setSending] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [attachedImage, setAttachedImage] = useState<string | null>(null);
  const [attachedName, setAttachedName] = useState<string | null>(null);
  const [attachedType, setAttachedType] = useState<string | null>(null);
  const [fullScreen, setFullScreen] = useState(false);

  // initialize from server
  useEffect(() => {
    setLLMs(initialLlms as any);
    // initialize selection from localStorage if not set
    const saved = JSON.parse(localStorage.getItem("seesim_selected_llms") || "[]");
    if (Array.isArray(saved) && saved.length) {
      setSelectedLLMIds(saved.filter((id: string) => initialLlms.some((l) => l.id === id)));
    } else {
      // default to all
      setSelectedLLMIds((initialLlms || []).map((l) => l.id));
    }
    // initialize prompt boost from localStorage if present
    const savedBoost = localStorage.getItem("seesim_prompt_boost_llm");
    if (savedBoost) setPromptBoostLLMId(savedBoost);
  }, [initialLlms, setLLMs]);

  async function boostPrompt() {
    if (!promptBoostLLMId || !prompt.trim()) return;
    try {
      setSending(true);
      const res = await fetch("/api/boost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, llm_id: promptBoostLLMId }),
      });
      if (!res.ok) throw new Error(await res.text());
      const j = await res.json();
      if (j && typeof j.prompt === "string" && j.prompt.trim()) {
        setPrompt(j.prompt);
      }
    } catch (e) {
      console.error("Boost error", e);
    } finally {
      setSending(false);
    }
  }

  // Listen for conversation load events from MobileSidebar
  useEffect(() => {
    function onLoadConv(e: any) {
      const conv = e?.detail;
      if (!conv) return;
      // Populate prompt
      setPrompt(conv.prompt || "");
      // Restore attachment info
      setAttachedImage(conv.image_url || null);
      setAttachedName(conv.file_name || null);
      setAttachedType(conv.file_type || null);
      // Populate responses
      if (Array.isArray(conv.results)) {
        for (const r of conv.results) {
          if (r?.id) {
            if (r.status === "success") {
              setResponse(r.id, { id: r.id, model_name: r.model_name, nickname: r.nickname, status: "success", content: r.content });
            } else if (r.status === "error") {
              setResponse(r.id, { id: r.id, status: "error", error: r.error });
            }
          }
        }
      }
      setFullScreen(true);
    }
    window.addEventListener("load_conversation", onLoadConv as any);
    return () => window.removeEventListener("load_conversation", onLoadConv as any);
  }, [setResponse]);

  async function saveChatExplicit() {
    // Collect current responses for all LLMs (success or error)
    const resultsArr: any[] = [];
    for (const l of llms) {
      const r = responses[l.id];
      if (!r || r.status === "idle" || r.status === "loading") continue;
      resultsArr.push({ id: l.id, model_name: l.model_name, nickname: l.nickname, status: r.status, content: r.content, error: r.error });
    }
    if (!prompt.trim() && !resultsArr.length) return; // nothing to save
    const conv: any = { prompt, results: resultsArr, image_url: attachedImage, file_name: attachedName, file_type: attachedType, created_at: new Date().toISOString() };
    try {
      const res = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conv),
      });
      if (res.ok) {
        const { id, created_at } = await res.json();
        conv.id = id;
        conv.created_at = created_at || conv.created_at;
      }
    } catch {}
    // Persist to localStorage regardless (best-effort)
    const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
    local.unshift(conv);
    localStorage.setItem("seesim_conversations", JSON.stringify(local.slice(0, 50)));
  }

  async function startNewChat() {
    // Save current chat then clear UI
    await saveChatExplicit();
    // Clear prompt and attachments
    setPrompt("");
    setAttachedImage(null);
    setAttachedName(null);
    setAttachedType(null);
    // Reset responses to idle
    for (const l of llms) {
      setResponse(l.id, { id: l.id, model_name: l.model_name, nickname: l.nickname, status: "idle", content: undefined, error: undefined });
    }
  }

  async function refreshLLMs() {
    const res = await fetch("/api/llms");
    if (res.ok) {
      const json = await res.json();
      setLLMs(json.llms);
    }
  }

  async function addLLM(form: { model_name: string; api_key: string; nickname: string }) {
    setSaving(true);
    setError(null);
    const res = await fetch("/api/llms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setSaving(false);
    if (!res.ok) {
      const t = await res.text();
      setError(t);
      return;
    }
    setIsModalOpen(false);
    refreshLLMs();
  }

  async function removeLLM(id: string) {
    const prev = [...llms];
    // optimistic update
    setLLMs(llms.filter((l) => l.id !== id) as any);
    try {
      const res = await fetch(`/api/llms/${id}`, { method: "DELETE" });
      if (!res.ok) {
        // rollback on failure
        setLLMs(prev as any);
        const msg = await res.text();
        console.error("Failed to delete LLM:", msg);
        // best-effort refresh
        refreshLLMs();
      } else {
        // ensure in sync
        refreshLLMs();
      }
    } catch (e: any) {
      setLLMs(prev as any);
      console.error("Delete error:", e);
      refreshLLMs();
    }
  }

  const orderedResponses = useMemo(() => {
    return (llms || [])
      .map((l) => responses[l.id])
      .filter((r) => r && r.status && r.status !== "idle");
  }, [llms, responses]);

  async function continueWithLLM(id: string, reply?: string) {
    if (!reply || !reply.trim()) return;
    // Save current chat
    await saveChatExplicit();
    // Focus on single LLM and set the reply as the next prompt
    setPrompt(reply);
    setSelectedLLMIds([id]);
    localStorage.setItem("seesim_selected_llms", JSON.stringify([id]));
    // Reset responses to idle (so the next run shows fresh loading states only for the chosen LLM)
    for (const l of llms) {
      const st = l.id === id ? "idle" : "idle";
      setResponse(l.id, { id: l.id, model_name: l.model_name, nickname: l.nickname, status: st as any, content: undefined, error: undefined });
    }
    // Ensure state is applied then send
    setTimeout(() => {
      sendPrompt();
    }, 0);
  }

  async function sendPrompt() {
    if (!prompt.trim()) return;
    setSending(true);
    // Only selected LLMs will be used
    const activeIds = (selectedLLMIds && selectedLLMIds.length) ? selectedLLMIds : llms.map((l) => l.id);
    const active = llms.filter((l) => activeIds.includes(l.id));
    // set only selected to loading
    for (const l of active) {
      setResponse(l.id, { id: l.id, model_name: l.model_name, nickname: l.nickname, status: "loading", content: undefined, error: undefined });
    }
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, image: attachedImage, selected_ids: active.map((l) => l.id) }),
      });
      if (!res.ok) throw new Error(await res.text());
      const json = await res.json();
      for (const r of json.results as any[]) {
        if (r.status === "success") {
          setResponse(r.id, { id: r.id, model_name: r.model_name, nickname: r.nickname, status: "success", content: r.content });
        } else {
          setResponse(r.id, { id: r.id, status: "error", error: r.error });
        }
      }
      // Persist conversation (prompt + results) to DB and localStorage
      try {
        const payload = { prompt, results: json.results, image_url: attachedImage, file_name: attachedName, file_type: attachedType };
        const save = await fetch("/api/conversations", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        let conv: any = { prompt, results: json.results, created_at: new Date().toISOString() };
        if (save.ok) {
          const { id, created_at } = await save.json();
          conv.id = id;
          conv.created_at = created_at || conv.created_at;
        }
        const local = JSON.parse(localStorage.getItem("seesim_conversations") || "[]");
        local.unshift({ ...conv, image_url: attachedImage, file_name: attachedName, file_type: attachedType });
        localStorage.setItem("seesim_conversations", JSON.stringify(local.slice(0, 50)));
      } catch {}
    } catch (e: any) {
      for (const l of active) setResponse(l.id, { id: l.id, status: "error", error: String(e.message || e) });
    } finally {
      setSending(false);
      setFullScreen(true);
    }
  }

  function toggleSelected(id: string) {
    const curr = new Set(selectedLLMIds || []);
    if (curr.has(id)) curr.delete(id); else curr.add(id);
    const arr = Array.from(curr);
    setSelectedLLMIds(arr);
    localStorage.setItem("seesim_selected_llms", JSON.stringify(arr));
  }

  return (
    <div className="min-h-dvh">
      <TopBar onMenuClick={() => setNavOpen(true)} />
      <MobileSidebar
        open={navOpen}
        onClose={() => setNavOpen(false)}
        email={email}
        llms={llms}
        onAdd={() => {
          setNavOpen(false);
          setIsModalOpen(true);
        }}
        onDelete={removeLLM}
      />

      <div className="flex min-h-dvh flex-col">
        <main className="flex-1 p-4">
          <div className="mx-auto max-w-none h-full min-h-0 flex flex-col relative">
            {!fullScreen && orderedResponses.length > 0 && (
              <button
                onClick={() => setFullScreen(true)}
                aria-label="Enter fullscreen"
                title="Enter fullscreen"
                className="absolute right-0 top-0 z-10 rounded border border-white/10 bg-black/30 p-1.5 text-neutral-200 backdrop-blur hover:bg-white/10"
              >
                {/* Maximize icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"/>
                  <polyline points="9 21 3 21 3 15"/>
                  <line x1="21" y1="3" x2="14" y2="10"/>
                  <line x1="3" y1="21" x2="10" y2="14"/>
                </svg>
              </button>
            )}
            <div className="flex-1 min-h-0 overflow-x-auto overflow-y-hidden no-scrollbar pt-2">
              {orderedResponses.length ? (
                <div className="flex h-full items-stretch gap-4 pr-4">
                  {orderedResponses.map((r) => (
                    <div key={r.id} className="min-w-[320px] max-w-[420px] h-full">
                      <ModelResponseCard
                        title={r.nickname || r.model_name || "Model"}
                        status={r.status}
                        content={r.content}
                        error={r.error}
                        onContinue={() => continueWithLLM(r.id, r.content)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-neutral-400">
                  Ask something to get started.
                </div>
              )}
            </div>
          </div>
        </main>
        <PromptInputBar
          prompt={prompt}
          onChange={setPrompt}
          onSubmit={sendPrompt}
          disabled={sending}
          initialAttachedName={attachedName || undefined}
          onBoost={promptBoostLLMId ? boostPrompt : undefined}
          onAttach={(dataUrl, file) => {
          setAttachedImage(dataUrl || null);
          setAttachedName(file?.name || null);
          setAttachedType(file?.type || null);
        }}
          onNewChat={startNewChat}
          onSaveChat={saveChatExplicit}
        />
      </div>

      <LLMModal open={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={addLLM} saving={saving} error={error} />

      {/* Fullscreen results overlay */}
      {fullScreen && (
        <div className="fixed inset-0 z-50 bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative mx-auto h-full max-w-7xl">
            <button
              onClick={() => setFullScreen(false)}
              aria-label="Exit fullscreen"
              title="Exit fullscreen"
              className="absolute right-0 top-0 z-10 rounded border border-white/10 bg-black/30 p-1.5 text-neutral-200 backdrop-blur hover:bg-white/10"
            >
              {/* Minimize icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 3 3 3 3 9"/>
                <polyline points="15 21 21 21 21 15"/>
                <line x1="3" y1="3" x2="10" y2="10"/>
                <line x1="21" y1="21" x2="14" y2="14"/>
              </svg>
            </button>
            <div className="h-full overflow-x-auto overflow-y-hidden no-scrollbar pt-2">
              {orderedResponses.length ? (
                <div className="flex h-full items-stretch gap-4 pr-4">
                  {orderedResponses.map((r) => (
                    <div key={r.id} className="min-w-[320px] max-w-[420px] h-full">
                      <ModelResponseCard
                        title={r.nickname || r.model_name || "Model"}
                        status={r.status}
                        content={r.content}
                        error={r.error}
                        onContinue={() => continueWithLLM(r.id, r.content)}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-neutral-400">No results yet.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
