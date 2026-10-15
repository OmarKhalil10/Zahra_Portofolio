"use client";
import { motion } from "framer-motion";
import { useLang } from "../lib/LanguageContext";
import { STRINGS, SKILLS } from "../lib/content";

export default function SkillsHall() {
  const { locale } = useLang();
  const s = STRINGS[locale].skills;
  return (
    <section id="competences" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-bold uppercase tracking-[0.35em] text-terra">{s.kicker}</p>
        <h2 className="mt-2 font-display text-4xl font-black md:text-6xl">{s.title}</h2>
        <p className="mt-3 text-sm text-espresso/70">{s.sub}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...SKILLS]
            .sort((a, b) => b.endorsements - a.endorsements)
            .map((sk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.07 }}
                whileHover={{ rotateY: 8, rotateX: -6, y: -6 }}
                className={`group rounded-3xl border p-5 shadow-lg [perspective:800px] ${
                  sk.verified ? "border-gold bg-espresso text-cream" : "border-espresso/10 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-terra/15 px-3 py-1 text-[11px] font-bold text-terra">
                    {sk.endorsements} {s.endorsements}
                  </span>
                  {sk.verified && <span className="text-lg" title={s.verified}>✔</span>}
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {locale === "fr" ? sk.label.fr : sk.label.en}
                </h3>
                <p className={`mt-1 text-xs ${sk.verified ? "text-cream/70" : "text-espresso/60"}`}>
                  {locale === "fr" ? sk.detail.fr : sk.detail.en}
                </p>
                {sk.verified && <p className="mt-2 text-[11px] font-bold uppercase tracking-widest text-gold">★ {s.verified}</p>}
              </motion.div>
            ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-xs font-bold">
          {["Notion", "Trello", "Jira", "Slack", "Power BI", "SQL", "Google Analytics", "HubSpot", "Salesforce", "Canva", "Figma", "CapCut", "PowerPoint", "SharePoint"].map((t) => (
            <span key={t} className="rounded-full border border-espresso/15 bg-white px-4 py-2">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
