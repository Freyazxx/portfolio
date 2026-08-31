/**
 * Skills — grouped, shown on the About page.
 */
export interface SkillGroup {
  label: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Localization",
    items: [
      "English–Chinese translation",
      "Localization QA",
      "Terminology management",
      "Translation memory",
      "Post-editing",
    ],
  },
  {
    label: "AI & Tools",
    items: [
      "Claude Code",
      "Codex",
      "LLM workflows",
      "Prompt design",
      "ChatGPT · DeepL",
    ],
  },
  {
    label: "Global & Research",
    items: [
      "Cross-cultural communication",
      "B2B outreach",
      "Interview coordination",
      "User research",
      "Global operations",
    ],
  },
  {
    label: "CAT & Tech",
    items: [
      "SDL Trados",
      "QA tooling",
      "Markdown",
      "Next.js · TypeScript (via AI-assisted development)",
    ],
  },
];
