"use client";
import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";
import { STRINGS } from "../lib/content";

export default function Navbar() {
  const { locale, setLocale } = useLang();
  const s = STRINGS[locale].nav;
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.2, duration: 0.7 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-espresso/10 bg-cream/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="font-display text-xl font-black tracking-tight">
          Z<span className="text-terra">.</span>Chibane
        </a>
        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <a href="#projets" className="hover:text-terra">{s.work}</a>
          <a href="#parcours" className="hover:text-terra">{s.journey}</a>
          <a href="#competences" className="hover:text-terra">{s.skills}</a>
          <a href="#contact" className="hover:text-terra">{s.contact}</a>
        </nav>
        <div className="flex items-center gap-2">
          <div className="flex rounded-full border border-espresso/15 p-1 text-xs font-bold">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`rounded-full px-3 py-1 uppercase transition ${locale === l ? "bg-espresso text-cream" : "text-espresso/60"}`}
              >
                {l}
              </button>
            ))}
          </div>
          <a
            href="/cv-zahra-chibane.pdf"
            download
            className="hidden rounded-full bg-terra px-4 py-2 text-xs font-bold text-white hover:bg-terra-deep sm:block"
          >
            {s.cv}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
