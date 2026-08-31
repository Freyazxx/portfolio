/**
 * Site navigation — the "directory of a life" shown in the sidebar.
 */

import { L, type Localized } from "@/lib/lang";

export interface NavItem {
  label: Localized<string>;
  href: string;
  /** short hint shown under the label in the sidebar */
  note: Localized<string>;
}

export const navItems: NavItem[] = [
  { label: L("Home", "首页"), href: "/", note: L("Who is Xiaoxuan", "周晓萱是谁") },
  { label: L("About", "关于"), href: "/about", note: L("A little about me", "关于我") },
  { label: L("HCR", "HCR"), href: "/hcr", note: L("Case study", "案例研究") },
  { label: L("AI & Language", "AI 与语言"), href: "/ai-language", note: L("Experiment", "实验") },
  { label: L("Global Events", "全球赛事"), href: "/global-events", note: L("Stories", "故事") },
  { label: L("UCSB", "UCSB"), href: "/ucsb", note: L("California, 2024", "加州，2024") },
  { label: L("Life", "生活"), href: "/life", note: L("Outside work", "工作之外") },
  { label: L("Contact", "联系"), href: "/contact", note: L("Let's connect", "保持联系") },
];
