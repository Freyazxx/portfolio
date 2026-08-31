/**
 * Photo metadata.
 *
 * HOW TO ADD PHOTOS:
 *  1. Drop image files into /public/images/<folder>/ (see README for folders).
 *  2. Set `src` below to the public path, e.g. "/images/life/shanghai.jpg".
 *  3. Leave `src` as "" and an elegant placeholder renders automatically.
 *
 * Supported ratios: "1/1", "3/4", "4/5", "4/3", "3/2", "16/10".
 */

export interface Photo {
  /** public path — "" = show placeholder */
  src: string;
  /** used as alt text AND as the placeholder label */
  alt: string;
  ratio?: string;
  caption?: string;
}

/* --- Hero collage (HOME) ------------------------------------------ */
export const profilePhotos: Photo[] = [
  { src: "", alt: "Xiaoxuan Zhou", ratio: "4/5" },
  { src: "", alt: "Shanghai", ratio: "1/1" },
  { src: "", alt: "UCSB, California", ratio: "4/3" },
];

/* --- Life Outside Work -------------------------------------------- */
export const lifePhotos: Photo[] = [
  { src: "", alt: "Shanghai", ratio: "3/4" },
  { src: "", alt: "A quiet café", ratio: "1/1" },
  { src: "", alt: "The sea", ratio: "4/3" },
  { src: "", alt: "Books that stayed with me", ratio: "3/4" },
  { src: "", alt: "On the road", ratio: "16/10" },
  { src: "", alt: "Friends", ratio: "1/1" },
  { src: "", alt: "Campus", ratio: "4/3" },
  { src: "", alt: "Games night", ratio: "1/1" },
  { src: "", alt: "A view I remember", ratio: "3/4" },
];

/* --- 2025 Chengdu World Games ------------------------------------- */
export const worldGamesPhotos: Photo[] = [
  { src: "", alt: "World Games venue", ratio: "4/3" },
  { src: "", alt: "Interpreting at customs", ratio: "3/4" },
  { src: "", alt: "A quiet moment between sessions", ratio: "4/3" },
];

/* --- FISU World University Games (TODO: add content + photos) ----- */
export const fisuPhotos: Photo[] = [
  { src: "", alt: "FISU World University Games", ratio: "4/3" },
  { src: "", alt: "Athletes' village", ratio: "3/4" },
];

/* --- UCSB — California, 2024 -------------------------------------- */
export const ucsbPhotos: Photo[] = [
  { src: "", alt: "Campus", ratio: "4/3" },
  { src: "", alt: "California coast", ratio: "3/4" },
  { src: "", alt: "Classmates", ratio: "1/1" },
];
