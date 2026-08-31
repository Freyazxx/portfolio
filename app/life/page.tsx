"use client";

import { PageHeader } from "@/components/PageHeader";
import { SmartImage } from "@/components/SmartImage";
import { Reveal } from "@/components/motion/Reveal";
import { lifePhotos, type Photo } from "@/data/gallery";
import { useLang } from "@/lib/language";
import { pick, L } from "@/lib/lang";

const interests = L(
  [
    "Travel",
    "Photography",
    "Reading",
    "Gaming",
    "Exploring cities",
    "Movies & music",
    "Learning new things",
  ],
  ["旅行", "摄影", "阅读", "游戏", "探索城市", "电影与音乐", "学习新事物"],
);

type GridItem =
  | { type: "photo"; photo: Photo }
  | { type: "text"; text: string };

export default function LifePage() {
  const { lang } = useLang();

  const captions = pick(
    lang,
    L(
      ["Places I've been.", "Things I love.", "Books that stayed with me."],
      ["我去过的地方。", "我喜欢的事物。", "那些留在我心里的书。"],
    ),
  );

  const grid: GridItem[] = [
    { type: "photo", photo: lifePhotos[0] },
    { type: "text", text: captions[0] },
    { type: "photo", photo: lifePhotos[1] },
    { type: "photo", photo: lifePhotos[2] },
    { type: "text", text: captions[1] },
    { type: "photo", photo: lifePhotos[3] },
    { type: "photo", photo: lifePhotos[4] },
    { type: "text", text: captions[2] },
    { type: "photo", photo: lifePhotos[5] },
    { type: "photo", photo: lifePhotos[6] },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow={lang === "zh" ? "06 · 工作之外的生活" : "06 · Life Outside Work"}
        title={
          <>
            {lang === "zh" ? (
              <>
                工作之外
                <br />
                的生活
              </>
            ) : (
              <>
                Life outside
                <br />
                work
              </>
            )}
            <span className="text-accent">。</span>
          </>
        }
        intro={
          lang === "zh"
            ? "工作只是故事的一部分。其余的发生在城市里、列车上、镜头之后、书页之间，以及玩得有点太晚的游戏里。"
            : "Work is one part of the story. The rest happens in cities, on trains, behind a camera, between pages, and in games that run a little too late."
        }
      />

      {/* Interests */}
      <section className="mt-14 md:mt-16">
        <Reveal>
          <ul className="flex flex-wrap gap-x-7 gap-y-3">
            {pick(lang, interests).map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 text-sm text-muted-strong"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Editorial grid with interleaved captions */}
      <section className="mt-14 md:mt-20">
        <div className="columns-2 gap-4 md:columns-3 md:gap-6">
          {grid.map((item, i) =>
            item.type === "photo" ? (
              <Reveal
                key={i}
                delay={(i % 3) * 0.06}
                className="mb-4 break-inside-avoid md:mb-6"
              >
                <SmartImage
                  src={item.photo.src}
                  alt={item.photo.alt}
                  ratio={item.photo.ratio}
                />
              </Reveal>
            ) : (
              <Reveal
                key={i}
                delay={(i % 3) * 0.06}
                className="mb-4 break-inside-avoid md:mb-6"
              >
                <p className="flex items-center gap-4 py-6 font-serif text-lg italic leading-snug text-muted-strong md:text-xl">
                  <span aria-hidden className="h-px w-8 shrink-0 bg-accent" />
                  {item.text}
                </p>
              </Reveal>
            ),
          )}
        </div>
      </section>

      <div className="pb-24" />
    </div>
  );
}
