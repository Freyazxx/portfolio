"use client";

import { Contact } from "@/components/Contact";
import { Reveal } from "@/components/motion/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { useLang } from "@/lib/language";

export default function ContactPage() {
  const { lang } = useLang();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-16 md:px-10 md:pt-24">
      <div className="mb-16 md:mb-20">
        <Reveal>
          <Eyebrow>{lang === "zh" ? "07 · 联系" : "07 · Contact"}</Eyebrow>
        </Reveal>
      </div>

      <Contact />

      <div className="mt-20 max-w-xl pb-24 md:mt-28">
        <Reveal>
          <p className="text-sm leading-relaxed text-muted">
            {lang === "zh"
              ? "我目前往返于上海与西安，也乐于跨时区协作。如果你有一个机会、一个项目，或只是一个好问题，欢迎随时联系我。"
              : "I'm currently based between Shanghai and Xi'an, and happy to work across time zones. If you have an opportunity, a project, or just a good question, don't hesitate to reach out."}
          </p>
        </Reveal>
      </div>
    </div>
  );
}
