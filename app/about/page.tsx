import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About — Xiaoxuan Zhou",
};

const arc = [
  "I started with languages.",
  "Translation taught me how meaning changes across cultures.",
  "International projects taught me how people communicate.",
  "AI made me curious about how technology could reshape both.",
  "Now, I'm exploring the intersection of language, AI, global operations and human communication.",
];

const currently = [
  { icon: "📍", text: `${site.location}` },
  { icon: "🎓", text: "MTI @ Northwest University" },
  { icon: "🌍", text: "Global Projects" },
  { icon: "🤖", text: "AI & Vibe Coding" },
  { icon: "📚", text: "Reading" },
  { icon: "🎮", text: "Gaming" },
  { icon: "✈️", text: "Traveling" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow="01 · About"
        title={
          <>
            A little
            <br />
            about me<span className="text-accent">.</span>
          </>
        }
      />

      {/* Narrative */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <ol className="space-y-6">
            {arc.map((line, i) => (
              <li
                key={line}
                className={`max-w-2xl font-serif text-2xl leading-snug md:text-3xl ${
                  i === arc.length - 1 ? "text-accent" : "text-ink"
                }`}
              >
                {line}
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {/* Currently */}
      <section className="mt-20 border-t border-line pt-16 md:mt-28">
        <Reveal>
          <SectionHeading eyebrow="Currently" title="Where I am right now." />
          <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
            {currently.map((c) => (
              <li
                key={c.text}
                className="flex items-center gap-3 text-sm text-muted-strong"
              >
                <span aria-hidden>{c.icon}</span>
                {c.text}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Experience */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow="Journey"
            title="Education & experience."
            description="A path from translation into the space where language, technology and global work overlap."
          />
        </Reveal>
        <div className="mt-12">
          <ExperienceTimeline entries={experience} />
        </div>
      </section>

      {/* Skills */}
      <section className="mt-20 pb-24 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow="Toolkit"
            title="What I work with."
            description="Languages, AI tools, research skills and the technology behind localization."
          />
        </Reveal>
        <div className="mt-12">
          <Skills groups={skillGroups} />
        </div>
      </section>
    </div>
  );
}
