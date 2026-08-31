import { FadeIn } from "@/components/motion/FadeIn";

/**
 * Re-mounts on navigation, giving every page a soft enter fade.
 * (Templates, unlike layouts, re-render on route change.)
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <FadeIn>{children}</FadeIn>;
}
