"use client";

import { site } from "@/data/site";
import { useLang } from "@/lib/language";
import { pick } from "@/lib/lang";
import { Reveal } from "./motion/Reveal";

/** Large editorial contact links. */
export function Contact() {
  const { lang } = useLang();

  const links = [
    { label: pick(lang, { en: "Email", zh: "邮箱" }), href: site.socials.email, external: false },
    { label: "GitHub", href: site.socials.github, external: true },
    { label: "LinkedIn", href: site.socials.linkedin, external: true },
    { label: pick(lang, { en: "Résumé", zh: "简历" }), href: site.resume, external: false },
  ].filter((link) => link.href);

  return (
    <div>
      <Reveal>
        <h2 className="font-serif text-3xl md:text-5xl">
          {lang === "zh" ? "让我们聊聊。" : "Let's connect."}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong md:text-lg">
          {lang === "zh"
            ? "对全球性的机会、合作与好的对话保持开放——关于语言、AI，或是在路上的世界是什么样子。"
            : "Open to global opportunities, collaborations and good conversations — about language, AI, or what the world looks like from the road."}
        </p>
      </Reveal>

      <ul className="mt-10 border-t border-line">
        {links.map((link, i) => (
          <Reveal key={link.label} delay={i * 0.05}>
            <li className="group border-b border-line">
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="flex items-center justify-between py-6"
              >
                <span className="flex items-baseline gap-4">
                  <span className="eyebrow text-[0.6rem]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-2xl text-ink transition-colors group-hover:text-accent md:text-3xl">
                    {link.label}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="text-xl text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent"
                >
                  →
                </span>
              </a>
            </li>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
