/**
 * Global site configuration.
 * Edit everything here — name, tagline, links, resume — without touching components.
 */

export const site = {
  name: "Xiaoxuan Zhou",
  firstName: "Xiaoxuan",
  lastName: "Zhou",
  initials: "XZ",

  // Hero positioning
  tagline: "Language × AI × Global Experience",
  headline: "Exploring how language, AI and global experiences connect people.",
  intro:
    "MTI student, AI explorer, language enthusiast and global storyteller.",

  location: "Shanghai / Xi'an",
  currently: "MTI @ Northwest University",

  // --- Contact / socials (placeholders — replace before sharing) ---
  email: "1208195321@qq.com",
  socials: {
    email: "mailto:1208195321@qq.com",
    linkedin: "", // 暂无 LinkedIn 账户，留空则不显示；创建后可填入 URL
    github: "https://github.com/Freyazxx",
  },
  resume: "/resume.pdf", // TODO: drop resume.pdf into /public

  // --- SEO ---
  url: "https://xiaoxuan-zhou.com", // TODO: replace with your deployed domain
  title: "Xiaoxuan Zhou — Language, AI & Global Experience",
  description:
    "Personal portfolio of Xiaoxuan Zhou, exploring the intersection of language, AI, global operations and cross-cultural communication.",

  // --- Vibe-coding note (shown in footer) ---
  builtWith: "Designed & built through human × AI collaboration.",
  builtWithDetail: "Built with Claude Code / Codex + human direction.",
} as const;

export type Site = typeof site;
