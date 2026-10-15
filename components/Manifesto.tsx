"use client";
import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";
import { STRINGS } from "../lib/content";

export default function Manifesto() {
  const { locale } = useLang();
  const s = STRINGS[locale].manifesto;
  const words = s.text.split(" ");
  return (
    <section className="relative bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto max-w-5xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-terra">{s.kicker}</p>
        <h2 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-6xl">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className={`mr-3 inline-block ${["engagent", "livrent", "comptent.", "engage,", "deliver,", "matter."].includes(w) ? "text-terra" : ""}`}
            >
              {w}
            </motion.span>
          ))}
        </h2>
        <p className="mt-6 font-hand text-4xl text-blush">Zahra Chibane</p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {s.stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-cream/15 bg-cocoa p-5"
            >
              <p className="font-display text-4xl font-black text-terra">{st.n}</p>
              <p className="mt-2 text-xs leading-snug text-cream/70">{st.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
