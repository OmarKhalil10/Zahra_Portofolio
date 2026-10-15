"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { STRINGS, PROJECTS, Project } from "../lib/content";

function Modal({ p, onClose }: { p: Project; onClose: () => void }) {
  const { locale } = useLang();
  const s = STRINGS[locale].projects;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-end justify-center bg-espresso/70 p-2 backdrop-blur-sm md:items-center md:p-8"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-cream p-6 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="rounded-full bg-terra/15 px-3 py-1 text-xs font-bold text-terra">
              {locale === "fr" ? p.category.fr : p.category.en} · {p.year}
            </span>
            <h3 className="mt-3 font-display text-2xl font-black md:text-4xl">
              {locale === "fr" ? p.title.fr : p.title.en}
            </h3>
            <p className="text-sm text-espresso/60">{p.org}</p>
          </div>
          <button onClick={onClose} className="rounded-full bg-espresso px-4 py-2 text-xs font-bold text-cream">
            {s.close} ✕
          </button>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-espresso/80">
          {locale === "fr" ? p.context.fr : p.context.en}
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-5">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terra">{s.role}</h4>
            <p className="mt-2 text-sm">{locale === "fr" ? p.role.fr : p.role.en}</p>
            <h4 className="mt-4 text-xs font-bold uppercase tracking-widest text-terra">{s.deliverables}</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {(locale === "fr" ? p.deliverables.fr : p.deliverables.en).map((d, i) => (
                <li key={i}>✦ {d}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-espresso p-5 text-cream">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terra">{s.results}</h4>
            <ul className="mt-2 space-y-1 text-sm">
              {(locale === "fr" ? p.kpis.fr : p.kpis.en).map((k, i) => (
                <li key={i}>✦ {k}</li>
              ))}
            </ul>
            <h4 className="mt-4 text-xs font-bold uppercase tracking-widest text-terra">{s.tools}</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tools.map((t, i) => (
                <span key={i} className="rounded-full border border-cream/25 px-3 py-1 text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-espresso/10 bg-white">
          <iframe
            src={`https://drive.google.com/file/d/${p.driveId}/preview`}
            className="h-[420px] w-full md:h-[520px]"
            allow="autoplay"
            title={locale === "fr" ? p.title.fr : p.title.en}
          />
        </div>
        <a
          href={`https://drive.google.com/file/d/${p.driveId}/view?usp=sharing`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 block rounded-full bg-terra py-3 text-center text-sm font-bold text-white hover:bg-terra-deep"
        >
          {s.viewDoc} ↗
        </a>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const { locale } = useLang();
  const s = STRINGS[locale].projects;
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projets" className="bg-blush/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-terra">{s.kicker}</p>
        <h2 className="mt-2 font-display text-4xl font-black md:text-6xl">{s.title}</h2>
        <p className="mt-3 max-w-xl text-sm text-espresso/70">{s.sub}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setActive(p)}
              className="tilt group overflow-hidden rounded-3xl bg-white text-left shadow-xl"
            >
              <div className="flex h-44 items-center justify-center font-display text-6xl font-black text-white" style={{ background: p.accent }}>
                {p.cover}
                <span className="ml-2 text-lg font-sans font-bold opacity-80">{p.year}</span>
              </div>
              <div className="p-5">
                <span className="text-[11px] font-bold uppercase tracking-widest text-terra">
                  {locale === "fr" ? p.category.fr : p.category.en}
                </span>
                <h3 className="mt-1 font-display text-lg font-bold leading-snug">
                  {locale === "fr" ? p.title.fr : p.title.en}
                </h3>
                <p className="mt-1 text-xs text-espresso/60">{p.org}</p>
                <span className="mt-3 inline-block text-sm font-bold text-terra group-hover:underline">
                  {locale === "fr" ? "Ouvrir le cas →" : "Open case →"}
                </span>
              </div>
            </motion.button>
          ))}

          <div className="flex flex-col justify-center rounded-3xl border-2 border-dashed border-terra/40 p-6 text-sm text-espresso/70">
            <p className="font-display text-lg font-bold text-espresso">+ Trust Bank · Rétroplanning</p>
            <p className="mt-2">{locale === "fr" ? "2 cas supplémentaires arrivent dès réception des liens Drive." : "2 more cases coming once Drive links are added."}</p>
          </div>
        </div>
      </div>

      <AnimatePresence>{active && <Modal p={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  );
}
