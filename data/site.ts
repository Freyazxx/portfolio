/**
 * Global site configuration.
 * Text fields are localized (en/zh); use `pick(lang, field)` to read them.
 */

import { L } from "@/lib/lang";

export const site = {
  // Shared (language-independent)
  initials: "XZ",
  email: "1208195321@qq.com",
  socials: {
    email: "mailto:1208195321@qq.com",
    linkedin: "", // 暂无 LinkedIn 账户，留空则不显示；创建后可填入 URL
    github: "https://github.com/Freyazxx",
  },
  resume: "/Xiaoxuan-Zhou-Resume.pdf",

  // --- SEO / shared URL ---
  url: "https://xiaoxuanzhou.vercel.app",

  // Localized
  name: L("Xiaoxuan Zhou", "周晓萱"),
  tagline: L("Language × AI × Global Experience", "语言 × AI × 全球经历"),
  headline: L(
    "Exploring how language, AI and global experiences connect people.",
    "探索语言、AI 与全球经历如何将人与人彼此相连。",
  ),
  intro: L(
    "MTI student, AI explorer, language enthusiast and global storyteller.",
    "翻译硕士、AI 探索者、语言爱好者与全球故事的讲述者。",
  ),
  location: L("Shanghai / Xi'an", "上海 / 西安"),
  currently: L("MTI @ Northwest University", "西北大学 · 翻译硕士（MTI）"),

  title: L(
    "Xiaoxuan Zhou — Language, AI & Global Experience",
    "周晓萱 — 语言 × AI × 全球经历",
  ),
  description: L(
    "Personal portfolio of Xiaoxuan Zhou, exploring the intersection of language, AI, global operations and cross-cultural communication.",
    "周晓萱的个人作品集，探索语言、AI、全球运营与跨文化沟通的交汇。",
  ),

  // --- Vibe-coding note (shown in footer) ---
  builtWith: L(
    "Designed & built through human × AI collaboration.",
    "由人类 × AI 协作设计并打造。",
  ),
  builtWithDetail: L(
    "Built with Claude Code / Codex + human direction.",
    "使用 Claude Code / Codex 构建，由人类主导方向。",
  ),
} as const;

export type Site = typeof site;
