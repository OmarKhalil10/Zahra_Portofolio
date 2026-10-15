"use client";
import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";
import { STRINGS, EMAIL, LINKEDIN } from "../lib/content";

export default function CTA() {
  const { locale } = useLang();
  const s = STRINGS[locale].cta;
  return (
    <section className="bg-terra py-20 text-white md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-black leading-tight md:text-6xl"
        >
          {s.title}
        </motion.h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">{s.text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`mailto:${EMAIL}`} className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-terra-deep hover:bg-cream">
            {s.btn1} — {EMAIL}
          </a>
          <a href={LINKEDIN} target="_blank" rel="noreferrer" className="rounded-full border-2 border-white px-8 py-3.5 text-sm font-bold hover:bg-white hover:text-terra-deep">
            {s.btn2} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
