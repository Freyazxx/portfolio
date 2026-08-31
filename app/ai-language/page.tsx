"use client";

import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { aiLanguageProject } from "@/data/projects";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";

const { highlights, process } = aiLanguageProject;

export default function AiLanguagePage() {
  const { lang } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={pick(lang, aiLanguageProject.kicker)}
        title={
          <>
            {pick(lang, aiLanguageProject.title)}
            <br />
            <span className="text-2xl font-normal text-muted-strong md:text-4xl">
              {pick(lang, aiLanguageProject.subtitle)}
            </span>
          </>
        }
        intro={pick(lang, aiLanguageProject.overview)}
        meta={
          <>
            <span>
              <span className="text-muted">{lang === "zh" ? "类型" : "Type"}</span> ·{" "}
              {lang === "zh" ? "语言数据 × 大模型评估" : "Language Data × LLM Evaluation"}
            </span>
            <span>
              <span className="text-muted">{lang === "zh" ? "时间" : "Period"}</span> ·{" "}
              {pick(lang, aiLanguageProject.period)}
            </span>
          </>
        }
      />

      {/* Highlights */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow={lang === "zh" ? "它是什么" : "What it is"}
            title={lang === "zh" ? "一个项目里的四个想法。" : "Four ideas in one project."}
            description={
              lang === "zh"
                ? "不是一篇学术论文——而是一次亲手实验，看看当 AI 进入流程后，语言工作会变成什么样。"
                : "Not an academic paper — a hands-on experiment in what language work becomes when AI is in the loop."
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal
              key={pick(lang, h.label)}
              delay={i * 0.06}
              className="bg-paper p-8 md:p-10"
            >
              <span className="eyebrow text-[0.6rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-ink">
                {pick(lang, h.label)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pick(lang, h.desc)}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20 border-t border-line pt-16 md:mt-28 md:pt-20">
        <Reveal>
          <SectionHeading
            eyebrow={lang === "zh" ? "它是如何运作的" : "How it worked"}
            title={lang === "zh" ? "从原始文本到可复用语料。" : "From raw text to reusable corpus."}
          />
        </Reveal>

        <ol className="mt-12">
          {process.map((p, i) => (
            <Reveal key={pick(lang, p.title)} delay={i * 0.05}>
              <li className="grid gap-2 border-t border-line py-7 md:grid-cols-[80px_1fr] md:gap-10">
                <span className="font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-serif text-xl text-ink md:text-2xl">
                    {pick(lang, p.title)}
                  </h4>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {pick(lang, p.desc)}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Takeaway */}
      <section className="mt-20 border-t border-line pt-16 md:pt-20">
        <Reveal>
          <p className="eyebrow">{lang === "zh" ? "我的收获" : "What I take from it"}</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
            {pick(lang, aiLanguageProject.takeaway)}
          </p>
        </Reveal>
      </section>

      <div className="pb-24" />
    </div>
  );
}
