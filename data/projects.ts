/**
 * Project / case-study content.
 * Two flagship projects: the HCR internship and the MT+PE corpus experiment —
 * both fully remote. All user-facing text is localized (en/zh).
 */

import { L, type Localized } from "@/lib/lang";

export interface Metric {
  value: Localized<string>;
  label: Localized<string>;
}

export interface WorkflowStep {
  step: Localized<string>;
  kind: "input" | "ai" | "human";
  desc: Localized<string>;
}

/* ------------------------------------------------------------------ */
/* HCR — Huawei Global Customer Satisfaction Research                 */
/* ------------------------------------------------------------------ */
export const hcrProject = {
  client: L("HCR 慧辰股份", "HCR 慧辰股份"),
  department: L("Technology Key Account Division", "科技大客户事业部"),
  project: L(
    "Huawei Global Customer Satisfaction Research",
    "华为全球客户满意度调研",
  ),
  role: L("Global Customer Research Intern", "全球客户研究实习生"),
  period: L("May 2026 — Aug 2026", "2026 年 5 月 — 8 月"),

  overview: L(
    "A customer satisfaction research program for Huawei, run entirely online and spanning European markets across more than two dozen languages. The project split into two halves that demanded two different skills: the human half — reaching and coordinating real customers across borders and time zones — and the technical half, where I owned quality assurance for a multilingual survey questionnaire and helped build the AI-assisted workflow that made it scale.",
    "一个面向华为的客户满意度调研项目，全程线上进行，覆盖欧洲市场、横跨二十余种语言。项目分成两半，分别考验两种不同的能力：人的一半——跨越国界与时区，触达并协调真实的客户；技术的一半——由我负责多语种调查问卷的质量保证，并参与搭建让项目得以规模化运转的 AI 辅助工作流。",
  ),

  // --- Section 1: Global Customer Research ---
  research: {
    title: L("Global Customer Research", "全球客户调研"),
    kicker: L("01 · Human", "01 · 人"),
    intro: L(
      "Reaching real people, entirely remotely — an English-language B2B interview program aimed at the European market, coordinated across borders and time zones.",
      "完全以远程方式触达真实的人——一个面向欧洲市场的英文 B2B 访谈项目，跨越国界与时区进行协调。",
    ),
    bullets: L(
      [
        "Ran English-language email outreach to B2B customers across Europe — different countries, industries and roles",
        "Kept the pipeline moving with invitations, follow-ups, and the patience to nudge without nagging",
        "Scheduled interviews across time zones, lining up calendars on every side",
        "Set up — and calmly rescheduled — Teams and Zoom calls when plans shifted",
        "Bridged communication between the project team and the customers",
        "Sat in on live interviews, supporting the flow and capturing notes for follow-up",
      ],
      [
        "面向欧洲各国、不同行业与角色的 B2B 客户，用英文进行邮件邀约触达",
        "通过邀请、跟进与耐心提醒，让整个流程持续运转",
        "跨时区协调访谈时间，对齐各方的日程",
        "安排 Teams 与 Zoom 会议，并在计划变动时从容改期",
        "在项目团队与客户之间充当沟通桥梁",
        "旁听线上访谈，协助流程并记录要点以便跟进",
      ],
    ),
    metrics: [
      { value: L("100+", "100+"), label: L("B2B contacts reached", "触达 B2B 客户") },
      { value: L("90+", "90+"), label: L("Interviews coordinated", "协调访谈") },
      { value: L("10+", "10+"), label: L("Industries covered", "覆盖行业") },
      { value: L("Europe", "欧洲"), label: L("Market coverage", "市场覆盖") },
    ],
  },

  // --- Section 2: Multilingual QA × AI Workflow ---
  qa: {
    title: L("Multilingual QA × AI Workflow", "多语种质检 × AI 工作流"),
    kicker: L("02 · Technical", "02 · 技术"),
    intro: L(
      "Owning localization QA for the survey questionnaire across 26+ languages. Rather than letting an LLM 'just translate', I designed a structured review process — AI does the heavy scanning at scale, and a human makes the final call on every issue.",
      "负责 26+ 种语言的问卷本地化质检。我没有让大模型“直接翻译”，而是设计了一套结构化的复核流程——AI 在大规模扫描中承担繁重工作，而每一个问题都由人来做最终判断。",
    ),
    metrics: [
      { value: L("26+", "26+"), label: L("Languages covered", "覆盖语言") },
      { value: L("300+", "300+"), label: L("Files reviewed", "审校文件") },
    ],
    checklistTitle: L("What QA covered", "质检覆盖内容"),
    checklist: L(
      [
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
      [
        "误译",
        "漏译",
        "多译",
        "术语一致性",
        "占位符 / 变量完整性",
        "问卷逻辑",
        "语言一致性",
        "市场调研措辞",
        "本地化质量",
      ],
    ),
    tools: L(
      ["Claude Code", "Codex", "LLM", "Human Review"],
      ["Claude Code", "Codex", "大模型", "人工复核"],
    ),
  },

  workflow: [
    { step: L("Source Text", "源文本"), kind: "input", desc: L("The original questionnaire.", "原始问卷。") },
    { step: L("Translation Files", "译文文件"), kind: "input", desc: L("26+ languages, 300+ files to review.", "26+ 种语言、300+ 份文件待审。") },
    { step: L("LLM-assisted Batch QA", "大模型辅助批量质检"), kind: "ai", desc: L("AI scans the files at scale, flagging likely issues.", "AI 大规模扫描文件，标记可能的问题。") },
    { step: L("Issue Classification", "问题分类"), kind: "ai", desc: L("Errors grouped into types — mistranslation, omission, logic…", "将错误归类——误译、漏译、逻辑……") },
    { step: L("Terminology / Logic Check", "术语 / 逻辑核查"), kind: "ai", desc: L("Consistency against the glossary and questionnaire logic.", "对照术语表与问卷逻辑核查一致性。") },
    { step: L("Human Verification", "人工核验"), kind: "human", desc: L("I review every flag and confirm or dismiss it.", "我逐条复核标记，确认或排除。") },
    { step: L("Final QA Report", "最终质检报告"), kind: "human", desc: L("A clean, actionable report handed to the team.", "一份清晰、可执行的报告交到团队手中。") },
  ] as WorkflowStep[],

  principle: L("AI assists. Humans decide.", "AI 辅助，人做决定。"),

  takeaway: L(
    "This project taught me two things I now treat as instincts: remote coordination across languages and time zones is its own kind of expertise, and in an AI-assisted workflow the real skill isn't running the tool — it's knowing where to trust it and where to verify.",
    "这个项目教会了我两件如今已内化为本能的事：跨语言、跨时区的远程协调本身就是一种专业能力；而在 AI 辅助的工作流里，真正的技能不是会使用工具，而是知道在哪里该信任它、在哪里该核验它。",
  ),
};

/* ------------------------------------------------------------------ */
/* MT+PE — Oil & Energy Domain LLM Corpus                             */
/* ------------------------------------------------------------------ */
export const aiLanguageProject = {
  title: L("MT+PE", "MT+PE"),
  subtitle: L("Oil & Energy Domain LLM Corpus", "油气能源领域大模型语料库"),
  kicker: L("AI + Language Experiment", "AI + 语言实验"),
  period: L("2025", "2025"),

  overview: L(
    "A self-directed, fully online project: building and quality-assessing a 100,000+ word English–Chinese bilingual corpus for the oil and energy domain, then using LLMs to evaluate translation quality inside a human-in-the-loop workflow. Less an academic paper than a hands-on experiment in what language work becomes when AI enters the loop.",
    "一个自主发起、全程线上的项目：为油气能源领域构建并质检一个 10 万余词的英中双语语料库，再借助大模型在“人在回路”的工作流中评估翻译质量。与其说是一篇学术论文，不如说是一次亲手实验——看看当 AI 进入流程后，语言工作会变成什么样。",
  ),

  highlights: [
    {
      label: L("Language Data", "语言数据"),
      desc: L(
        "100,000+ words of English–Chinese oil & energy text, cleaned and aligned.",
        "10 万余词的英中油气能源文本，经清洗与对齐。",
      ),
    },
    {
      label: L("LLM Evaluation", "大模型评估"),
      desc: L(
        "Using ChatGPT and DeepL to score fluency, accuracy and consistency.",
        "使用 ChatGPT 与 DeepL 对流畅度、准确度与一致性打分。",
      ),
    },
    {
      label: L("Human-in-the-loop", "人在回路"),
      desc: L(
        "A post-editing workflow where the translator — not the model — makes the final call.",
        "一套译后编辑工作流，由译者而非模型做最终判断。",
      ),
    },
    {
      label: L("Translation Technology", "翻译技术"),
      desc: L(
        "SDL Trados, translation memory and terminology management.",
        "SDL Trados、翻译记忆与术语管理。",
      ),
    },
  ],

  process: [
    {
      title: L("Corpus building & cleaning", "语料构建与清洗"),
      desc: L(
        "Compiled and cleaned 100,000+ words of English–Chinese oil & energy text into a usable bilingual corpus.",
        "收集并清洗 10 万余词的英中油气能源文本，构建可用的双语语料库。",
      ),
    },
    {
      title: L("CAT setup", "CAT 配置"),
      desc: L(
        "Set up translation memory and terminology management in SDL Trados to keep terms consistent.",
        "在 SDL Trados 中配置翻译记忆与术语管理，保持术语一致。",
      ),
    },
    {
      title: L("LLM evaluation", "大模型评估"),
      desc: L(
        "Ran ChatGPT and DeepL over the corpus, scoring each output for fluency, accuracy and terminology.",
        "让 ChatGPT 与 DeepL 跑遍语料，对每个输出的流畅度、准确度与术语打分。",
      ),
    },
    {
      title: L("Post-editing & SOP", "译后编辑与 SOP"),
      desc: L(
        "Designed a post-editing workflow and documented a repeatable SOP for future projects.",
        "设计译后编辑工作流，并沉淀成可复用的标准操作流程（SOP）。",
      ),
    },
    {
      title: L("Quality control", "质量控制"),
      desc: L(
        "Added quality checks so the corpus stays consistent and reusable as it grows.",
        "加入质检环节，让语料在扩充中保持一致、可复用。",
      ),
    },
  ],

  takeaway: L(
    "This experiment crystallized a conviction I still hold: AI doesn't replace the translator — it moves where the translator's value sits, from producing the first draft to making the final judgment.",
    "这次实验印证了一个我至今仍坚信的信念：AI 不会取代译者——它只是改变了译者价值所在的位置，从产出初稿，移到了做出最终判断。",
  ),
};
