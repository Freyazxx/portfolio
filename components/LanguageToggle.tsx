"use client";

import { useLang } from "@/lib/language";
import { cn } from "@/lib/utils";

/** Compact EN / 中文 segmented toggle. */
export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-line-strong p-0.5",
        className,
      )}
    >
      {(["en", "zh"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={cn(
            "rounded-full px-2.5 py-1 font-mono text-[0.65rem] leading-none tracking-[0.12em] transition-colors",
            lang === l ? "bg-ink text-paper" : "text-muted hover:text-ink",
          )}
        >
          {l === "en" ? "EN" : "中文"}
        </button>
      ))}
    </div>
  );
}
