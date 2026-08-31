/**
 * Project / case-study content.
 * Two flagship projects: the HCR internship and the MT+PE corpus experiment.
 */

export interface Metric {
  value: string;
  label: string;
}

export interface WorkflowStep {
  step: string;
  kind: "input" | "ai" | "human";
  desc: string;
}

/* ------------------------------------------------------------------ */
/* HCR — Huawei Global Customer Satisfaction Research                 */
/* ------------------------------------------------------------------ */
export const hcrProject = {
  client: "HCR 慧辰股份",
  department: "Technology Key Account Division",
  project: "Huawei Global Customer Satisfaction Research",
  role: "Global Customer Research Intern",
  // TODO: confirm exact internship dates
  period: "2024 — 2025",

  overview:
    "A customer satisfaction research program for Huawei, spanning European markets and dozens of languages. I worked across two very different halves of the project: the human half — reaching and coordinating real customers — and the technical half — QA of a multilingual survey questionnaire, where I built an AI-assisted workflow.",

  // --- Section 1: Global Customer Research ---
  research: {
    title: "Global Customer Research",
    kicker: "01 · Human",
    intro:
      "Reaching real people, across borders and time zones — an English-language B2B interview program aimed at the European market.",
    bullets: [
      "English email outreach to B2B customers across multiple European countries and industries",
      "Outreach, invitations and follow-up over email",
      "Interview scheduling across time zones",
      "Arranging — and calmly rescheduling — Teams and Zoom calls",
      "Bridging communication between the project team and customers",
      "Supporting live, in-depth interview sessions",
    ],
    metrics: [
      { value: "100+", label: "B2B contacts reached" },
      { value: "90+", label: "Interviews coordinated" },
      { value: "10+", label: "Industries covered" },
      { value: "Europe", label: "Market coverage" },
    ],
  },

  // --- Section 2: Multilingual QA × AI Workflow ---
  qa: {
    title: "Multilingual QA × AI Workflow",
    kicker: "02 · Technical",
    intro:
      "Owning localization QA for the survey questionnaire across more than twenty languages. Rather than letting an LLM 'just translate', I designed a structured review process where AI does the heavy scanning and a human makes the calls.",
    metrics: [
      { value: "26+", label: "Languages covered" },
      { value: "300+", label: "Files reviewed" },
    ],
    checklistTitle: "What QA covered",
    checklist: [
      "Mistranslation",
      "Omission",
      "Addition",
      "Terminology consistency",
      "Placeholder / variable integrity",
      "Questionnaire logic",
      "Language consistency",
      "Market-research wording",
      "Localization quality",
    ],
    tools: ["Claude Code", "Codex", "LLM", "Human Review"],
  },

  workflow: [
    { step: "Source Text", kind: "input", desc: "The original questionnaire." },
    {
      step: "Translation Files",
      kind: "input",
      desc: "26+ languages, 300+ files to review.",
    },
    {
      step: "LLM-assisted Batch QA",
      kind: "ai",
      desc: "AI scans the files at scale, flagging likely issues.",
    },
    {
      step: "Issue Classification",
      kind: "ai",
      desc: "Errors grouped into types — mistranslation, omission, logic…",
    },
    {
      step: "Terminology / Logic Check",
      kind: "ai",
      desc: "Consistency against the glossary and questionnaire logic.",
    },
    {
      step: "Human Verification",
      kind: "human",
      desc: "I review every flag and confirm or dismiss it.",
    },
    {
      step: "Final QA Report",
      kind: "human",
      desc: "A clean, actionable report handed to the team.",
    },
  ] as WorkflowStep[],

  principle: "AI assists. Humans decide.",
};

/* ------------------------------------------------------------------ */
/* MT+PE — Oil & Energy Domain LLM Corpus                             */
/* ------------------------------------------------------------------ */
export const aiLanguageProject = {
  title: "MT+PE",
  subtitle: "Oil & Energy Domain LLM Corpus",
  kicker: "AI + Language Experiment",
  period: "2025",

  overview:
    "Building and quality-assessing an English–Chinese bilingual corpus for the oil and energy domain — and using LLMs to evaluate translation quality in a human-in-the-loop workflow. Less an academic paper, more a hands-on experiment in what language work becomes when AI is in the loop.",

  highlights: [
    { label: "Language Data", desc: "100,000+ words of bilingual corpus." },
    {
      label: "LLM Evaluation",
      desc: "Using ChatGPT and DeepL to score and compare translations.",
    },
    {
      label: "Human-in-the-loop",
      desc: "Post-editing workflow where a translator stays in control.",
    },
    {
      label: "Translation Technology",
      desc: "SDL Trados, translation memory and terminology management.",
    },
  ],

  process: [
    {
      title: "Corpus building & cleaning",
      desc: "Compiled and cleaned ~100,000+ words of English–Chinese oil & energy text.",
    },
    {
      title: "CAT setup",
      desc: "Built translation memory and terminology management in SDL Trados.",
    },
    {
      title: "LLM evaluation",
      desc: "Tested ChatGPT and DeepL on the corpus, scoring fluency and accuracy.",
    },
    {
      title: "Post-editing & SOP",
      desc: "Designed a post-editing workflow and wrote a repeatable SOP.",
    },
    {
      title: "Quality control",
      desc: "Established checks to keep the corpus consistent and reusable.",
    },
  ],
};
