"use client";

import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoStory } from "@/components/PhotoStory";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Reveal } from "@/components/motion/Reveal";
import { worldGamesPhotos, fisuPhotos } from "@/data/gallery";
import { useLang } from "@/lib/language";
import { L } from "@/lib/lang";

const duties = L(
  [
    "International event language service",
    "On-site interpreting in the customs supervision area",
    "Communicating with foreign athletes and officials",
    "Explaining customs and clearance policy",
    "Coordinating between customs, the organizing committee and delegations",
    "Handling spontaneous cross-cultural situations",
  ],
  [
    "国际赛事语言服务",
    "在海关监管区进行现场口译",
    "与外籍运动员和官员沟通",
    "讲解海关与通关政策",
    "在海关、组委会与代表团之间协调",
    "处理突发的跨文化情境",
  ],
);

export default function GlobalEventsPage() {
  const { lang } = useLang();
  const isZh = lang === "zh";

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={isZh ? "04 · 全球赛事" : "04 · Global Events"}
        title={
          <>
            {isZh ? (
              <>
                我人生的
                <br />
                一个章节
              </>
            ) : (
              <>
                A chapter
                <br />
                of my life
              </>
            )}
            <span className="text-accent">。</span>
          </>
        }
        intro={
          isZh
            ? "国际赛事教会了我课堂上学不到的东西——如何在真实的时刻、真实的利害与真实的人之间，实时倾听、翻译与协调。"
            : "International events taught me something a classroom couldn't — how to listen, translate and coordinate in real time, with real stakes and real people."
        }
      />

      {/* Chengdu World Games */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow={isZh ? "2025 · 成都" : "2025 · Chengdu"}
            title={isZh ? "成都世界运动会" : "Chengdu World Games"}
            description={
              isZh
                ? "海关抵离口岸的语言服务与协调——帮助运动员、官员与组委会彼此理解。"
                : "Customs Arrival & Departure language service and coordination — helping athletes, officials and the organizing committee understand each other."
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="space-y-4">
                {duties[lang].map((d) => (
                  <li
                    key={d}
                    className="flex gap-4 text-sm leading-relaxed text-muted-strong md:text-base"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="border-l border-line-strong pl-8">
                <p className="font-serif text-6xl leading-none text-accent">
                  1000+
                </p>
                <p className="mt-4 text-sm text-muted">
                  {isZh
                    ? "在抵离两端服务与协调的人次"
                    : "people served and coordinated across arrivals and departures"}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Story chapters */}
      <section className="mt-20 space-y-20 border-t border-line pt-16 md:mt-28 md:space-y-28 md:pt-24">
        <PhotoStory
          photo={worldGamesPhotos[0]}
          kicker={isZh ? "01 · 抵达" : "01 · Arrival"}
          title={isZh ? "运动员从世界各地而来。" : "Athletes land from everywhere."}
          body={
            isZh ? (
              <>
                <p>
                  成都汇聚了来自世界各地的运动员与官员。在海关监管区，语言成了他们与赛事之间最先要跨越的东西。
                </p>
                <p>
                  一次准确的政策讲解、一个拼写无误的名字、片刻的耐心——这些小事，让一台庞大的机器持续运转。
                </p>
              </>
            ) : (
              <>
                <p>
                  Chengdu fills up with athletes and officials from all over the
                  world. At the customs supervision area, language becomes the
                  first thing between them and the games.
                </p>
                <p>
                  A correct explanation of policy, a name spelled right, a moment
                  of patience — small things that keep a big machine moving.
                </p>
              </>
            )
          }
        />

        <PhotoStory
          photo={worldGamesPhotos[1]}
          kicker={isZh ? "02 · 现场" : "02 · In the zone"}
          title={isZh ? "在关键处口译。" : "Interpreting where it matters."}
          flip
          body={
            isZh ? (
              <>
                <p>
                  在现场，我在外籍运动员、官员、海关关员与组委会之间进行口译——常常是几个人、几种语言、几个诉求同时交织。
                </p>
                <p>
                  这份工作与其说是追求完美的用词，不如说是让大家保持冷静、清晰，朝着同一个方向前进。
                </p>
              </>
            ) : (
              <>
                <p>
                  On the spot, I interpreted between foreign athletes, officials,
                  customs officers and the organizing committee — often several
                  people, several languages, several priorities at once.
                </p>
                <p>
                  The work is less about perfect words and more about keeping
                  everyone calm, clear and moving in the same direction.
                </p>
              </>
            )
          }
        />

        <PhotoStory
          photo={worldGamesPhotos[2]}
          kicker={isZh ? "03 · 喧嚣之后" : "03 · After the rush"}
          title={isZh ? "那些小瞬间会留在心里。" : "The small moments stay with you."}
          body={
            isZh ? (
              <>
                <p>
                  场次间隙——一个被解决的问题、一位运动员的微笑、一座为举办世界赛事而自豪的城市。
                </p>
                <p>正是这些瞬间，让漫长的付出变得值得。</p>
              </>
            ) : (
              <>
                <p>
                  Between sessions — a solved problem, a smile from an athlete, a
                  city proud to host the world.
                </p>
                <p>These are the moments that made the long hours worth it.</p>
              </>
            )
          }
        />
      </section>

      {/* FISU — photographs in place, story to be expanded */}
      <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="FISU"
            title={isZh ? "FISU 世界大学生运动会" : "FISU World University Games"}
            description={
              isZh
                ? "来自 FISU 世界大学生运动会的照片——完整故事敬请期待。"
                : "Photographs from the FISU World University Games — the full story to come."
            }
          />
        </Reveal>
        <div className="mt-10">
          <PhotoGrid photos={fisuPhotos} />
        </div>
      </section>

      <div className="pb-24" />
    </div>
  );
}
