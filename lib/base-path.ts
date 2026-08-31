/**
 * Base-path helper for static hosting (GitHub Pages project site).
 *
 * `NEXT_PUBLIC_BASE_PATH` is inlined at build time:
 *   - "" (Vercel / local) → `withBasePath` is a no-op.
 *   - "/portfolio" (GitHub Pages) → prefixes root-relative URLs.
 *
 * `next/link` prefixes `basePath` automatically. `next/image` does too in its
 * default (optimized) mode, but NOT once `images.unoptimized` is set (which the
 * static export requires) — so unoptimized image `src` paths also go through
 * this helper. It's only needed for raw <a href="/…"> and image srcs.
 */

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
