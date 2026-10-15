"use client";
import { useState } from "react";
import { useLang } from "../lib/LanguageContext";
import { STRINGS, EMAIL, LINKEDIN } from "../lib/content";

export default function Contact() {
  const { locale } = useLang();
  const s = STRINGS[locale].contact;
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [msg, setMsg] = useState("");
  const href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio — ${name}`)}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${from})`)}`;

  return (
    <section id="contact" className="bg-espresso py-20 text-cream md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-terra">{s.kicker}</p>
          <h2 className="mt-2 font-display text-5xl font-black leading-[0.95] md:text-7xl">
            Créer,<br />Piloter,<br /><span className="text-terra">Raconter.</span>
          </h2>
          <div className="mt-8 space-y-3 text-sm">
            <a href={`mailto:${EMAIL}`} className="block rounded-2xl border border-cream/15 bg-cocoa p-4 hover:border-terra">✉ {EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="block rounded-2xl border border-cream/15 bg-cocoa p-4 hover:border-terra">in LinkedIn ↗</a>
            <a href="/cv-zahra-chibane.pdf" download className="block rounded-2xl bg-terra p-4 font-bold text-white">↓ CV — Zahra Chibane (PDF)</a>
          </div>
        </div>
        <div className="rounded-3xl bg-cream p-6 text-espresso md:p-8">
          <label className="text-xs font-bold uppercase tracking-widest">{s.name}</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-espresso/15 p-3 text-sm" placeholder="Marie Dupont" />
          <label className="mt-4 block text-xs font-bold uppercase tracking-widest">{s.email}</label>
          <input value={from} onChange={(e) => setFrom(e.target.value)} className="mt-1 w-full rounded-xl border border-espresso/15 p-3 text-sm" placeholder="marie@entreprise.fr" />
          <label className="mt-4 block text-xs font-bold uppercase tracking-widest">{s.msg}</label>
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={5} className="mt-1 w-full rounded-xl border border-espresso/15 p-3 text-sm" placeholder={locale === "fr" ? "Bonjour Zahra, parlons de votre alternance…" : "Hello Zahra, let's talk about your apprenticeship…"} />
          <a href={href} className="mt-5 block rounded-full bg-espresso py-3.5 text-center text-sm font-bold text-cream hover:bg-terra">
            {s.send}
          </a>
        </div>
      </div>
      <footer className="mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-xs text-cream/50 md:flex-row">
        <p>{STRINGS[locale].footer.rights}</p>
        <p className="font-display text-2xl font-black text-cream/20">ZAHRA CHIBANE</p>
        <a href="#top" className="rounded-full border border-cream/20 px-4 py-2 hover:border-terra">{STRINGS[locale].footer.back} ↑</a>
      </footer>
    </section>
  );
}
