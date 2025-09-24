"use client";
import React, { useEffect, useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: { model_name: string; api_key: string; nickname: string }) => Promise<void> | void;
  saving?: boolean;
  error?: string | null;
};

export default function LLMModal({ open, onClose, onSave, saving, error }: Props) {
  const [form, setForm] = useState({ model_name: "", api_key: "", nickname: "" });

  // Clear inputs every time the modal opens
  useEffect(() => {
    if (open) {
      setForm({ model_name: "", api_key: "", nickname: "" });
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/30 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-black text-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 text-lg font-semibold">Add LLM</div>
        <div className="space-y-3">
          <input
            className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder="Model name (e.g., openai/gpt-4o)"
            value={form.model_name}
            onChange={(e) => setForm((f) => ({ ...f, model_name: e.target.value }))}
          />
          <input
            className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder="API key"
            type="password"
            value={form.api_key}
            onChange={(e) => setForm((f) => ({ ...f, api_key: e.target.value }))}
          />
          <input
            className="w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-neutral-100 placeholder:text-neutral-400 outline-none focus:ring-2 focus:ring-indigo-500/40"
            placeholder="Nickname (optional)"
            value={form.nickname}
            onChange={(e) => setForm((f) => ({ ...f, nickname: e.target.value }))}
          />
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="flex items-center justify-end gap-2 pt-1">
            <button type="button" onClick={onClose} className="rounded px-3 py-1.5 text-sm transition-all hover:bg-white/10">
              Cancel
            </button>
            <button
              type="button"
              disabled={saving}
              onClick={() => onSave(form)}
              className="rounded bg-black px-3 py-1.5 text-sm text-white transition-all disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
