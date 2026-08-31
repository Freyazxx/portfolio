"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/** Fixed left "directory of a life" — desktop only. */
export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-[19rem] flex-col justify-between border-r border-line bg-paper/80 px-9 py-10 backdrop-blur-sm lg:flex">
      {/* Brand */}
      <div>
        <Link href="/" className="group inline-block">
          <span className="font-serif text-3xl leading-none tracking-tight text-ink">
            {site.initials}
            <span className="text-accent">.</span>
          </span>
          <span className="mt-3 block text-sm text-muted-strong">
            {site.name}
          </span>
          <span className="mt-1 block text-xs text-muted">
            {site.tagline}
          </span>
        </Link>

        {/* Nav */}
        <nav className="mt-12" aria-label="Primary">
          <ul className="space-y-1">
            {navItems.map((item, i) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative flex flex-col rounded-sm px-3 py-2 transition-colors",
                      active ? "text-ink" : "text-muted hover:text-ink",
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="flex items-baseline gap-3">
                      <span className="eyebrow text-[0.6rem]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-serif text-lg leading-none",
                          active && "italic text-accent",
                        )}
                      >
                        {item.label}
                      </span>
                    </span>
                    <span className="mt-1 pl-[2.1rem] text-[0.7rem] leading-tight text-muted opacity-70">
                      {item.note}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Footer of sidebar */}
      <div className="space-y-4 border-t border-line pt-6">
        <p className="text-xs leading-relaxed text-muted">
          {site.location}
          <br />
          {site.currently}
        </p>
        <p className="text-[0.65rem] leading-relaxed text-muted opacity-70">
          {site.builtWith}
        </p>
      </div>
    </aside>
  );
}
