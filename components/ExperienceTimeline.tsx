import Link from "next/link";
import type { ExperienceEntry } from "@/data/experience";
import { Reveal } from "./motion/Reveal";

/** Vertical experience timeline — education + work. */
export function ExperienceTimeline({
  entries,
}: {
  entries: ExperienceEntry[];
}) {
  return (
    <ol className="border-t border-line">
      {entries.map((e) => (
        <Reveal key={`${e.period}-${e.role}`}>
          <li className="grid gap-2 border-b border-line py-8 md:grid-cols-[200px_1fr] md:gap-10">
            <div className="font-mono text-sm text-muted">{e.period}</div>
            <div>
              <span className="eyebrow text-[0.6rem]">{e.type}</span>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-ink">
                {e.role}
              </h3>
              <p className="mt-1 text-sm text-muted-strong">{e.org}</p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {e.summary}
              </p>
              {e.href && (
                <Link
                  href={e.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-ink"
                >
                  Read the story
                  <span aria-hidden>→</span>
                </Link>
              )}
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}
