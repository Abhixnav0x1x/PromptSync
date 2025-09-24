"use client";
import React, { useEffect, useState } from "react";

type Props = {
  onMenuClick: () => void;
};

export default function TopBar({ onMenuClick }: Props) {
  const [theme, setTheme] = useState<"dark" | "light">("light");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("theme")) as "dark" | "light" | null;
    const initial = stored ?? "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <header className="topbar sticky top-0 z-40 border-b border-white/10 bg-black/60 text-white backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="flex w-full items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <button
            aria-label="Open menu"
            onClick={onMenuClick}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-neutral-200 transition-colors hover:bg-white/5"
          >
            <span className="i-[hamburger] block h-4 w-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </span>
          </button>
          <div className="text-3xl md:text-4xl font-bold tracking-tight">PromptSync</div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="inline-flex items-center gap-1 rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-neutral-200 transition-colors hover:bg-white/5"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {theme === "dark" ? (
              <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M21.752 15.002A9.718 9.718 0 0 1 12 21.75a9.75 9.75 0 0 1 0-19.5c.845 0 1.663.11 2.443.316a.75.75 0 0 1 .164 1.384A7.5 7.5 0 0 0 20.25 15.12a.75.75 0 0 1 1.502-.118Z"/></svg>Dark</span>
            ) : (
              <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 2.25a.75.75 0 0 1 .75.75V5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75Zm0 13.5a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5ZM4.5 12a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12Zm13.5 0a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75Zm-9.9 6.15a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.061 1.061l-1.06-1.06a.75.75 0 0 1 0-1.061Zm8.485 0a.75.75 0 0 1 1.061 0l1.06 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"/></svg>Light</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
