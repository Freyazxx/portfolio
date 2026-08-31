import type { ReactNode } from "react";
import type { Photo } from "@/data/gallery";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { SmartImage } from "./SmartImage";
import { Reveal } from "./motion/Reveal";

/** Storytelling block: text beside a photo, alternating sides. */
export function PhotoStory({
  photo,
  kicker,
  title,
  body,
  flip = false,
}: {
  photo: Photo;
  kicker?: string;
  title: string;
  body: ReactNode;
  flip?: boolean;
}) {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-14">
      <div className={cn(flip && "md:order-2")}>
        <Reveal>
          {kicker && <Eyebrow>{kicker}</Eyebrow>}
          <h3 className="mt-4 font-serif text-2xl leading-tight text-ink md:text-3xl">
            {title}
          </h3>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-strong md:text-base">
            {body}
          </div>
        </Reveal>
      </div>
      <div className={cn(flip && "md:order-1")}>
        <Reveal delay={0.1}>
          <SmartImage
            src={photo.src}
            alt={photo.alt}
            ratio={photo.ratio}
            caption={photo.caption}
          />
        </Reveal>
      </div>
    </div>
  );
}
