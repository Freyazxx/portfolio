import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fine mono, tracked-out label used to introduce sections. */
export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3", className)}>
      <span aria-hidden className="block h-px w-6 bg-line-strong" />
      {children}
    </span>
  );
}
