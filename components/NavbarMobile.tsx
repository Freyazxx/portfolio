"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Top bar + full-screen drawer — mobile / tablet only. */
export function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 lg:hidden">
      <div className="flex items-center justify-between border-b border-line bg-paper/85 px-5 py-4 backdrop-blur-sm">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-xl leading-none">
            {site.initials}
            <span className="text-accent">.</span>
          </span>
          <span className="text-sm text-muted-strong">{site.name}</span>
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              open && "translate-y-[3px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-opacity duration-300",
              open && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              open && "-translate-y-[9px] -rotate-45",
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            className="fixed inset-0 top-[57px] z-40 overflow-y-auto bg-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col px-5 py-8">
              {navItems.map((item, i) => {
                const active = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.35 }}
                    className="border-b border-line"
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-baseline gap-4 py-4",
                        active ? "text-accent" : "text-ink",
                      )}
                    >
                      <span className="eyebrow text-[0.6rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl">{item.label}</span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <div className="px-5 pb-10 text-sm text-muted">
              <p>{site.location}</p>
              <p className="mt-1 text-xs opacity-70">{site.builtWith}</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
