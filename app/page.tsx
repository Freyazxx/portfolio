import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SmartImage } from "@/components/SmartImage";
import { lifePhotos } from "@/data/gallery";

const selectedWork = [
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
];

const keywords = [
  "Language",
  "AI",
  "Global Experience",
  "Cross-cultural Communication",
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Who is Xiaoxuan */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <Eyebrow>Who is Xiaoxuan</Eyebrow>
            <h2 className="mt-6 max-w-3xl text-3xl leading-tight md:text-5xl">
              Trained in language, curious about AI,{" "}
              <em className="text-accent">working across the world.</em>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-strong md:text-lg">
              I studied translation, then discovered the interesting work happens
              at the edges — where meaning shifts between cultures, where AI
              changes how language gets done, and where real people coordinate
              across time zones.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {keywords.map((k) => (
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
              <Eyebrow>Selected work</Eyebrow>
              <Link
                href="/about"
                className="hidden text-sm text-muted transition-colors hover:text-accent sm:block"
              >
                Full journey →
              </Link>
            </div>
          </Reveal>

          <div className="mt-6">
            {selectedWork.map((w) => (
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
                <Eyebrow>Life outside work</Eyebrow>
                <h2 className="mt-5 font-serif text-3xl md:text-4xl">
                  Places, people &amp; small moments.
                </h2>
              </div>
              <Link
                href="/life"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                See more →
              </Link>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {lifePhotos.slice(0, 3).map((p, i) => (
              <Reveal key={`${p.alt}-${i}`} delay={i * 0.08}>
                <SmartImage src={p.src} alt={p.alt} ratio={p.ratio} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
