"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { profilePhotos } from "@/data/gallery";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";
import { SmartImage } from "./SmartImage";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  const reduce = useReducedMotion();
  const { lang } = useLang();
  const initial = reduce ? "show" : "hidden";

  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 lg:pt-28">
      <div className="grid items-end gap-14 lg:grid-cols-12 lg:gap-8">
        {/* Text */}
        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="lg:col-span-7"
        >
          <motion.p variants={item} className="eyebrow">
            {lang === "zh" ? "作品集" : "Portfolio"} — {new Date().getFullYear()}
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 font-serif text-[3.25rem] leading-[0.98] tracking-tight text-ink md:text-8xl"
          >
            {lang === "zh" ? (
              "周晓萱"
            ) : (
              <>
                Xiaoxuan
                <br />
                Zhou
              </>
            )}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 font-serif text-xl italic text-muted-strong md:text-2xl"
          >
            {pick(lang, site.tagline)}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong md:text-lg"
          >
            {pick(lang, site.headline)}
          </motion.p>

          <motion.p variants={item} className="mt-3 text-sm text-muted">
            {pick(lang, site.intro)}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
            >
              {lang === "zh" ? "查看我的旅程" : "View My Journey"}
            </Link>
            <Link
              href="/hcr"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              {lang === "zh" ? "查看经历" : "View Experience"}
            </Link>
            <Link
              href={site.resume}
              className="inline-flex items-center gap-2 px-2 py-3 text-sm text-muted-strong underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {lang === "zh" ? "下载简历" : "Download Resume"}
              <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Photo collage */}
        <motion.div
          variants={container}
          initial={initial}
          animate="show"
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col gap-4 pt-12 md:gap-6">
              <motion.div variants={item}>
                <SmartImage
                  src={profilePhotos[2].src}
                  alt={profilePhotos[2].alt}
                  ratio="4/3"
                />
              </motion.div>
              <motion.div variants={item} className="-ml-4 md:-ml-8">
                <SmartImage
                  src={profilePhotos[1].src}
                  alt={profilePhotos[1].alt}
                  ratio="1/1"
                />
              </motion.div>
            </div>
            <motion.div variants={item} className="-mt-6">
              <SmartImage
                src={profilePhotos[0].src}
                alt={profilePhotos[0].alt}
                ratio="4/5"
                monogram="XZ"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
