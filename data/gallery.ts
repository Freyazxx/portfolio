/**
 * Photo metadata.
 *
 * HOW TO ADD PHOTOS:
 *  1. Drop image files into /public/images/<folder>/ (see README for folders).
 *  2. Set `src` below to the public path, e.g. "/images/life/life-01.jpg".
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
  { src: "/images/profile/profile-01.jpg", alt: "Portrait of Xiaoxuan Zhou", ratio: "4/5" },
  { src: "/images/profile/profile-02.jpg", alt: "A portrait of Xiaoxuan", ratio: "1/1" },
  { src: "/images/profile/profile-03.jpg", alt: "From my travels", ratio: "4/3" },
];

/* --- Life Outside Work -------------------------------------------- */
export const lifePhotos: Photo[] = [
  { src: "/images/life/life-01.jpg", alt: "A winter day", ratio: "4/3" },
  { src: "/images/life/life-02.jpg", alt: "A portrait in winter light", ratio: "4/5" },
  { src: "/images/life/life-03.jpg", alt: "A summer day", ratio: "4/3" },
  { src: "/images/life/life-04.jpg", alt: "Late summer", ratio: "3/4" },
  { src: "/images/life/life-05.jpg", alt: "Autumn", ratio: "4/5" },
  { src: "/images/life/life-06.jpg", alt: "An autumn portrait", ratio: "3/4" },
  { src: "/images/life/life-07.jpg", alt: "November light", ratio: "3/4" },
];

/* --- 2025 Chengdu World Games ------------------------------------- */
export const worldGamesPhotos: Photo[] = [
  { src: "/images/world-games/wg-01.jpg", alt: "Chengdu World Games 2025", ratio: "4/3" },
  { src: "/images/world-games/wg-02.jpg", alt: "On-site language service at the World Games", ratio: "3/4" },
  { src: "/images/world-games/wg-03.jpg", alt: "A quiet moment between sessions", ratio: "4/3" },
];

/* --- FISU World University Games ---------------------------------- */
export const fisuPhotos: Photo[] = [
  { src: "/images/fisu/fisu-01.jpg", alt: "FISU World University Games", ratio: "3/4" },
  { src: "/images/fisu/fisu-02.jpg", alt: "FISU World University Games", ratio: "16/10" },
  { src: "/images/fisu/fisu-03.jpg", alt: "FISU World University Games", ratio: "3/4" },
  { src: "/images/fisu/fisu-04.jpg", alt: "FISU World University Games", ratio: "3/4" },
  { src: "/images/fisu/fisu-05.jpg", alt: "FISU World University Games", ratio: "4/3" },
  { src: "/images/fisu/fisu-06.jpg", alt: "FISU World University Games", ratio: "4/3" },
];

/* --- UCSB — California, 2024 -------------------------------------- */
export const ucsbPhotos: Photo[] = [
  { src: "", alt: "Campus", ratio: "4/3" },
  { src: "", alt: "California coast", ratio: "3/4" },
  { src: "", alt: "Classmates", ratio: "1/1" },
];
