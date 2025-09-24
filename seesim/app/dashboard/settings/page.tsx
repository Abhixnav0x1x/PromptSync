"use client";
import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { createSupabaseClient } from "@/lib/supabase/client";
import { useAppStore } from "@/store/useAppStore";

export default function SettingsPage() {
  const router = useRouter();
  // LLM management state
  const [llms, setLlms] = useState<any[]>([]);
  const [loadingLlms, setLoadingLlms] = useState(true);
  const [modelName, setModelName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [nickname, setNickname] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Account settings
  const supabase = useMemo(() => createSupabaseClient(), []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acctMsg, setAcctMsg] = useState<string | null>(null);
  const [acctErr, setAcctErr] = useState<string | null>(null);

  // Selection of LLMs that should answer + prompt boost selection
  const { selectedLLMIds, setSelectedLLMIds, promptBoostLLMId, setPromptBoostLLMId } = useAppStore();
  const [selected, setSelected] = useState<string[]>([]);
  const [boostId, setBoostId] = useState<string | "">("");

  async function loadLlms() {
    setLoadingLlms(true);
    const res = await fetch("/api/llms");
    if (res.ok) {
      const j = await res.json();
      setLlms(j.llms || []);
    }
    setLoadingLlms(false);
  }

  function toggleSelect(id: string) {
    setSelected((curr) =>
      curr.includes(id) ? curr.filter((x) => x !== id) : [...curr, id]
    );
  }

  function saveSettings() {
    // persist selection
    setSelectedLLMIds(selected);
    localStorage.setItem("seesim_selected_llms", JSON.stringify(selected));
    // persist prompt boost LLM
    const v = boostId || null;
    setPromptBoostLLMId(v as any);
    if (v) localStorage.setItem("seesim_prompt_boost_llm", String(v));
    else localStorage.removeItem("seesim_prompt_boost_llm");
  }

  useEffect(() => {
    loadLlms();
  }, []);

  useEffect(() => {
    // initialize selection from store or localStorage when llms loads
    const saved = selectedLLMIds.length
      ? selectedLLMIds
      : JSON.parse(localStorage.getItem("seesim_selected_llms") || "[]");
    if (Array.isArray(saved) && saved.length) {
      setSelected(saved.filter((id: string) => llms.some((l) => l.id === id)));
    } else {
      // default: select all
      setSelected(llms.map((l: any) => l.id));
    }
    // init prompt boost id from store or localStorage
    const storedBoost = promptBoostLLMId || localStorage.getItem("seesim_prompt_boost_llm") || "";
    if (storedBoost && llms.some((l:any)=>l.id===storedBoost)) setBoostId(storedBoost);
    else setBoostId("");
  }, [llms]);

  async function addLlm() {
    setSaving(true);
    setError(null);
    const res = await fetch("/api/llms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model_name: modelName, api_key: apiKey, nickname: nickname || null }),
    });
    if (!res.ok) {
      setError(await res.text());
    } else {
      setModelName("");
      setApiKey("");
      setNickname("");
      await loadLlms();
    }
    setSaving(false);
  }

  async function deleteLlm(id: string) {
    const prev = llms;
    setLlms((s) => s.filter((x) => x.id !== id));
    const res = await fetch(`/api/llms/${id}`, { method: "DELETE" });
    if (!res.ok) {
      setLlms(prev);
      alert("Failed to delete LLM");
    }
  }

  async function updateEmail() {
    setAcctErr(null);
    setAcctMsg(null);
    const { error } = await supabase.auth.updateUser({ email });
    if (error) setAcctErr(error.message);
    else setAcctMsg("Email update requested. Check your inbox to confirm.");
  }

  async function updatePassword() {
    setAcctErr(null);
    setAcctMsg(null);
    const { error } = await supabase.auth.updateUser({ password });
    if (error) setAcctErr(error.message);
    else setAcctMsg("Password updated.");
  }

  return (
    <div className="settings-page mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <button onClick={() => router.push("/dashboard")} className="rounded-md border border-white/10 px-3 py-1.5 text-sm hover:bg-white/5">← Back to Dashboard</button>
      </div>

      <h1 className="mb-4 text-2xl font-semibold">Settings</h1>

      <section className="mb-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <h2 className="mb-3 text-lg font-medium">Manage LLMs</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <input value={modelName} onChange={(e) => setModelName(e.target.value)} placeholder="Model name or URL" className="rounded-md border border-white/10 bg-transparent p-2" />
          <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="OpenRouter API key" className="rounded-md border border-white/10 bg-transparent p-2" />
          <input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Nickname (optional)" className="rounded-md border border-white/10 bg-transparent p-2" />
        </div>
        <div className="mt-3">
          <button disabled={saving} onClick={addLlm} className="rounded-md bg-indigo-600 px-4 py-2 text-white disabled:opacity-60">Add LLM</button>
        </div>
        {error && <div className="mt-2 text-sm text-red-400">{error}</div>}
        <div className="mt-4">
          <div className="mb-2 text-sm opacity-80">Your LLMs</div>
          {loadingLlms ? (
            <div className="text-sm opacity-70">Loading…</div>
          ) : (
            <ul className="space-y-2">
              {llms.map((l: any) => (
                <li key={l.id} className="flex flex-col gap-2 rounded border border-white/10 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <label className="flex items-center gap-2 min-w-0">
                      <input
                        type="checkbox"
                        checked={selected.includes(l.id)}
                        onChange={() => toggleSelect(l.id)}
                      />
                      <span className="truncate text-sm" title={l.model_name}>{l.model_name}</span>
                    </label>
                    <button onClick={() => deleteLlm(l.id)} className="shrink-0 rounded border border-white/10 px-2 py-1 text-xs text-red-300 hover:bg-white/5">Delete</button>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                    <input
                      defaultValue={l.nickname || ""}
                      placeholder="Nickname"
                      className="rounded-md border border-white/10 bg-transparent p-2 text-sm"
                      onChange={(e) => {
                        setLlms((curr) => curr.map((x) => (x.id === l.id ? { ...x, nickname: e.target.value } : x)));
                      }}
                    />
                    <button
                      onClick={async () => {
                        const raw = (llms.find((x:any)=>x.id===l.id)?.nickname || "");
                        const nick = raw.trim();
                        const body = { nickname: nick === "" ? null : nick };
                        const res = await fetch(`/api/llms/${l.id}`, {
                          method: "PATCH",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify(body),
                        });
                        if (!res.ok) {
                          alert("Failed to update nickname");
                        } else {
                          await loadLlms();
                        }
                      }}
                      className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5"
                    >
                      Save Nickname
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {/* Prompt Boost selection */}
          <div className="mt-6">
            <div className="mb-2 text-sm opacity-80">Prompt Boost LLM</div>
            <select
              value={boostId}
              onChange={(e) => setBoostId(e.target.value)}
              className="rounded-md border border-white/10 bg-neutral-900 text-neutral-100 p-2 text-sm"
            >
              <option value="">None</option>
              {llms.map((l:any)=> (
                <option key={l.id} value={l.id}>{l.nickname || l.model_name}</option>
              ))}
            </select>
            <div className="mt-1 text-xs opacity-70">When you click the rocket icon in the dashboard, your prompt will be enhanced by this LLM and replace the textarea.</div>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
        <h2 className="mb-3 text-lg font-medium">Account</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 p-3">
            <div className="mb-2 text-sm opacity-80">Update email</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="New email" className="mb-2 w-full rounded-md border border-white/10 bg-transparent p-2" />
            <button onClick={updateEmail} className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5">Update Email</button>
          </div>
          <div className="rounded-lg border border-white/10 p-3">
            <div className="mb-2 text-sm opacity-80">Update password</div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="New password" className="mb-2 w-full rounded-md border border-white/10 bg-transparent p-2" />
            <button onClick={updatePassword} className="rounded-md border border-white/10 px-3 py-2 text-sm hover:bg-white/5">Update Password</button>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={async () => {
              try {
                await supabase.auth.signOut();
              } finally {
                window.location.href = "/";
              }
            }}
            className="rounded-md border border-red-300 px-4 py-2 text-sm text-red-300 hover:bg-red-500/10"
          >
            Log out
          </button>
        </div>
        {(acctMsg || acctErr) && (
          <div className={`mt-3 text-sm ${acctErr ? "text-red-400" : "text-green-400"}`}>{acctErr || acctMsg}</div>
        )}
      </section>

      {/* Sticky save bar */}
      <div className="sticky bottom-0 -mx-6 mt-6 border-t border-white/10 bg-black/30 p-4 backdrop-blur-md">
        <div className="mx-auto max-w-4xl text-right">
          <button onClick={saveSettings} className="rounded-md bg-indigo-600 px-4 py-2 text-white">Save Settings</button>
        </div>
      </div>
    </div>
  );
}
