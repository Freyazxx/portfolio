/**
 * Project / case-study content.
 * Two flagship projects: the HCR internship and the MT+PE corpus experiment —
 * both fully remote.
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
    "A customer satisfaction research program for Huawei, run entirely online and spanning European markets across more than two dozen languages. The project split into two halves that demanded two different skills: the human half — reaching and coordinating real customers across borders and time zones — and the technical half, where I owned quality assurance for a multilingual survey questionnaire and helped build the AI-assisted workflow that made it scale.",

  // --- Section 1: Global Customer Research ---
  research: {
    title: "Global Customer Research",
    kicker: "01 · Human",
    intro:
      "Reaching real people, entirely remotely — an English-language B2B interview program aimed at the European market, coordinated across borders and time zones.",
    bullets: [
      "Ran English-language email outreach to B2B customers across Europe — different countries, industries and roles",
      "Kept the pipeline moving with invitations, follow-ups, and the patience to nudge without nagging",
      "Scheduled interviews across time zones, lining up calendars on every side",
      "Set up — and calmly rescheduled — Teams and Zoom calls when plans shifted",
      "Bridged communication between the project team and the customers",
      "Sat in on live interviews, supporting the flow and capturing notes for follow-up",
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
      "Owning localization QA for the survey questionnaire across 26+ languages. Rather than letting an LLM 'just translate', I designed a structured review process — AI does the heavy scanning at scale, and a human makes the final call on every issue.",
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

  takeaway:
    "This project taught me two things I now treat as instincts: remote coordination across languages and time zones is its own kind of expertise, and in an AI-assisted workflow the real skill isn't running the tool — it's knowing where to trust it and where to verify.",
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
    "A self-directed, fully online project: building and quality-assessing a 100,000+ word English–Chinese bilingual corpus for the oil and energy domain, then using LLMs to evaluate translation quality inside a human-in-the-loop workflow. Less an academic paper than a hands-on experiment in what language work becomes when AI enters the loop.",

  highlights: [
    {
      label: "Language Data",
      desc: "100,000+ words of English–Chinese oil & energy text, cleaned and aligned.",
    },
    {
      label: "LLM Evaluation",
      desc: "Using ChatGPT and DeepL to score fluency, accuracy and consistency.",
    },
    {
      label: "Human-in-the-loop",
      desc: "A post-editing workflow where the translator — not the model — makes the final call.",
    },
    {
      label: "Translation Technology",
      desc: "SDL Trados, translation memory and terminology management.",
    },
  ],

  process: [
    {
      title: "Corpus building & cleaning",
      desc: "Compiled and cleaned 100,000+ words of English–Chinese oil & energy text into a usable bilingual corpus.",
    },
    {
      title: "CAT setup",
      desc: "Set up translation memory and terminology management in SDL Trados to keep terms consistent.",
    },
    {
      title: "LLM evaluation",
      desc: "Ran ChatGPT and DeepL over the corpus, scoring each output for fluency, accuracy and terminology.",
    },
    {
      title: "Post-editing & SOP",
      desc: "Designed a post-editing workflow and documented a repeatable SOP for future projects.",
    },
    {
      title: "Quality control",
      desc: "Added quality checks so the corpus stays consistent and reusable as it grows.",
    },
  ],

  takeaway:
    "This experiment crystallized a conviction I still hold: AI doesn't replace the translator — it moves where the translator's value sits, from producing the first draft to making the final judgment.",
};
