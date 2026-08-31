/**
 * Experience — split into education and work, newest first.
 * All text is localized (en/zh); `bullets` are the detailed highlights.
 */

import { L, type Localized } from "@/lib/lang";

export interface ExperienceEntry {
  period: Localized<string>;
  role: Localized<string>;
  org: Localized<string>;
  summary: Localized<string>;
  /** detailed highlights, rendered as a bulleted list */
  bullets?: Localized<string[]>;
  /** link to a dedicated page (e.g. "/hcr", "/global-events") */
  href?: string;
}

/* --- Education (newest first) ------------------------------------ */
export const education: ExperienceEntry[] = [
  {
    period: L("2025 — 2028", "2025 — 2028"),
    role: L("MTI in Translation (English)", "英语翻译硕士（MTI）"),
    org: L("Northwest University", "西北大学"),
    summary: L(
      "Graduate study in English translation — deepening translation practice while exploring how AI and LLMs are reshaping language work.",
      "英语翻译方向的硕士学习——在精进翻译实践的同时，探索 AI 与大语言模型如何重塑语言工作。",
    ),
  },
  {
    period: L("2021 — 2025", "2021 — 2025"),
    role: L("BA in Translation", "翻译学士"),
    org: L("Xi'an Shiyou University", "西安石油大学"),
    summary: L(
      "Foundation in translation, interpreting and cross-cultural communication.",
      "翻译、口译与跨文化沟通的基础训练。",
    ),
  },
];

