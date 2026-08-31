/**
 * Experience timeline — education + work, newest first.
 * Edit freely; entries render in order. Leave `href` empty for no link.
 */
export interface ExperienceEntry {
  period: string;
  role: string;
  org: string;
  type: "Education" | "Experience";
  summary: string;
  /** link to a dedicated page (e.g. "/hcr", "/global-events") */
  href?: string;
  featured?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    period: "2025 — 2028",
    role: "MTI in Translation (English)",
    org: "Northwest University",
    type: "Education",
    summary:
      "Graduate study in English translation — deepening translation practice while exploring how AI and LLMs are reshaping language work.",
    featured: true,
  },
  {
    period: "2025",
    role: "Customs Language Service & Coordination",
    org: "2025 Chengdu World Games",
    type: "Experience",
    summary:
      "On-site interpreting and coordination across customs, the organizing committee and delegations — 1000+ people served.",
    href: "/global-events",
    featured: true,
  },
  {
    period: "2024 — 2025", // TODO: confirm exact internship dates
    role: "Global Customer Research Intern",
    org: "HCR 慧辰股份 · Technology Key Account Division",
    type: "Experience",
    summary:
      "Remote B2B interview outreach and multilingual QA for Huawei's global customer satisfaction research — 26+ languages, 300+ files, coordinated entirely online.",
    href: "/hcr",
    featured: true,
  },
  {
    period: "2024",
    role: "International Education Program",
    org: "University of California, Santa Barbara",
    type: "Experience",
    summary:
      "A summer of study, travel and living in California — learning outside the classroom.",
    href: "/ucsb",
  },
  {
    period: "2021 — 2025",
    role: "BA in Translation",
    org: "Xi'an Shiyou University",
    type: "Education",
    summary:
      "Foundation in translation, interpreting and cross-cultural communication.",
  },
];
