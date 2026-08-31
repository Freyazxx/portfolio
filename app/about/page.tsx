"use client";

import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/experience";
import { skillGroups } from "@/data/skills";
import { site } from "@/data/site";
import { useLang } from "@/lib/language";
import { pick, L } from "@/lib/lang";

const arc = L(
  [
    "I started with languages.",
    "Translation taught me how meaning changes across cultures.",
    "International projects taught me how people communicate.",
    "AI made me curious about how technology could reshape both.",
    "Now, I'm exploring the intersection of language, AI, global operations and human communication.",
  ],
  [
    "我从语言开始。",
    "翻译教会我，意义如何随文化而改变。",
    "国际项目教会我，人们如何沟通。",
    "AI 让我好奇，技术如何重塑这两者。",
    "如今，我在语言、AI、全球运营与人类沟通的交汇处探索。",
  ],
);

export default function AboutPage() {
  const { lang } = useLang();

  const currently = [
    { icon: "📍", text: pick(lang, site.location) },
    { icon: "🎓", text: lang === "zh" ? "西北大学 MTI" : "MTI @ Northwest University" },
    { icon: "🌍", text: lang === "zh" ? "全球项目" : "Global Projects" },
    { icon: "🤖", text: lang === "zh" ? "AI 与氛围编程" : "AI & Vibe Coding" },
    { icon: "📚", text: lang === "zh" ? "阅读" : "Reading" },
    { icon: "🎮", text: lang === "zh" ? "游戏" : "Gaming" },
    { icon: "✈️", text: lang === "zh" ? "旅行" : "Traveling" },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={lang === "zh" ? "01 · 关于" : "01 · About"}
        title={
          <>
            {lang === "zh" ? (
              <>
                一点
                <br />
                关于我
              </>
            ) : (
              <>
                A little
                <br />
                about me
              </>
            )}
            <span className="text-accent">。</span>
          </>
        }
      />

      {/* Narrative */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <ol className="space-y-6">
            {pick(lang, arc).map((line, i) => (
              <li
                key={line}
                className={`max-w-2xl font-serif text-2xl leading-snug md:text-3xl ${
                  i === pick(lang, arc).length - 1 ? "text-accent" : "text-ink"
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
          <SectionHeading
            eyebrow={lang === "zh" ? "此刻" : "Currently"}
            title={lang === "zh" ? "我现在在哪里。" : "Where I am right now."}
          />
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
            eyebrow={lang === "zh" ? "旅程" : "Journey"}
            title={lang === "zh" ? "教育与经历。" : "Education & experience."}
            description={
              lang === "zh"
                ? "从翻译出发，进入语言、技术与全球工作交叠的领域。"
                : "A path from translation into the space where language, technology and global work overlap."
            }
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
            eyebrow={lang === "zh" ? "工具箱" : "Toolkit"}
            title={lang === "zh" ? "我使用的工具。" : "What I work with."}
            description={
              lang === "zh"
                ? "语言、AI 工具、调研能力，以及本地化背后的技术。"
                : "Languages, AI tools, research skills and the technology behind localization."
            }
          />
        </Reveal>
        <div className="mt-12">
          <Skills groups={skillGroups} />
        </div>
      </section>
    </div>
  );
}
