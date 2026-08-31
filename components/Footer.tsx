"use client";

import Link from "next/link";
import { navItems } from "@/data/nav";
import { site } from "@/data/site";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";

export function Footer() {
  const { lang } = useLang();

  const socialLinks = [
    { label: site.email, href: site.socials.email, external: false },
    { label: "GitHub", href: site.socials.github, external: true },
    { label: "LinkedIn", href: site.socials.linkedin, external: true },
  ].filter((link) => link.href);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 lg:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Left — brand + vibe-coding note */}
          <div className="max-w-sm">
            <p className="font-serif text-2xl text-ink">
              {site.initials}
              <span className="text-accent">.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-strong">
              {pick(lang, site.builtWith)}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              {pick(lang, site.builtWithDetail)}
            </p>
          </div>

          {/* Right — quick nav + socials */}
          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="eyebrow mb-4">
                {lang === "zh" ? "目录" : "Index"}
              </p>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 sm:grid-cols-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {pick(lang, item.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="eyebrow mb-4">
                {lang === "zh" ? "其他平台" : "Elsewhere"}
              </p>
              <ul className="space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {pick(lang, site.name)}
          </p>
          <p>{pick(lang, site.location)}</p>
        </div>
      </div>
    </footer>
  );
}
