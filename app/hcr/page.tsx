import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Metric } from "@/components/Metric";
import { AIWorkflow } from "@/components/AIWorkflow";
import { Reveal } from "@/components/motion/Reveal";
import { hcrProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "HCR — Huawei Global Customer Research · Xiaoxuan Zhou",
  description:
    "Case study: global B2B customer research and multilingual QA for Huawei, with an AI-assisted review workflow across 26+ languages.",
};

const { research, qa, workflow, principle } = hcrProject;

export default function HcrPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow="02 · HCR Case Study"
        title={
          <>
            Huawei Global
            <br />
            Customer Research<span className="text-accent">.</span>
          </>
        }
        intro={hcrProject.overview}
        meta={
          <>
            <span>
              <span className="text-muted">Client</span> · {hcrProject.client}
            </span>
            <span>
              <span className="text-muted">Division</span> ·{" "}
              {hcrProject.department}
            </span>
            <span>
              <span className="text-muted">Role</span> · {hcrProject.role}
            </span>
            <span>
              <span className="text-muted">Period</span> · {hcrProject.period}
            </span>
          </>
        }
      />

      {/* Section 1 — Global Customer Research */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow={research.kicker}
            title={research.title}
            description={research.intro}
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="space-y-4">
                {research.bullets.map((b) => (
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
                  <Metric key={m.label} value={m.value} label={m.label} />
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
            eyebrow={qa.kicker}
            title={qa.title}
            description={qa.intro}
          />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-wrap gap-x-16 gap-y-8">
            {qa.metrics.map((m) => (
              <Metric key={m.label} value={m.value} label={m.label} />
            ))}
          </div>
        </Reveal>

        {/* QA checklist */}
        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">{qa.checklistTitle}</p>
              <ul className="mt-6 grid grid-cols-1 gap-y-3 sm:grid-cols-2 lg:grid-cols-1">
                {qa.checklist.map((c) => (
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
                {qa.tools.map((t) => (
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
                <p className="eyebrow mb-8">The workflow</p>
                <AIWorkflow steps={workflow} principle={principle} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Takeaway */}
      <section className="mt-24 border-t border-line pt-16 md:pt-20">
        <Reveal>
          <p className="eyebrow">What I take from it</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
            {hcrProject.takeaway}
          </p>
        </Reveal>
      </section>

      {/* Bottom spacer */}
      <div className="pb-24" />
    </div>
  );
}
