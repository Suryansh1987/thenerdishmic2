"use client";

import {
  CalendarCheck,
  Compass,
  Globe,
  Clapperboard,
  Workflow,
  Megaphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

interface Step {
  step: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  accent: string;
}

const steps: Step[] = [
  {
    step: "01",
    title: "Discovery call",
    description:
      "30 minutes. We map your product, audience, channels and revenue goals — no decks, no fluff.",
    bullets: [
      "Founder-to-founder intro",
      "Audit of stack, funnel & content",
      "Honest answer on whether we’re the right fit",
    ],
    icon: CalendarCheck,
    accent: "from-orange-50 to-orange-100",
  },
  {
    step: "02",
    title: "Strategy & positioning",
    description:
      "We turn what you do into a story that converts — brand voice, messaging, ICP and a 90-day growth plan.",
    bullets: [
      "Positioning & ICP workshop",
      "Channel & content strategy",
      "Quarterly KPI roadmap",
    ],
    icon: Compass,
    accent: "from-amber-50 to-orange-100",
  },
  {
    step: "03",
    title: "Website & funnel build",
    description:
      "Conversion-first websites, landing pages and checkout funnels — designed, built and shipped in 14 days.",
    bullets: [
      "Next.js / Webflow / Shopify",
      "CRO-tuned landing pages",
      "Analytics & A/B tests wired in",
    ],
    icon: Globe,
    accent: "from-rose-50 to-orange-100",
  },
  {
    step: "04",
    title: "Content & video production",
    description:
      "Long-form, shorts, ads and brand films — produced and edited by senior creatives who think in retention.",
    bullets: [
      "YouTube long-form & shorts",
      "Performance ad creative",
      "Brand films & product launches",
    ],
    icon: Clapperboard,
    accent: "from-orange-50 to-rose-100",
  },
  {
    step: "05",
    title: "Automation & AI workflows",
    description:
      "We wire your CRM, email, support and ops together with AI — your business runs even when you’re asleep.",
    bullets: [
      "n8n / Make / Zapier pipelines",
      "Custom AI agents & assistants",
      "CRM, email & SMS automation",
    ],
    icon: Workflow,
    accent: "from-pink-50 to-orange-100",
  },
  {
    step: "06",
    title: "Paid acquisition",
    description:
      "Meta, Google, TikTok and YouTube ads run by operators who’ve scaled brands past 8 figures.",
    bullets: [
      "Creative-first media buying",
      "Weekly creative iteration",
      "Tracking, attribution & MMM",
    ],
    icon: Megaphone,
    accent: "from-orange-50 to-amber-100",
  },
  {
    step: "07",
    title: "Scale & optimize",
    description:
      "Monthly growth reviews, dashboards and a dedicated team — we don’t disappear after launch, we compound.",
    bullets: [
      "Live KPI dashboard",
      "Weekly async + monthly strategy call",
      "Quarterly scale reviews",
    ],
    icon: TrendingUp,
    accent: "from-orange-100 to-rose-100",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full bg-white py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* LEFT: sticky static text */}
          <div className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How it works
            </span>
            <h2 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl lg:text-[56px]">
              From first call to{" "}
              <span className="text-primary">scaling</span>, in 7 steps.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-neutral-600">
              Strategy, build, content, automation and growth — under one roof.
              No handoffs, no agency-shuffle, no lost context. Just one team
              that ships.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Websites",
                "Branding",
                "Content",
                "Automation",
                "Paid ads",
                "AI workflows",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="#book"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-neutral-900 py-2 pl-6 pr-2 text-base font-medium text-white transition-colors hover:bg-neutral-800"
            >
              Book a discovery call
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform group-hover:translate-x-0.5">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>

          {/* RIGHT: stacking cards */}
          <div className="relative">
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isLast = i === steps.length - 1;
              return (
                <div
                  key={s.step}
                  className="sticky"
                  style={{
                    top: `${120 + i * 14}px`,
                    marginBottom: isLast ? 0 : "8vh",
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-3xl bg-gradient-to-br ${s.accent} p-1 shadow-[0_30px_80px_-30px_rgba(255,90,31,0.3)] ring-1 ring-black/5`}
                  >
                    <div className="rounded-[22px] bg-white p-7 sm:p-8">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent}`}
                        >
                          <Icon
                            className="h-6 w-6 text-primary"
                            strokeWidth={1.8}
                          />
                        </span>
                        <div className="flex flex-1 items-center gap-3">
                          <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                            STEP {s.step}
                          </span>
                          <span className="h-px flex-1 bg-neutral-200" />
                          <span className="text-xs font-medium text-neutral-500">
                            {i + 1} / {steps.length}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-neutral-600">
                        {s.description}
                      </p>

                      <ul className="mt-5 space-y-2.5 border-t border-neutral-100 pt-5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm font-medium text-neutral-800"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
