"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Lang } from "@/lib/lang";
import { site } from "@/data/site";

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

/** Client-side language state — persisted to localStorage, defaults to English. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("lang") === "zh" ? "zh" : "en";
  });

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = lang === "zh" ? site.title.zh : site.title.en;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

/** Current language + setter. Call once per component; use `pick(lang, x)` for values. */
export function useLang() {
  return useContext(LangContext);
}
