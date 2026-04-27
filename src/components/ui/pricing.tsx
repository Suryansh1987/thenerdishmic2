"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import {
  Briefcase,
  CheckCheck,
  Clapperboard,
  Megaphone,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Authority Launch",
    description:
      "For founders and coaches who want consistent, high-quality short-form content without managing an internal team.",
    heroImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Book Discovery Call",
    buttonVariant: "outline" as const,
    features: [
      { text: "Content strategy + positioning", icon: <Briefcase size={20} /> },
      { text: "Monthly scripting and planning", icon: <Clapperboard size={20} /> },
      { text: "Weekly publishing rhythm", icon: <Megaphone size={20} /> },
    ],
    includes: [
      "Included in this scope:",
      "Brand-aligned content pillars",
      "Shoot guidance for fast recording days",
      "World-class editing and packaging",
      "Platform-ready captions and hooks",
      "Monthly performance breakdown",
    ],
    volumeLabel: "Monthly Video Output",
    volumeValue: 20,
  },
  {
    name: "Growth Engine",
    description:
      "For businesses that need aggressive organic growth with a complete strategy, production, and optimization loop.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Scale My Content",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "30-35 edited videos/month", icon: <Clapperboard size={20} /> },
      { text: "15-20 carousel designs/month", icon: <Sparkles size={20} /> },
      { text: "Organic lead-gen optimization", icon: <TrendingUp size={20} /> },
    ],
    includes: [
      "Everything in Authority Launch, plus:",
      "Advanced hook and retention editing",
      "Offer-driven content mapping",
      "Funnel-aware content sequencing",
      "Weekly growth insights and pivots",
      "Dedicated project management",
    ],
    volumeLabel: "Monthly Video Output",
    volumeValue: 35,
  },
  {
    name: "Market Leader",
    description:
      "For high-ticket operators ready to dominate their category with authority-led content systems and strategic distribution.",
    heroImage:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1400&q=80",
    buttonText: "Build My Authority",
    buttonVariant: "outline" as const,
    features: [
      { text: "Thought-leadership positioning", icon: <Briefcase size={20} /> },
      { text: "Multi-format content repurposing", icon: <Sparkles size={20} /> },
      { text: "Executive-level growth reviews", icon: <TrendingUp size={20} /> },
    ],
    includes: [
      "Everything in Growth Engine, plus:",
      "Expansion-ready content architecture",
      "Launch/campaign content support",
      "Premium profile optimization",
      "Authority narrative refinement",
      "Strategic monthly roadmap sessions",
    ],
    volumeLabel: "Potential Monthly Reach",
    volumeValue: 50,
  },
];

const ScopeSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl border border-gray-200 bg-neutral-50 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 h-12 w-fit cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:text-base",
            selected === "0"
              ? "text-white"
              : "text-muted-foreground hover:text-black",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="scope-switch"
              className="absolute left-0 top-0 h-12 w-full rounded-xl border-4 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600 shadow-sm shadow-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Lean Execution</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 h-12 w-fit cursor-pointer rounded-xl px-4 py-2 text-sm font-medium transition-colors sm:px-6 sm:text-base",
            selected === "1"
              ? "text-white"
              : "text-muted-foreground hover:text-black",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="scope-switch"
              className="absolute left-0 top-0 h-12 w-full rounded-xl border-4 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600 shadow-sm shadow-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Scale Mode
            <span className="rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-black">
              Recommended
            </span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default function PricingSection5() {
  const [isScaleMode, setIsScaleMode] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.18,
        duration: 0.45,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -16,
      opacity: 0,
    },
  };

  const toggleScope = (value: string) => setIsScaleMode(Number.parseInt(value) === 1);

  return (
    <section
      id="plans"
      className="relative mx-auto min-h-screen max-w-7xl px-4 pt-20"
      ref={pricingRef}
    >
      <article className="mb-8 max-w-3xl space-y-4 text-left">
        <h2 className="mb-4 text-4xl font-medium capitalize text-gray-900 md:text-6xl">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.12}
            staggerFrom="first"
            reverse
            containerClassName="justify-start"
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 34,
              delay: 0,
            }}
          >
            Pick the content growth system that fits your stage
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="w-full text-sm text-gray-600 md:w-[85%] md:text-base"
        >
          No generic package fluff. These 3 plans are structured around how The
          Nerdish Mic actually helps clients become trusted thought leaders and
          generate consistent organic demand.
        </TimelineContent>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
        >
          <ScopeSwitch onSwitch={toggleScope} className="w-fit" />
        </TimelineContent>
      </article>

      <div className="grid gap-5 py-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={cn(
                "relative overflow-hidden border border-neutral-200",
                "shadow-[0_12px_0_0_rgba(251,146,60,0.9),0_30px_50px_-26px_rgba(194,65,12,0.45)]",
                plan.popular ? "bg-orange-50 ring-2 ring-orange-500" : "bg-white",
              )}
            >
              <div
                className="h-36 w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${plan.heroImage}')` }}
                aria-hidden="true"
              />

              <CardHeader className="text-left">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-3xl font-semibold text-gray-900 md:text-2xl xl:text-3xl">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-sm font-medium text-white">
                      Most Popular
                    </span>
                  )}
                </div>
                <p className="mb-3 text-sm text-gray-600 md:text-xs xl:text-sm">
                  {plan.description}
                </p>
                <div className="rounded-xl border border-orange-200 bg-orange-50 px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-orange-700">
                    {plan.volumeLabel}
                  </p>
                  <p className="mt-1 flex items-center text-3xl font-semibold text-gray-900">
                    <NumberFlow value={isScaleMode ? plan.volumeValue + 8 : plan.volumeValue} />
                    <span className="ml-1 text-base font-medium text-gray-600">+</span>
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Scope matched to your current growth stage.
                  </p>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <button
                  className={cn(
                    "mb-4 w-full rounded-xl p-4 text-lg",
                    plan.popular
                      ? "border border-orange-400 bg-gradient-to-t from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50"
                      : "border border-neutral-700 bg-gradient-to-t from-neutral-900 to-neutral-600 text-white shadow-lg shadow-neutral-900/50",
                  )}
                >
                  {plan.buttonText}
                </button>
                <button className="mb-6 w-full rounded-xl border border-gray-200 bg-white p-4 text-lg text-black shadow-lg shadow-gray-200">
                  Request Custom Proposal
                </button>

                <div className="mb-6 space-y-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-900">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature.text} className="flex items-center gap-3">
                        <span className="grid h-8 w-8 place-content-center rounded-full border border-orange-200 bg-white text-orange-600">
                          {feature.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700">
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 border-t border-neutral-200 pt-4">
                  <h2 className="mb-3 text-lg font-semibold uppercase text-gray-900">
                    What You Get
                  </h2>
                  <h4 className="mb-3 text-base font-medium text-gray-900">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-2 font-semibold">
                    {plan.includes.slice(1).map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="mr-3 mt-0.5 grid h-6 w-6 place-content-center rounded-full border border-orange-500 bg-white">
                          <CheckCheck className="h-4 w-4 text-orange-500" />
                        </span>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </section>
  );
}
