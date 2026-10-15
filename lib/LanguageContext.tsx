"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Locale } from "./content";

const Ctx = createContext<{ locale: Locale; setLocale: (l: Locale) => void; t: <T>(fr: T, en: T) => T }>({
  locale: "fr",
  setLocale: () => {},
  t: (fr) => fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Always render "fr" on first pass (server + client) to avoid hydration
  // mismatch, then sync the saved locale after mount.
  const [locale, setLocale] = useState<Locale>("fr");
  useEffect(() => {
    const saved = localStorage.getItem("zahra-locale");
    if (saved === "fr" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(saved);
    }
  }, []);
  const change = (l: Locale) => {
    setLocale(l);
    localStorage.setItem("zahra-locale", l);
  };
  const t = <T,>(fr: T, en: T): T => (locale === "fr" ? fr : en);
  return <Ctx.Provider value={{ locale, setLocale: change, t }}>{children}</Ctx.Provider>;
}

export const useLang = () => useContext(Ctx);
