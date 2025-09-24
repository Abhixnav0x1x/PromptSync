"use client";
import React from "react";

type Props = {
  title: string;
  status: "idle" | "loading" | "success" | "error";
  content?: string;
  error?: string;
  onContinue?: () => void;
};

export default function ModelResponseCard({ title, status, content, error, onContinue }: Props) {
  const badge =
    status === "success"
      ? "bg-green-500/15 text-green-300"
      : status === "error"
      ? "bg-red-500/15 text-red-300"
      : status === "loading"
      ? "bg-blue-500/15 text-blue-300"
      : "bg-white/10 text-neutral-300";

  return (
    <div className="response-card min-w-[320px] max-w-[420px] h-full rounded-xl border border-white/10 bg-white/5 p-4 text-neutral-100 shadow-md backdrop-blur-md transition-shadow flex flex-col">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="truncate font-medium" title={title}>{title}</div>
        <div className="flex items-center gap-2">
          {onContinue && (
            <button
              type="button"
              title="Continue with this LLM"
              aria-label="Continue with this LLM"
              onClick={onContinue}
              className="rounded border border-white/10 bg-neutral-900 p-1 text-neutral-200 hover:bg-white/5"
            >
              {/* Arrow icon */}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          )}
          <span className={`rounded px-2 py-0.5 text-xs ${badge}`}>
            {status === "success" ? "Success" : status === "error" ? "Error" : status === "loading" ? "Loading…" : "Idle"}
          </span>
        </div>
      </div>

      <div className="relative flex-1 min-h-0">
        {status === "loading" && (
          <div className="animate-pulse space-y-2">
            <div className="h-4 w-3/5 rounded-md bg-white/10" />
            <div className="h-4 w-4/5 rounded-md bg-white/10" />
            <div className="h-24 w-full rounded-md bg-white/10" />
          </div>
        )}
        {status !== "loading" && (
          <div className="response-content h-full overflow-y-auto no-scrollbar whitespace-pre-wrap text-sm text-neutral-200">
            {status === "error" ? error : content || ""}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => content && navigator.clipboard.writeText(content)}
          className="rounded border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 transition-all hover:bg-white/5"
        >
          Copy
        </button>
        <button
          onClick={() => {
            if (!content) return;
            const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${title.replace(/[^a-z0-9-_]/gi, "_")}.txt`;
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="rounded border border-white/10 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 transition-all hover:bg-white/5"
        >
          Download
        </button>
      </div>
    </div>
  );
}
