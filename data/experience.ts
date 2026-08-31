/**
 * Experience timeline — education + work, newest first.
 * Text fields are localized; the `type` discriminant stays a code and is
 * translated at render time.
 */

import { L, type Localized } from "@/lib/lang";

export interface ExperienceEntry {
  period: Localized<string>;
  role: Localized<string>;
  org: Localized<string>;
  type: "Education" | "Experience";
  summary: Localized<string>;
  /** link to a dedicated page (e.g. "/hcr", "/global-events") */
  href?: string;
  featured?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    period: L("2025 — 2028", "2025 — 2028"),
    role: L("MTI in Translation (English)", "英语翻译硕士（MTI）"),
    org: L("Northwest University", "西北大学"),
    type: "Education",
    summary: L(
      "Graduate study in English translation — deepening translation practice while exploring how AI and LLMs are reshaping language work.",
      "英语翻译方向的硕士学习——在精进翻译实践的同时，探索 AI 与大语言模型如何重塑语言工作。",
    ),
    featured: true,
  },
  {
    period: L("2025", "2025"),
    role: L("Customs Language Service & Coordination", "海关语言服务与协调"),
    org: L("2025 Chengdu World Games", "2025 成都世界运动会"),
    type: "Experience",
    summary: L(
      "On-site interpreting and coordination across customs, the organizing committee and delegations — 1000+ people served.",
      "在海关、组委会与代表团之间提供现场口译与协调服务——服务 1000 余人次。",
    ),
    href: "/global-events",
    featured: true,
  },
  {
    period: L("May 2026 — Aug 2026", "2026 年 5 月 — 8 月"),
    role: L("Global Customer Research Intern", "全球客户研究实习生"),
    org: L(
      "HCR 慧辰股份 · Technology Key Account Division",
      "HCR 慧辰股份 · 科技大客户事业部",
    ),
    type: "Experience",
    summary: L(
      "Remote B2B interview outreach and multilingual QA for Huawei's global customer satisfaction research — 26+ languages, 300+ files, coordinated entirely online.",
      "为华为全球客户满意度调研做远程 B2B 访谈邀约与多语种质检——26+ 种语言、300+ 份文件，全程线上协调。",
    ),
    href: "/hcr",
    featured: true,
  },
  {
    period: L("2024", "2024"),
    role: L("International Education Program", "国际教育项目"),
    org: L("University of California, Santa Barbara", "加州大学圣塔芭芭拉分校"),
    type: "Experience",
    summary: L(
      "A summer of study, travel and living in California — learning outside the classroom.",
      "在加州学习、旅行与生活的一个夏天——课堂之外的成长。",
    ),
    href: "/ucsb",
  },
  {
    period: L("2021 — 2025", "2021 — 2025"),
    role: L("BA in Translation", "翻译学士"),
    org: L("Xi'an Shiyou University", "西安石油大学"),
    type: "Education",
    summary: L(
      "Foundation in translation, interpreting and cross-cultural communication.",
      "翻译、口译与跨文化沟通的基础训练。",
    ),
  },
];
