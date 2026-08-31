"use client";

import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Metric } from "@/components/Metric";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Reveal } from "@/components/motion/Reveal";
import { hcrProject } from "@/data/projects";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";

const { research, qa, workflow, principle } = hcrProject;

export default function HcrPage() {
  const { lang } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={lang === "zh" ? "02 · HCR 案例" : "02 · HCR Case Study"}
        title={
          <>
            {lang === "zh" ? (
              <>
                华为全球
                <br />
                客户调研
              </>
            ) : (
              <>
                Huawei Global
                <br />
                Customer Research
              </>
            )}
            <span className="text-accent">。</span>
          </>
        }
        intro={pick(lang, hcrProject.overview)}
        meta={
          <>
            <span>
              <span className="text-muted">{lang === "zh" ? "客户" : "Client"}</span> ·{" "}
              {pick(lang, hcrProject.client)}
            </span>
            <span>
              <span className="text-muted">{lang === "zh" ? "部门" : "Division"}</span> ·{" "}
              {pick(lang, hcrProject.department)}
            </span>
            <span>
              <span className="text-muted">{lang === "zh" ? "角色" : "Role"}</span> ·{" "}
              {pick(lang, hcrProject.role)}
            </span>
            <span>
              <span className="text-muted">{lang === "zh" ? "时间" : "Period"}</span> ·{" "}
              {pick(lang, hcrProject.period)}
            </span>
          </>
        }
      />

      {/* Section 1 — Global Customer Research */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow={pick(lang, research.kicker)}
            title={pick(lang, research.title)}
            description={pick(lang, research.intro)}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="space-y-4">
                {pick(lang, research.bullets).map((b) => (
                  <li
                    key={b}
                    className="flex gap-4 text-sm leading-relaxed text-muted-strong md:text-base"
                  >
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 border-l border-line pl-8">
                {research.metrics.map((m) => (
                  <Metric
                    key={pick(lang, m.label)}
                    value={pick(lang, m.value)}
                    label={pick(lang, m.label)}
                  />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Section 2 — Multilingual QA × AI Workflow */}
      <section className="mt-24 border-t border-line pt-20 md:mt-32 md:pt-28">
        <Reveal>
          <SectionHeading
            eyebrow={pick(lang, qa.kicker)}
            title={pick(lang, qa.title)}
            description={pick(lang, qa.intro)}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8">
            {qa.metrics.map((m) => (
              <Metric
                key={pick(lang, m.label)}
                value={pick(lang, m.value)}
                label={pick(lang, m.label)}
              />
            ))}
          </div>
        </Reveal>

        {/* QA checklist */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{pick(lang, qa.checklistTitle)}</p>
              <ul className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
                {pick(lang, qa.checklist).map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-sm text-muted-strong"
                  >
                    <span
                      aria-hidden
                      className="block h-px w-5 bg-line-strong"
                    />
                    {c}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-wrap gap-2">
                {pick(lang, qa.tools).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-line-strong px-3 py-1.5 font-mono text-xs text-muted-strong"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="border border-line bg-paper-deep/40 p-8 md:p-10">
                <p className="eyebrow mb-8">{lang === "zh" ? "工作流" : "The workflow"}</p>
                <AIWorkflow steps={workflow} principle={principle} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="mt-24 border-t border-line pt-16 md:pt-20">
        <Reveal>
          <p className="eyebrow">{lang === "zh" ? "我的收获" : "What I take from it"}</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
            {pick(lang, hcrProject.takeaway)}
          </p>
        </Reveal>
      </section>

      {/* Bottom spacer */}
      <div className="pb-24" />
    </div>
  );
}
