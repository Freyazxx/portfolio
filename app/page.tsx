"use client";

import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SmartImage } from "@/components/SmartImage";
import { lifePhotos } from "@/data/gallery";
import { useLang } from "@/lib/language";
import { pick, L } from "@/lib/lang";

const selectedWork = L(
  [
    {
      index: "01",
      kicker: "Case Study",
      title: "HCR — Huawei Global Customer Research",
      desc: "Global B2B outreach and multilingual QA across 26+ languages, powered by an AI-assisted review workflow.",
      href: "/hcr",
    },
    {
      index: "02",
      kicker: "AI + Language Experiment",
      title: "MT+PE — Oil & Energy LLM Corpus",
      desc: "Building and quality-assessing a 100,000+ word bilingual corpus, with LLM evaluation and human post-editing.",
      href: "/ai-language",
    },
    {
      index: "03",
      kicker: "Stories",
      title: "Chengdu World Games 2025",
      desc: "On-site language service and cross-cultural coordination at an international sporting event.",
      href: "/global-events",
    },
  ],
  [
    {
      index: "01",
      kicker: "案例研究",
      title: "HCR — 华为全球客户调研",
      desc: "面向全球的 B2B 客户触达与 26+ 种语言的多语种质检，由 AI 辅助复核工作流驱动。",
      href: "/hcr",
    },
    {
      index: "02",
      kicker: "AI + 语言实验",
      title: "MT+PE — 油气能源大模型语料库",
      desc: "构建并质检一个 10 万余词的双语语料库，结合大模型评估与人工译后编辑。",
      href: "/ai-language",
    },
    {
      index: "03",
      kicker: "故事",
      title: "2025 成都世界运动会",
      desc: "在一场国际体育赛事中提供现场语言服务与跨文化协调。",
      href: "/global-events",
    },
  ],
);

const keywords = L(
  ["Language", "AI", "Global Experience", "Cross-cultural Communication"],
  ["语言", "AI", "全球经历", "跨文化沟通"],
);

export default function Home() {
  const { lang } = useLang();
  const work = pick(lang, selectedWork);
  const kw = pick(lang, keywords);

  return (
    <>
      <Hero />

      {/* Who is Xiaoxuan */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <Eyebrow>{lang === "zh" ? "周晓萱是谁" : "Who is Xiaoxuan"}</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-3xl leading-tight md:text-5xl">
              {lang === "zh" ? (
                <>
                  从语言出发，对 AI 充满好奇，<em className="text-accent">在世界各地工作。</em>
                </>
              ) : (
                <>
                  Trained in language, curious about AI,{" "}
                  <em className="text-accent">working across the world.</em>
                </>
              )}
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-strong md:text-lg">
              {lang === "zh"
                ? "我学习翻译，后来发现真正有趣的工作往往发生在边界处——意义在文化之间流转的地方，AI 重塑语言工作方式的地方，以及真实的人跨越时区彼此协作的地方。"
                : "I studied translation, then discovered the interesting work happens at the edges — where meaning shifts between cultures, where AI changes how language gets done, and where real people coordinate across time zones."}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {kw.map((k) => (
                <li
                  key={k}
                  className="flex items-center gap-3 text-sm text-muted-strong"
                >
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {k}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Selected work */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-6 md:px-10">
          <Reveal>
            <div className="flex items-end justify-between">
              <Eyebrow>{lang === "zh" ? "精选项目" : "Selected work"}</Eyebrow>
              <Link
                href="/about"
                className="hidden text-sm text-muted transition-colors hover:text-accent sm:block"
              >
                {lang === "zh" ? "完整旅程 →" : "Full journey →"}
              </Link>
            </div>
          </Reveal>

          <div className="mt-6">
            {work.map((w) => (
              <Link
                key={w.href}
                href={w.href}
                className="group block border-t border-line py-10 last:border-b md:py-14"
              >
                <Reveal>
                  <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                      <p className="eyebrow text-[0.6rem]">
                        {w.index} · {w.kicker}
                      </p>
                      <h3 className="mt-4 font-serif text-2xl leading-tight text-ink transition-colors group-hover:text-accent md:text-4xl">
                        {w.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                        {w.desc}
                      </p>
                    </div>
                    <span
                      aria-hidden
                      className="text-2xl text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                    >
                      →
                    </span>
                  </div>
                </Reveal>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Life preview */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <Eyebrow>{lang === "zh" ? "工作之外的生活" : "Life outside work"}</Eyebrow>
                <h2 className="mt-5 font-serif text-3xl md:text-4xl">
                  {lang === "zh" ? "地方、人与那些小瞬间。" : "Places, people & small moments."}
                </h2>
              </div>
              <Link
                href="/life"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {lang === "zh" ? "查看更多 →" : "See more →"}
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {lifePhotos.slice(0, 3).map((p, i) => (
              <Reveal key={`${pick(lang, p.alt)}-${i}`} delay={i * 0.08}>
                <SmartImage src={p.src} alt={p.alt} ratio={p.ratio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
