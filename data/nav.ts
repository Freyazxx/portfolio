/**
 * Site navigation — the "directory of a life" shown in the sidebar.
 */
export interface NavItem {
  label: string;
  href: string;
  /** short hint shown under the label in the sidebar */
  note?: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/", note: "Who is Xiaoxuan" },
  { label: "About", href: "/about", note: "A little about me" },
  { label: "HCR", href: "/hcr", note: "Case study" },
  { label: "AI & Language", href: "/ai-language", note: "Experiment" },
  { label: "Global Events", href: "/global-events", note: "Stories" },
  { label: "UCSB", href: "/ucsb", note: "California, 2024" },
  { label: "Life", href: "/life", note: "Outside work" },
  { label: "Contact", href: "/contact", note: "Let's connect" },
];
