"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Unified image component.
 * - Renders next/image when a real `src` exists.
 * - Falls back to an elegant deterministic placeholder when `src` is empty
 *   or the image fails to load.
 */

interface SmartImageProps {
  src?: string;
  alt: string;
  ratio?: string; // "1/1" | "3/4" | "4/5" | "4/3" | "3/2" | "16/10"
  className?: string;
  caption?: string;
  priority?: boolean;
  sizes?: string;
  /** large serif monogram shown on the placeholder (e.g. "XZ") */
  monogram?: string;
  /** enable subtle scale on hover (default true) */
  hover?: boolean;
}

/* Warm, editorial placeholder tones — picked deterministically from alt. */
const TONES = [
  { bg: "#e9e2d6", frame: "#d9ccb6", ink: "#6b6255" }, // sand
  { bg: "#e7dcd2", frame: "#d4b9a7", ink: "#6e5b4d" }, // clay
  { bg: "#e0e3d5", frame: "#c7cead", ink: "#5b6350" }, // sage
  { bg: "#e7e2da", frame: "#d0c8bb", ink: "#665f55" }, // stone
  { bg: "#e9ddd3", frame: "#d5beb0", ink: "#6d594e" }, // blush clay
];

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function Placeholder({ alt, monogram }: { alt: string; monogram?: string }) {
  const tone = TONES[hash(alt) % TONES.length];
  return (
    <div
      className="absolute inset-0"
      style={{ backgroundColor: tone.bg }}
      aria-hidden="true"
    >
      {/* inner hairline frame */}
      <div
        className="absolute inset-[7%]"
        style={{ border: `1px solid ${tone.frame}` }}
      />
      {/* centered content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center">
        {monogram ? (
          <span
            className="font-serif text-[clamp(2.5rem,10vw,4.5rem)] leading-none"
            style={{ color: tone.ink }}
          >
            {monogram}
          </span>
        ) : (
          <span
            className="block h-3 w-3 rotate-45"
            style={{ backgroundColor: tone.ink }}
          />
        )}
        <span
          className="eyebrow max-w-[85%]"
          style={{ color: tone.ink, opacity: 0.72 }}
        >
          {alt}
        </span>
      </div>
    </div>
  );
}

export function SmartImage({
  src,
  alt,
  ratio = "4/3",
  className,
  caption,
  priority,
  sizes,
  monogram,
  hover = true,
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;

  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        {showImage ? (
          <Image
            src={src as string}
            alt={alt}
            fill
            sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
            priority={priority}
            onError={() => setErrored(true)}
            className={cn(
              "object-cover",
              hover &&
                "transition-transform duration-700 ease-out group-hover:scale-[1.035]",
            )}
          />
        ) : (
          <Placeholder alt={alt} monogram={monogram} />
        )}
      </div>
      {caption && (
        <figcaption className="mt-3 flex items-baseline gap-2 text-sm text-muted">
          <span aria-hidden className="block h-px w-4 bg-line-strong" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
