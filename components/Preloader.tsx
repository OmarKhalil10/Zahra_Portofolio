"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "../lib/LanguageContext";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const { locale } = useLang();

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => {
        if (c >= 100) {
          clearInterval(t);
          setTimeout(() => setDone(true), 350);
          return 100;
        }
        return c + 4;
      });
    }, 40);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-espresso text-cream"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-black tracking-tight"
          >
            Zahra <span className="text-terra">Chibane</span>
          </motion.p>
          <p className="mt-2 text-xs uppercase tracking-[0.35em] text-cream/60">
            {locale === "fr" ? "Chargement du portfolio" : "Loading portfolio"}
          </p>
          <p className="mt-6 font-display text-7xl font-black text-cream/20">{count}%</p>
          <div className="mt-4 h-1 w-48 overflow-hidden rounded-full bg-cream/15">
            <div className="h-full bg-terra transition-all" style={{ width: `${count}%` }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