/* --- Work (newest first) ------------------------------------------ */
export const work: ExperienceEntry[] = [
  {
    period: L("May 2026 — Aug 2026", "2026.05 – 2026.08"),
    role: L("Project Management Intern", "项目管理实习生"),
    org: L(
      "HCR 慧辰股份 · Technology Key Account Division",
      "HCR 慧辰股份 · 科技大客户事业部",
    ),
    summary: L(
      "Huawei global customer-satisfaction research program — covering overseas markets including Europe, across 20+ languages.",
      "华为全球客户满意度调研项目——覆盖欧洲等海外市场，20+ 语种。",
    ),
    bullets: L(
      [
        "Used Teams, WhatsApp and Zoom to independently run English email outreach and invitations to B2B customers across European countries and industries, with tiered follow-up by reply status — reached 100+ interviewees across 10+ industries, 98% effective reply rate, 90+ successful invitations.",
        "Handled cross-time-zone coordination between customers and the project team — interview scheduling, meeting creation, rescheduling and customer reminders — landing 90+ interviews on plan.",
        "Conducted business communication entirely in English, handling European customers' differing needs on timing, format and willingness to participate, and supported live in-depth interviews.",
        "Owned localization QA for the survey questionnaire across 26+ languages and 10+ industries, building an AI workflow with Claude Code and Codex covering terminology & language consistency, questionnaire logic and market-specific phrasing — 300+ files QA'd.",
        "Designed an LLM-assisted + human-review multilingual QA process, using Claude Code and Codex for batch checking and issue classification — establishing a verifiable quality standard without knowing every target language, lifting QA efficiency and accuracy by 50%.",
      ],
      [
        "面向欧洲多国、多行业的 B2B 客户，使用 Teams、WhatsApp、Zoom 独立完成英文邮件触达与邀约，按回复状态分层跟进——触达海外受访客户 100+ 位、覆盖 10+ 行业，有效回复率 98%，成功邀约 90+ 位。",
        "承担客户与项目组之间的跨时区协调，负责访谈排期、会议创建与预约、时间变更及客户提醒，保障海外访谈按计划落地，协调 90 余场。",
        "全程英文商务沟通，处理欧洲客户在时间、形式、参与意愿上的差异化诉求，参与线上深度访谈执行。",
        "负责华为调研问卷的本地化内容质量把关，覆盖 10+ 行业、26+ 语种，用 Claude Code、Codex 搭建 AI 工作流，质检范围覆盖术语与语言一致性、问卷逻辑及各市场表达规范，高质量质检 300+ 文件。",
        "设计「LLM 辅助 + 人工复核」的多语种质检流程，用 Claude Code、Codex 实现批量检查与问题分类，在不掌握全部目标语言的条件下建立可核查的质量判断标准，质检效率与准确率提升 50%。",
      ],
    ),
    href: "/hcr",
  },
  {
    period: L("Jul 2025 — Jun 2026", "2025.07 – 2026.06"),
    role: L("Terminology Management & Translation QA", "术语管理与译文质量校对"),
    org: L(
      "National Social Science Fund — Chinese Academic Translation Program",
      "国家社科基金中华学术外译项目",
    ),
    summary: L(
      "Independently owned the full terminology-standardization and translation quality-control process for a national-level academic translation program.",
      "独立负责国家级学术外译项目的术语标准化与译文质量管控全流程。",
    ),
    bullets: L(
      [
        "Built and maintained a standardized bilingual termbase — covering historical terminology, names of people and places, and conceptual vocabulary — updated continuously across a nearly year-long translation cycle to keep the whole book consistent and academically rigorous.",
        "Proofread the full Chinese-to-English translation of a history book, checking historical accuracy, terminology and fluency — nearly 100,000 characters reviewed in total.",
        "Built a two-tier 'AI pre-screening + human refinement' proofreading mechanism with ChatGPT and DeepL, catching terminology inconsistency, mistranslation and awkward phrasing — raising efficiency and accuracy by 50% and meeting academic-publication standards.",
      ],
      [
        "负责项目专业术语的统一管理，针对历史类专业术语、人名地名、概念性词汇建立标准化双语术语库，并在近一年的翻译周期中持续更新维护，确保全书术语一致性与学术规范性。",
        "承担历史类书籍中译英全文翻译质量校对，核查史实准确性、术语规范性及译文流畅度，累计校对近 10 万字。",
        "运用 ChatGPT、DeepL 搭建「AI 初筛 + 人工精校」两级校对机制，识别术语不一致、误译及表达问题，校对效率与准确率提升 50%，达成学术外译出版标准。",
      ],
    ),
  },
  {
    period: L("Jun 2025 — Aug 2025", "2025.06 – 2025.08"),
    role: L("Customs Language Service & Coordination", "海关语言服务与协调"),
    org: L("2025 Chengdu World Games", "2025 成都世界运动会"),
    summary: L(
      "On-site interpreting and multi-party coordination in a high-pressure, high-sensitivity international customs setting — delivering 'zero-error' foreign-affairs service.",
      "在高压力、高敏感度的国际通关场景中，承担现场口译与多方协调职责，确保涉外服务「零误差」落地。",
    ),
    bullets: L(
      [
        "Served as escort interpreter in the customs supervision area, providing real-time bilingual interpreting and on-the-spot policy interpretation for officials and athletes from multiple countries — turning complex clearance procedures and regulatory requirements into clear verbal guidance.",
        "Independently resolved sudden communication conflicts caused by language and cultural differences; as the core communication hub among customs, the organizing committee and foreign delegations, coordinated competing needs to keep 1000+ people flowing through efficiently.",
      ],
      [
        "担任海关监管区随行口译，为多国官方要员、运动员提供实时双语口译及即时政策解读，将复杂通关流程与监管要求转化为清晰易懂的口头指引，确保信息传递准确、零延迟。",
        "独立处理监管区内因语言文化差异引发的突发沟通冲突，以敏锐的跨文化沟通技巧快速建立信任、化解矛盾；担任海关、组委会与外籍代表团之间的核心沟通枢纽，协调多方诉求，保障 1000+ 人次高效通关。",
      ],
    ),
    href: "/global-events",
  },
  {
    period: L("Sep 2024 — Dec 2024", "2024.09 – 2024.12"),
    role: L("Corpus Building & Quality Evaluation", "语料库构建与质量评估"),
    org: L(
      "MT+PE — Oil & Energy Domain LLM Corpus",
      "MT+PE 石油能源领域大语言模型语料库项目",
    ),
    summary: L(
      "Built a 'pre-translation → LLM-assist → human refinement → quality check' closed-loop data-annotation and processing framework for a specialized vertical domain.",
      "面向专业垂直领域，搭建「预翻译—LLM 辅助—人工精译—质量校验」的数据标注与闭环处理框架。",
    ),
    bullets: L(
      [
        "Led construction of a 100,000+ word English–Chinese bilingual oil & energy corpus; used SDL Trados Studio for translation-memory and termbase management, and set corpus-cleaning and quality-check standards.",
        "Designed a multi-dimensional ChatGPT & DeepL quality-evaluation framework, comparing models on terminology accuracy and contextual fluency; produced an 'LLM applicability report' and distilled an optimal post-editing SOP, lifting translation efficiency by 30%+.",
      ],
      [
        "主导构建石油能源领域英汉双语语料库（10 万+ 词次），运用 SDL Trados Studio 进行翻译记忆与术语库管理，制定语料清洗及质量校验标准。",
        "设计 ChatGPT、DeepL 多维度质量评估框架，对比模型在术语准确度、语境流利度等维度的表现，产出「LLM 适用性评估报告」，沉淀 PE 最优 SOP，推动翻译效率提升 30%+。",
      ],
    ),
    href: "/ai-language",
  },
  {
    period: L("Jun 2023 — Jul 2023", "2023.06 – 2023.07"),
    role: L("Delegation Escort Interpreter", "代表团随行翻译（陪同口译）"),
    org: L(
      "31st FISU Summer World University Games",
      "第 31 届世界大学生夏季运动会 FISU",
    ),
    summary: L(
      "Escort interpreting for a foreign delegation throughout the FISU Summer World University Games.",
      "在第 31 届世界大学生夏季运动会中担任外国代表团随行口译。",
    ),
    bullets: L(
      [
        "Handled full-day interpreting and all-scenario language transfer for a foreign delegation across official competition exchanges, opening/closing ceremonies and complex business and social engagements — with strong sensitivity and precision in aligning professional terminology and jargon.",
        "Acted as the 'all-purpose bridge' between the delegation and the Games organizing committee, leading several informal business matchings; used sharp logic to dissolve communication barriers caused by cultural and information asymmetries, keeping event projects flowing on schedule.",
      ],
      [
        "负责外国代表团在官方正式赛事交流、开闭幕式及复杂商务/社交对接中的全天候口译与全场景语言转化，对各行业专业术语及行话具备极高的敏锐度与准确对齐能力。",
        "担任代表团与大运会组委会之间的「全能桥梁」，主导多场非正式商务对接；通过敏锐的逻辑思维化解因文化和信息不对称导致的沟通屏障，确保赛事项目按既定流程高效流转。",
      ],
    ),
    href: "/global-events",
  },
];
