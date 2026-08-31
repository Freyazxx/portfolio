import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./motion/Reveal";

/** Hero-style header used at the top of every interior page. */
export function PageHeader({
  eyebrow,
  title,
  intro,
  meta,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  meta?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("", className)}>
      <Reveal>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="mt-6 text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-strong md:text-lg">
            {intro}
          </p>
        )}
        {meta && (
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            {meta}
          </div>
        )}
      </Reveal>
    </header>
  );
}
