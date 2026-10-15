"use client";
import dynamic from "next/dynamic";
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useLang } from "../lib/LanguageContext";
import { STRINGS } from "../lib/content";

export default function Hero() {
  const { locale } = useLang();
  const s = STRINGS[locale].hero;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden pt-24 pb-10 md:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <HeroScene />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.6 }}
          className="mx-auto w-fit rounded-full border border-espresso/15 bg-white/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] backdrop-blur"
        >
          {s.badge}
        </motion.div>

        <motion.h1
          style={{ y: yTitle }}
          className="mt-6 text-center font-display font-black leading-[0.9] tracking-tight"
        >
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
            className="block text-[15vw] md:text-[9rem]"
          >
            ZAHRA
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.55, duration: 0.8 }}
            className="text-stroke block text-[15vw] md:text-[9rem]"
          >
            CHIBANE
          </motion.span>
        </motion.h1>

        <div className="mt-4 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="text-sm leading-relaxed text-espresso/70 md:text-right"
          >
            <strong className="text-espresso">{s.role}</strong>
            <br />
            {s.intro}
          </motion.p>

          <motion.div style={{ y: yPhoto }} className="relative mx-auto">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2.6, duration: 0.8 }}
              className="relative h-64 w-52 overflow-hidden rounded-[2.5rem] border-4 border-white shadow-2xl md:h-80 md:w-64"
            >
              <Image src="/zahra.jpg" alt="Zahra Chibane" fill sizes="(max-width: 768px) 13rem, 16rem" className="object-cover" priority />
            </motion.div>
            <div className="absolute -right-4 top-6 rotate-6 rounded-2xl bg-espresso px-3 py-2 text-[11px] font-bold text-cream shadow-lg">
              {s.since}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2.7, duration: 0.7 }}
            className="flex flex-col gap-3 md:items-start"
          >
            <a href="#projets" className="rounded-full bg-espresso px-6 py-3 text-sm font-bold text-cream hover:bg-terra">
              {s.cta1}
            </a>
            <a href="#contact" className="rounded-full border-2 border-espresso px-6 py-3 text-sm font-bold hover:bg-espresso hover:text-cream">
              {s.cta2}
            </a>
            <p className="font-hand text-3xl text-terra">Zahra</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
