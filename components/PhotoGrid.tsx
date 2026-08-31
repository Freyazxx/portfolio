import type { Photo } from "@/data/gallery";
import { SmartImage } from "./SmartImage";
import { Reveal } from "./motion/Reveal";

/** Irregular editorial masonry grid of photos. */
export function PhotoGrid({ photos }: { photos: Photo[] }) {
  return (
    <div className="columns-2 gap-4 md:columns-3 md:gap-6">
      {photos.map((p, i) => (
        <Reveal
          key={`${p.alt}-${i}`}
          delay={(i % 3) * 0.08}
          className="mb-4 break-inside-avoid md:mb-6"
        >
          <SmartImage src={p.src} alt={p.alt} ratio={p.ratio} />
        </Reveal>
      ))}
    </div>
  );
}
