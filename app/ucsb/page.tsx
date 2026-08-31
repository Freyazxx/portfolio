import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PhotoGrid } from "@/components/PhotoGrid";
import { Reveal } from "@/components/motion/Reveal";
import { ucsbPhotos } from "@/data/gallery";

export const metadata: Metadata = {
  title: "UCSB — California, 2024 · Xiaoxuan Zhou",
  description:
    "An international education program summer at UC Santa Barbara — study, travel and living in California.",
};

export default function UcsbPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <PageHeader
        eyebrow="05 · California, 2024"
        title={
          <>
            UC Santa
            <br />
            Barbara<span className="text-accent">.</span>
          </>
        }
        intro="A summer of study, travel and living in California — the kind of learning that never shows up on a transcript."
        meta={
          <span>
            <span className="text-muted">Program</span> · International
            Education Program
          </span>
        }
      />

      <section className="mt-16 max-w-2xl md:mt-20">
        <Reveal>
          <p className="text-base leading-relaxed text-muted-strong md:text-lg">
            I spent the summer of 2024 at UC Santa Barbara through an
            international education program. Between classes, there was the
            coast, new friends, and a different rhythm of life — campus, the
            Pacific, and a lot of firsts.
          </p>
        </Reveal>
      </section>

      <section className="mt-14 md:mt-20">
        <PhotoGrid photos={ucsbPhotos} />
      </section>

      <section className="mt-20 pb-24 md:mt-28">
        <Reveal>
          <p className="border-l border-accent pl-6 font-serif text-xl italic text-muted-strong md:text-2xl">
            Sometimes learning happens outside the classroom.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
