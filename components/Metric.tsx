import { cn } from "@/lib/utils";

/** A single data highlight — big serif number + muted label. */
export function Metric({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("border-l border-line-strong pl-5", className)}>
      <p className="font-serif text-3xl leading-none text-ink md:text-4xl">
        {value}
      </p>
      <p className="mt-3 text-sm leading-snug text-muted">{label}</p>
    </div>
  );
}
