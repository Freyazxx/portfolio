"use client";

import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { useLang } from "@/lib/language";

export default function UcsbPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={isZh ? "05 · 加州，2024" : "05 · California, 2024"}
        title={
          <>
            {isZh ? (
              <>
                加州大学
                <br />
                圣塔芭芭拉分校
              </>
            ) : (
              <>
                UC Santa
                <br />
                Barbara
              </>
            )}
            <span className="text-accent">。</span>
          </>
        }
        intro={
          isZh
            ? "在加州学习、旅行与生活的一个夏天——那种永远不会出现在成绩单上的学习。"
            : "A summer of study, travel and living in California — the kind of learning that never shows up on a transcript."
        }
        meta={
          <span>
            <span className="text-muted">{isZh ? "项目" : "Program"}</span> ·{" "}
            {isZh ? "国际教育项目" : "International Education Program"}
          </span>
        }
      />

      <section className="mt-16 max-w-2xl md:mt-20">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-strong md:text-lg">
            {isZh
              ? "2024 年夏天，我通过一个国际教育项目来到加州大学圣塔芭芭拉分校。课堂之外，是海岸、新的朋友，和一种不同的生活节奏——校园、太平洋，以及许多个第一次。"
              : "I spent the summer of 2024 at UC Santa Barbara through an international education program. Between classes, there was the coast, new friends, and a different rhythm of life — campus, the Pacific, and a lot of firsts."}
          </p>
        </Reveal>
      </section>

      <section className="mt-20 pb-24 md:mt-28">
        <Reveal>
          <p className="border-l border-accent pl-6 font-serif text-xl italic text-muted-strong md:text-2xl">
            {isZh
              ? "有时候，学习发生在课堂之外。"
              : "Sometimes learning happens outside the classroom."}
          </p>
        </Reveal>
      </section>
    </div>
  );
}
