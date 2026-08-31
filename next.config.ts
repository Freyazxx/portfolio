import type { NextConfig } from "next";

// The site is deployed two ways:
//   - Vercel (root path, server build, optimized images) — the default.
//   - GitHub Pages (user site served from the root, static export) — enabled in
//     CI via:
//       NEXT_STATIC_EXPORT=1   → output "export" + unoptimized images
//       NEXT_PUBLIC_BASE_PATH  → basePath (only needed for a project site)
//
// When neither is set (local `next dev` / `next build`, Vercel), the config is
// exactly what it was before, so the Vercel deployment is unaffected.
const isStaticExport = process.env.NEXT_STATIC_EXPORT === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(basePath ? { basePath } : {}),
  ...(isStaticExport
    ? {
        output: "export",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
