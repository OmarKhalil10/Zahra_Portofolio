"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLang } from "../lib/LanguageContext";
import { STRINGS, EXPERIENCE, EDUCATION } from "../lib/content";

function Cards({ items, dark }: { items: typeof EXPERIENCE; dark?: boolean }) {
  const { locale } = useLang();
  return (
    <div className="flex gap-5 pr-8">
      {items.map((j, i) => (
        <motion.article
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -8, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
          className={`w-[300px] shrink-0 rounded-3xl border p-6 shadow-xl md:w-[360px] ${
            dark ? "border-cream/15 bg-cocoa text-cream" : "border-espresso/10 bg-white text-espresso"
          }`}
        >
          <span className="rounded-full bg-terra/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-terra">
            {locale === "fr" ? j.tag.fr : j.tag.en}
          </span>
          <h3 className="mt-3 font-display text-xl font-bold">{j.org}</h3>
          <p className="text-sm font-semibold text-terra">{locale === "fr" ? j.role.fr : j.role.en}</p>
          <p className={`mt-1 text-xs ${dark ? "text-cream/60" : "text-espresso/60"}`}>{j.period} · {j.place}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {(locale === "fr" ? j.points.fr : j.points.en).map((p, k) => (
              <li key={k} className="flex gap-2">
                <span className="text-terra">✦</span> {p}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

export default function Journey() {
  const { locale } = useLang();
  const s = STRINGS[locale].journey;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);

  return (
    <section id="parcours" ref={ref} className="relative h-[260vh] bg-cream">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-6xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-terra">{s.kicker} · {s.hint}</p>
          <h2 className="mt-2 font-display text-4xl font-black md:text-6xl">{s.title}</h2>
        </div>
        <motion.div style={{ x }} className="mt-10 flex w-max gap-10 pl-4 md:pl-[max(1rem,calc((100vw-72rem)/2))]">
          <Cards items={EXPERIENCE} />
          <div className="flex items-center">
            <div className="mx-2 rounded-full bg-espresso px-6 py-3 font-display text-lg font-black text-cream">{s.title2}</div>
          </div>
          <Cards items={EDUCATION} dark />
        </motion.div>
      </div>
    </section>
  );
}
