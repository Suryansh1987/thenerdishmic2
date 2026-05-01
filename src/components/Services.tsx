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
      "30 minutes. We map your product, audience, channels and revenue goals. No decks, no fluff.",
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
      "We turn what you do into a story that converts. Brand voice, messaging, ICP and a 90-day growth plan.",
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
      "Conversion-first websites, landing pages and checkout funnels, designed, built and shipped in 14 days.",
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
      "Long-form, shorts, ads and brand films, produced and edited by senior creatives who think in retention.",
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
      "We wire your CRM, email, support and ops together with AI. Your business runs even when you’re asleep.",
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
      "Monthly growth reviews, dashboards and a dedicated team. We don’t disappear after launch, we compound.",
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
      className="relative w-full bg-background py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* LEFT: sticky static text */}
          <div className="lg:sticky lg:top-32 lg:h-fit lg:self-start">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              How it works
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:mt-5 sm:text-4xl md:text-5xl lg:text-[56px]">
              From first call to{" "}
              <span className="text-primary">scaling</span>, in 7 steps.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-foreground/70 sm:mt-6 sm:text-lg">
              Strategy, build, content, automation and growth. Under one roof.
              No handoffs, no agency-shuffle, no lost context. Just one team
              that ships.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
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
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href="https://cal.com/thenerdishmic/discovery"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-foreground py-2 pl-5 pr-2 text-sm font-medium text-background transition-colors hover:opacity-90 sm:mt-10 sm:pl-6 sm:text-base"
            >
              Book a discovery call
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground transition-transform group-hover:translate-x-0.5 sm:h-10 sm:w-10">
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
                    marginBottom: isLast ? 0 : "6vh",
                  }}
                >
                  <div
                    className={`overflow-hidden rounded-3xl bg-gradient-to-br ${s.accent} p-1 shadow-[0_30px_80px_-30px_rgba(255,90,31,0.3)] ring-1 ring-foreground/5 dark:opacity-95`}
                  >
                    <div className="rounded-[22px] bg-card p-5 sm:p-7 md:p-8">
                      <div className="flex items-center gap-3">
                        <span
                          className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br sm:h-12 sm:w-12 ${s.accent}`}
                        >
                          <Icon
                            className="h-5 w-5 text-primary sm:h-6 sm:w-6"
                            strokeWidth={1.8}
                          />
                        </span>
                        <div className="flex flex-1 items-center gap-3">
                          <span className="text-[11px] font-semibold tracking-[0.2em] text-primary sm:text-xs">
                            STEP {s.step}
                          </span>
                          <span className="h-px flex-1 bg-foreground/10" />
                          <span className="text-[11px] font-medium text-foreground/60 sm:text-xs">
                            {i + 1} / {steps.length}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-5 text-xl font-bold tracking-tight text-card-foreground sm:mt-6 sm:text-2xl md:text-3xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-card-foreground/70 sm:text-base">
                        {s.description}
                      </p>

                      <ul className="mt-5 space-y-2.5 border-t border-foreground/10 pt-5">
                        {s.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2.5 text-sm font-medium text-card-foreground/85"
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
