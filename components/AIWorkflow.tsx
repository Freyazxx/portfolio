"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import type { WorkflowStep } from "@/data/projects";

const KIND_LABEL: Record<WorkflowStep["kind"], string> = {
  input: "Input",
  ai: "AI",
  human: "Human",
};

const KIND_STYLE: Record<WorkflowStep["kind"], string> = {
  input: "border-line-strong text-muted",
  ai: "border-accent/40 text-accent",
  human: "border-ink/30 text-ink",
};

/**
 * A clean, vertical AI-assisted workflow diagram.
 * Emphasises the human-in-the-loop: AI scans, a human decides.
 */
export function AIWorkflow({
  steps,
  principle,
}: {
  steps: WorkflowStep[];
  principle?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 65%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <div ref={ref}>
      <div className="relative">
        {/* track */}
        <span
          aria-hidden
          className="absolute bottom-2 left-2 top-2 w-px bg-line"
        />
        {/* progress */}
        {!reduce && (
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="absolute bottom-2 left-2 top-2 w-px origin-top bg-accent"
          />
        )}

        <ol>
          {steps.map((s, i) => (
            <motion.li
              key={s.step}
              initial={reduce ? false : { opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative pb-9 pl-12 last:pb-0"
            >
              {/* node */}
              <span
                aria-hidden
                className={cn_node(s.kind)}
              />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="eyebrow text-[0.6rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-xl leading-tight text-ink">
                  {s.step}
                </span>
                <span
                  className={`rounded-full border px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.15em] ${KIND_STYLE[s.kind]}`}
                >
                  {KIND_LABEL[s.kind]}
                </span>
              </div>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-muted">
                {s.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      {principle && (
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8 border-l border-accent pl-5 font-serif text-lg italic text-muted-strong"
        >
          {principle}
        </motion.p>
      )}
    </div>
  );
}

/** Small node marker centered on the vertical track. */
function cn_node(kind: WorkflowStep["kind"]): string {
  const filled = kind === "human" ? "bg-accent border-accent" : "bg-paper border-accent";
  return `absolute left-2 top-1.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border ${filled}`;
}
