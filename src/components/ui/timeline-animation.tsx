"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useMemo } from "react";

type TimelineContentProps = {
  as?: "div" | "p";
  children: React.ReactNode;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  className?: string;
  customVariants?: Variants;
};

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

export function TimelineContent({
  as = "div",
  children,
  animationNum = 0,
  timelineRef,
  className,
  customVariants,
}: TimelineContentProps) {
  const inView = useInView(timelineRef ?? { current: null }, {
    once: true,
    margin: "-10% 0px",
  });

  const variants = useMemo(
    () => customVariants ?? defaultVariants,
    [customVariants],
  );

  const MotionTag = as === "p" ? motion.p : motion.div;

  return (
    <MotionTag
      custom={animationNum}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
