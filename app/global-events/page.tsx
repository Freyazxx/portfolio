import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { PhotoStory } from "@/components/PhotoStory";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Reveal } from "@/components/motion/Reveal";
import { worldGamesPhotos, fisuPhotos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Global Events — Xiaoxuan Zhou",
  description:
    "On-site language service and cross-cultural coordination at the 2025 Chengdu World Games.",
};

const duties = [
  "International event language service",
  "On-site interpreting in the customs supervision area",
  "Communicating with foreign athletes and officials",
  "Explaining customs and clearance policy",
  "Coordinating between customs, the organizing committee and delegations",
  "Handling spontaneous cross-cultural situations",
];

export default function GlobalEventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow="04 · Global Events"
        title={
          <>
            A chapter
            <br />
            of my life<span className="text-accent">.</span>
          </>
        }
        intro="International events taught me something a classroom couldn't — how to listen, translate and coordinate in real time, with real stakes and real people."
      />

      {/* Chengdu World Games */}
      <section className="mt-20 md:mt-28">
        <Reveal>
          <SectionHeading
            eyebrow="2025 · Chengdu"
            title="Chengdu World Games"
            description="Customs Arrival & Departure language service and coordination — helping athletes, officials and the organizing committee understand each other."
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <ul className="space-y-4">
                {duties.map((d) => (
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
                  people served and coordinated across arrivals and departures
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
          kicker="01 · Arrival"
          title="Athletes land from everywhere."
          body={
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
          }
        />

        <PhotoStory
          photo={worldGamesPhotos[1]}
          kicker="02 · In the zone"
          title="Interpreting where it matters."
          flip
          body={
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
          }
        />

        <PhotoStory
          photo={worldGamesPhotos[2]}
          kicker="03 · After the rush"
          title="The small moments stay with you."
          body={
            <>
              <p>
                Between sessions — a solved problem, a smile from an athlete, a
                city proud to host the world.
              </p>
              <p>
                These are the moments that made the long hours worth it.
              </p>
            </>
          }
        />
      </section>

      {/* FISU — photographs in place, story to be expanded */}
      <section className="mt-24 border-t border-line pt-16 md:mt-32 md:pt-24">
        <Reveal>
          <SectionHeading
            eyebrow="FISU"
            title="FISU World University Games"
            description="Photographs from the FISU World University Games — the full story to come."
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
