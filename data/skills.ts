/**
 * Skills — grouped, shown on the About page.
 */

import { L, type Localized } from "@/lib/lang";

export interface SkillGroup {
  label: Localized<string>;
  items: Localized<string[]>;
}

export const skillGroups: SkillGroup[] = [
  {
    label: L("Languages & Localization", "语言与本地化"),
    items: L(
      [
        "English–Chinese translation",
        "Localization QA",
        "Terminology management",
        "Translation memory",
        "Post-editing",
      ],
      ["英中互译", "本地化质检", "术语管理", "翻译记忆", "译后编辑"],
    ),
  },
  {
    label: L("AI & Tools", "AI 与工具"),
    items: L(
      ["Claude Code", "Codex", "LLM workflows", "Prompt design", "ChatGPT · DeepL"],
      ["Claude Code", "Codex", "大模型工作流", "提示词设计", "ChatGPT · DeepL"],
    ),
  },
  {
    label: L("Global & Research", "全球与调研"),
    items: L(
      [
        "Cross-cultural communication",
        "B2B outreach",
        "Interview coordination",
        "User research",
        "Global operations",
      ],
      ["跨文化沟通", "B2B 客户触达", "访谈协调", "用户研究", "全球运营"],
    ),
  },
  {
    label: L("CAT & Tech", "CAT 与技术"),
    items: L(
      [
        "SDL Trados",
        "QA tooling",
        "Markdown",
        "Next.js · TypeScript (via AI-assisted development)",
      ],
      ["SDL Trados", "质检工具", "Markdown", "Next.js · TypeScript（AI 辅助开发）"],
    ),
  },
];
