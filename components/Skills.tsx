import type { SkillGroup } from "@/data/skills";
import { Reveal } from "./motion/Reveal";

/** Grouped skills — hairline grid of four panels. */
export function Skills({ groups }: { groups: SkillGroup[] }) {
  return (
    <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
      {groups.map((g, i) => (
        <Reveal key={g.label} delay={i * 0.06} className="bg-paper p-8">
          <p className="eyebrow text-[0.65rem]">{g.label}</p>
          <ul className="mt-5 space-y-2.5">
            {g.items.map((item) => (
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
