"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { withBasePath } from "@/lib/base-path";
import { useLang } from "@/lib/language";
import { pick, type Localized } from "@/lib/lang";

/**
 * Unified image component.
 * - Renders next/image when a real `src` exists.
 * - Falls back to an elegant deterministic placeholder when `src` is empty
 *   or the image fails to load.
 */

interface SmartImageProps {
  src?: string;
  alt: Localized<string>;
  ratio?: string; // "1/1" | "3/4" | "4/5" | "4/3" | "3/2" | "16/10"
  className?: string;
  caption?: Localized<string>;
  priority?: boolean;
  sizes?: string;
  /** large serif monogram shown on the placeholder (e.g. "XZ") */
  monogram?: string;
  /** enable subtle scale on hover (default true) */
  hover?: boolean;
}

/* Warm, editorial placeholder tones — picked deterministically from alt. */
const TONES = [
  { bg: "#f4e7ec", frame: "#e4ccd4", ink: "#8a6472" }, // rose sand
  { bg: "#f1e4e8", frame: "#ddc3cc", ink: "#8a6673" }, // blush
  { bg: "#ece6ea", frame: "#d6c8cf", ink: "#78636d" }, // mauve
  { bg: "#efe7ea", frame: "#dccbd2", ink: "#7d6871" }, // stone rose
  { bg: "#f2e6ea", frame: "#e0c7cf", ink: "#8a626f" }, // dusty blush
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
  const { lang } = useLang();
  const [errored, setErrored] = useState(false);
  const showImage = Boolean(src) && !errored;
  const altText = pick(lang, alt);
  const captionText = caption ? pick(lang, caption) : undefined;

  return (
    <figure className={cn("group", className)}>
      <div className="relative overflow-hidden" style={{ aspectRatio: ratio }}>
        {showImage ? (
          <Image
            src={withBasePath(src as string)}
            alt={altText}
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
          <Placeholder alt={altText} monogram={monogram} />
        )}
      </div>
      {captionText && (
        <figcaption className="mt-3 flex items-baseline gap-2 text-sm text-muted">
          <span aria-hidden className="block h-px w-4 bg-line-strong" />
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
