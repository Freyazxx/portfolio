"use client";

import type { SkillGroup } from "@/data/skills";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";
import { Reveal } from "./motion/Reveal";

/** Grouped skills — hairline grid of four panels. */
export function Skills({ groups }: { groups: SkillGroup[] }) {
  const { lang } = useLang();

  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {groups.map((g, i) => (
        <Reveal
          key={pick(lang, g.label)}
          delay={i * 0.06}
          className="bg-paper p-8"
        >
          <p className="eyebrow text-[0.65rem]">{pick(lang, g.label)}</p>
          <ul className="mt-5 space-y-2.5">
            {pick(lang, g.items).map((item) => (
              <li key={item} className="flex gap-3 text-sm text-muted-strong">
                <span aria-hidden className="text-accent">
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
