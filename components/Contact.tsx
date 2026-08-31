import { site } from "@/data/site";
import { Reveal } from "./motion/Reveal";

/** Large editorial contact links. */
export function Contact() {
  const links = [
    { label: "Email", href: site.socials.email, external: false },
    { label: "GitHub", href: site.socials.github, external: true },
    { label: "LinkedIn", href: site.socials.linkedin, external: true },
    { label: "Résumé", href: site.resume, external: false },
  ].filter((link) => link.href);

  return (
    <div>
      <Reveal>
        <h2 className="font-serif text-3xl md:text-5xl">Let&apos;s connect.</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-strong md:text-lg">
          Open to global opportunities, collaborations and good conversations —
          about language, AI, or what the world looks like from the road.
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
