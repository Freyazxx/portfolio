import type { Metadata } from "next";
import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/Eyebrow";

export const metadata: Metadata = {
  title: "Contact — Xiaoxuan Zhou",
  description:
    "Get in touch with Xiaoxuan Zhou — open to global opportunities, collaborations and conversations.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <Eyebrow>07 · Contact</Eyebrow>
        </Reveal>
      </div>

      <Contact />

      <div className="mt-20 max-w-xl pb-24 md:mt-28">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">
            I&apos;m currently based between {""}Shanghai and Xi&apos;an, and
            happy to work across time zones. If you have an opportunity, a
            project, or just a good question, don&apos;t hesitate to reach out.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
