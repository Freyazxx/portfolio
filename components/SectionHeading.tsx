import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

/** Reusable section heading: eyebrow + serif title + optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-5 text-3xl md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-muted-strong md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
