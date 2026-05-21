"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/faq";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 text-orange-600 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand sm:text-sm">
          Frequently Asked Questions
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Everything you should know before we build your growth engine
        </h2>
      </div>

      <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-6">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={item.question}
              className="relative rounded-[24px] bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 p-[2px] sm:rounded-[30px]"
            >
              <div className="rounded-[22px] border border-orange-100 bg-card shadow-[0_14px_0_0_rgba(251,146,60,0.9),0_28px_50px_-22px_rgba(194,65,12,0.45)] sm:rounded-[28px] dark:border-orange-500/20">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:gap-6 sm:px-10 sm:py-8"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-semibold leading-tight text-card-foreground sm:text-xl md:text-2xl">
                    {item.question}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-100 sm:h-11 sm:w-11 dark:bg-orange-500/15">
                    <Chevron open={isOpen} />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 text-sm leading-relaxed text-card-foreground/80 sm:px-10 sm:pb-10 sm:text-lg">
                      {item.answer}
                    </p>
                    <ul className="space-y-2.5 px-5 pb-6 text-sm leading-relaxed text-card-foreground/70 sm:space-y-3 sm:px-10 sm:pb-10 sm:text-base">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-orange-500 sm:mt-2" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
