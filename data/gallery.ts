/**
 * Photo metadata.
 *
 * HOW TO ADD PHOTOS:
 *  1. Drop image files into /public/images/<folder>/ (see README for folders).
 *  2. Set `src` below to the public path, e.g. "/images/life/life-01.jpg".
 *  3. Leave `src` as "" and an elegant placeholder renders automatically.
 *
 * `alt` is localized (en/zh).
 * Supported ratios: "1/1", "3/4", "4/5", "4/3", "3/2", "16/10".
 */

import { L, type Localized } from "@/lib/lang";

export interface Photo {
  /** public path — "" = show placeholder */
  src: string;
  /** used as alt text AND as the placeholder label */
  alt: Localized<string>;
  ratio?: string;
  caption?: Localized<string>;
}

/* --- Hero collage (HOME) ------------------------------------------ */
export const profilePhotos: Photo[] = [
  { src: "/images/profile/profile-01.jpg", alt: L("Portrait of Xiaoxuan Zhou", "周晓萱的肖像"), ratio: "4/5" },
  { src: "/images/profile/profile-02.jpg", alt: L("A portrait of Xiaoxuan", "一张肖像"), ratio: "1/1" },
  { src: "/images/profile/profile-03.jpg", alt: L("From my travels", "旅途随拍"), ratio: "4/3" },
];

/* --- Life Outside Work -------------------------------------------- */
export const lifePhotos: Photo[] = [
  { src: "/images/life/life-01.jpg", alt: L("A winter day", "一个冬日"), ratio: "4/3" },
  { src: "/images/life/life-02.jpg", alt: L("A portrait in winter light", "冬日光线下的肖像"), ratio: "4/5" },
  { src: "/images/life/life-03.jpg", alt: L("A summer day", "一个夏日"), ratio: "4/3" },
  { src: "/images/life/life-04.jpg", alt: L("Late summer", "夏末"), ratio: "3/4" },
  { src: "/images/life/life-05.jpg", alt: L("Autumn", "秋天"), ratio: "4/5" },
  { src: "/images/life/life-06.jpg", alt: L("An autumn portrait", "秋日肖像"), ratio: "3/4" },
  { src: "/images/life/life-07.jpg", alt: L("November light", "十一月的光"), ratio: "3/4" },
];

/* --- 2025 Chengdu World Games ------------------------------------- */
export const worldGamesPhotos: Photo[] = [
  { src: "/images/world-games/wg-01.jpg", alt: L("Chengdu World Games 2025", "2025 成都世界运动会"), ratio: "4/3" },
  { src: "/images/world-games/wg-02.jpg", alt: L("On-site language service at the World Games", "世运会现场语言服务"), ratio: "3/4" },
  { src: "/images/world-games/wg-03.jpg", alt: L("A quiet moment between sessions", "场次间隙的安静时刻"), ratio: "4/3" },
];

/* --- FISU World University Games ---------------------------------- */
export const fisuPhotos: Photo[] = [
  { src: "/images/fisu/fisu-01.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "3/4" },
  { src: "/images/fisu/fisu-02.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "16/10" },
  { src: "/images/fisu/fisu-03.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "3/4" },
  { src: "/images/fisu/fisu-04.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "3/4" },
  { src: "/images/fisu/fisu-05.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "4/3" },
  { src: "/images/fisu/fisu-06.jpg", alt: L("FISU World University Games", "FISU 世界大学生运动会"), ratio: "4/3" },
];

/* --- UCSB — California, 2024 -------------------------------------- */
export const ucsbPhotos: Photo[] = [
  { src: "", alt: L("Campus", "校园"), ratio: "4/3" },
  { src: "", alt: L("California coast", "加州海岸"), ratio: "3/4" },
  { src: "", alt: L("Classmates", "同学"), ratio: "1/1" },
];
