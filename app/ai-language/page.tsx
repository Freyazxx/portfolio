import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { aiLanguageProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "MT+PE — AI & Language · Xiaoxuan Zhou",
  description:
    "An AI + language experiment: building and quality-assessing a 100,000+ word oil & energy domain bilingual corpus with LLM evaluation and human post-editing.",
};

const { highlights, process } = aiLanguageProject;

export default function AiLanguagePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={aiLanguageProject.kicker}
        title={
          <>
            MT+PE
            <br />
            <span className="text-2xl font-normal text-muted-strong md:text-4xl">
              {aiLanguageProject.subtitle}
            </span>
          </>
        }
        intro={aiLanguageProject.overview}
        meta={
          <>
            <span>
              <span className="text-muted">Type</span> · Language Data × LLM
              Evaluation
            </span>
            <span>
              <span className="text-muted">Period</span> ·{" "}
              {aiLanguageProject.period}
            </span>
          </>
        }
      />

      {/* Highlights */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow="What it is"
            title="Four ideas in one project."
            description="Not an academic paper — a hands-on experiment in what language work becomes when AI is in the loop."
          />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 0.06} className="bg-paper p-8 md:p-10">
              <span className="eyebrow text-[0.6rem]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-ink">{h.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{h.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mt-20 border-t border-line pt-16 md:mt-28 md:pt-20">
        <Reveal>
          <SectionHeading
            eyebrow="How it worked"
            title="From raw text to reusable corpus."
          />
        </Reveal>

        <ol className="mt-12">
          {process.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <li className="grid gap-2 border-t border-line py-7 md:grid-cols-[80px_1fr] md:gap-10">
                <span className="font-serif text-2xl text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-serif text-xl text-ink md:text-2xl">
                    {p.title}
                  </h4>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                    {p.desc}
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
          <p className="eyebrow">What I take from it</p>
          <p className="mt-6 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
            {aiLanguageProject.takeaway}
          </p>
        </Reveal>
      </section>

      <div className="pb-24" />
    </div>
  );
}
