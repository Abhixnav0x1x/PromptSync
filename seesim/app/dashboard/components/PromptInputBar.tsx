"use client";
import React, { useEffect, useRef, useState } from "react";
import { createSupabaseClient } from "@/lib/supabase/client";

type Props = {
  prompt: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
  onAttach?: (dataUrl: string | null, file?: File | null) => void;
  onNewChat?: () => void;
  onSaveChat?: () => void;
  initialAttachedName?: string;
  onBoost?: () => void;
};

export default function PromptInputBar({ prompt, onChange, onSubmit, disabled, onAttach, onNewChat, onSaveChat, initialAttachedName, onBoost }: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [attachedName, setAttachedName] = useState<string | null>(null);
  const supabase = createSupabaseClient();
  // Sync attached name from parent (used when loading past conversations)
  useEffect(() => {
    if (initialAttachedName) setAttachedName(initialAttachedName);
    else setAttachedName(null);
  }, [initialAttachedName]);
  async function compressImageToDataUrl(file: File, maxDim = 1280, quality = 0.85): Promise<string> {
    const img = document.createElement("img");
    const reader = new FileReader();
    const loadFile = new Promise<string>((resolve, reject) => {
      reader.onload = () => resolve(String(reader.result));
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
    const dataUrl = await loadFile;
    await new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error("Image load failed"));
      img.src = dataUrl;
    });
    const { width, height } = img;
    const scale = Math.min(1, maxDim / Math.max(width, height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(width * scale);
    canvas.height = Math.round(height * scale);
    const ctx = canvas.getContext("2d");
    if (!ctx) return dataUrl;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // Prefer JPEG to reduce size, fallback to PNG if needed
    const out = canvas.toDataURL("image/jpeg", quality);
    return out || dataUrl;
  }

  function clearAttachment() {
    setAttachedName(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onAttach?.(null, null);
  }

  return (
    <div className="composebar sticky bottom-0 z-30 border-t border-white/10 bg-black/70 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="mx-auto max-w-none p-3">
        <div className="flex flex-col gap-2">
          {attachedName && (
            <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-neutral-200 backdrop-blur">
              <div className="flex min-w-0 items-center gap-2">
                {/* Paperclip icon */}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
                  <path d="M21.44 11.05l-8.49 8.49a6 6 0 01-8.49-8.49l9.9-9.9a4 4 0 015.66 5.66l-9.9 9.9a2 2 0 01-2.83-2.83l8.49-8.49" />
                </svg>
                <span className="truncate" title={attachedName}>{attachedName}</span>
              </div>
              <button
                type="button"
                aria-label="Remove attachment"
                title="Remove attachment"
                onClick={clearAttachment}
                className="ml-2 rounded border border-white/10 bg-neutral-900 px-2 py-0.5 text-[11px] text-neutral-200 hover:bg-white/5"
              >
                ×
              </button>
            </div>
          )}
          <textarea
            value={prompt}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter a prompt..."
            className="compose-textarea w-full resize-none min-h-[80px] rounded-lg p-3 border border-white/10 bg-neutral-900 text-neutral-100 placeholder:text-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
          />

          {/* Hidden file input for image attachment */}
          <input
            id="compose-file-input"
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (!file) {
                clearAttachment();
                return;
              }
              try {
                // Try uploading original file for best quality
                const path = `attachments/${Date.now()}_${Math.random().toString(36).slice(2)}_${file.name}`;
                const { error: upErr } = await supabase.storage.from("attachments").upload(path, file, {
                  cacheControl: "3600",
                  contentType: file.type || "application/octet-stream",
                  upsert: false,
                });
                if (!upErr) {
                  const { data } = supabase.storage.from("attachments").getPublicUrl(path);
                  const publicUrl = data?.publicUrl;
                  if (publicUrl) {
                    setAttachedName(file.name);
                    onAttach?.(publicUrl, file);
                    return;
                  }
                }
                // Fallback to compressed data URL if storage not available
                const compressed = await compressImageToDataUrl(file, 1024, 0.7);
                setAttachedName(file.name);
                onAttach?.(compressed, file);
              } catch (err) {
                // Fallback to raw data URL if compression fails
                const fallbackReader = new FileReader();
                fallbackReader.onload = () => {
                  setAttachedName(file.name);
                  onAttach?.(String(fallbackReader.result), file);
                };
                fallbackReader.readAsDataURL(file);
              }
            }}
          />

          <div className="flex items-center gap-2">
            <button
              aria-label="Submit prompt"
              title="Submit prompt"
              onClick={onSubmit}
              disabled={disabled}
              className="submit-btn inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-600 text-white shadow-sm transition-all duration-200 hover:opacity-90 disabled:opacity-60"
            >
              {/* Paper plane */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22l-4-9-9-4 20-7z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Prompt boost"
              title="Prompt boost"
              onClick={onBoost}
              disabled={!onBoost}
              className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5 disabled:opacity-50"
            >
              {/* Rocket */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4" />
                <path d="M14 4s6 1 6 7-6 9-6 9-6-3-6-9 6-7 6-7z" />
                <circle cx="12" cy="9" r="2" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Attach file"
              title="Attach file"
              className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5"
              onClick={() => fileInputRef.current?.click()}
            >
              {/* Paperclip */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21.44 11.05l-8.49 8.49a6 6 0 01-8.49-8.49l9.9-9.9a4 4 0 015.66 5.66l-9.9 9.9a2 2 0 01-2.83-2.83l8.49-8.49" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Start new chat"
              title="Start new chat"
              className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5"
              onClick={() => { clearAttachment(); onNewChat?.(); }}
            >
              {/* Plus icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Save chat"
              title="Save chat"
              className="icon-btn inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-neutral-900 text-neutral-200 transition-all duration-200 hover:bg-white/5"
              onClick={onSaveChat}
            >
              {/* Floppy disk icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                <polyline points="17 21 17 13 7 13 7 21"/>
                <polyline points="7 3 7 8 15 8"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
