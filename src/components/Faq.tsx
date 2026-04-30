"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Who is The Nerdish Mic best for?",
    answer:
      "The Nerdish Mic is built for entrepreneurs, B2B business owners, and coaches who want to become recognized thought leaders in their industry.",
    points: [
      "Perfect if you are great at your craft but inconsistent on content.",
      "Ideal for founders and coaches selling high-ticket services.",
      "Best for people who want long-term authority, not trend-chasing.",
    ],
  },
  {
    question: "How much time do I need to invest each month?",
    answer:
      "Most clients record for just 3-5 hours per month. We handle strategy, writing, editing, design, posting, and reporting for the full content engine.",
    points: [
      "You focus on delivery and client work while we run content operations.",
      "You get a structured content calendar and recording plan.",
      "We remove bottlenecks so publishing stays consistent every week.",
    ],
  },
  {
    question: "What results can I expect?",
    answer:
      "Our approach is built for organic growth and business outcomes. We have done 2k+ videos and generated 50 million views, with strong ROI-focused delivery.",
    points: [
      "Higher profile credibility and stronger inbound trust.",
      "More qualified conversations from organic channels.",
      "Content designed to move people from audience to booked call.",
    ],
  },
  {
    question: "What exactly is included in your monthly delivery?",
    answer:
      "You get both strategy and execution, so this is not just editing support. We build and run your full short-form content system.",
    points: [
      "30-35 video edits/month and 15-20 carousels/month.",
      "Content ideation, scripting, and shoot planning.",
      "Design polish, posting support, reporting, and check-in calls.",
    ],
  },
  {
    question: "Do you also help with brand positioning and messaging?",
    answer:
      "Yes. We help sharpen your authority narrative so every post supports your business direction, not random reach.",
    points: [
      "Brand strategy to clarify your voice and market positioning.",
      "Visual identity alignment for a premium, consistent profile.",
      "Messaging tuned for trust-building and conversion.",
    ],
  },
  {
    question: "Can you work with my existing raw footage?",
    answer:
      "Absolutely. If you already have footage, we can repurpose and transform it into high-performing short-form content.",
    points: [
      "We identify the strongest hooks from your archive.",
      "We restructure clips into platform-native formats.",
      "We build repeatable content pillars from what is already working.",
    ],
  },
  {
    question: "Who will be working on my content each month?",
    answer:
      "You get an entire team without hiring overhead, coordinated under one process and one growth objective.",
    points: [
      "Lead creatives for direction and strategic quality control.",
      "Writers, designers, and world-class editors for production.",
      "Project managers and VAs to keep timelines and publishing smooth.",
    ],
  },
  {
    question: "How do we start working together?",
    answer:
      "We begin with a strategy call, map your authority goals, and then launch your monthly content workflow with clear milestones.",
    points: [
      "Step 1: Discovery and offer/positioning alignment.",
      "Step 2: Content system setup and recording roadmap.",
      "Step 3: Weekly execution, optimization, and growth reporting.",
    ],
  },
];

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
