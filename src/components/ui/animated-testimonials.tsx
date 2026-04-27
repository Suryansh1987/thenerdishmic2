"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Quote, Star } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface AnimatedTestimonialsProps {
  title?: string;
  subtitle?: string;
  badgeText?: string;
  testimonials?: Testimonial[];
  autoRotateInterval?: number;
  trustedCompanies?: string[];
  trustedCompaniesTitle?: string;
  className?: string;
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, autoRotateInterval);

    return () => clearInterval(interval);
  }, [autoRotateInterval, testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className={`overflow-hidden bg-muted/30 py-16 sm:py-20 md:py-24 ${className || ""}`}
    >
      <div className="px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid w-full grid-cols-1 gap-10 md:grid-cols-2 md:gap-14 lg:gap-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <div className="space-y-5 sm:space-y-6">
              {badgeText && (
                <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary sm:text-sm">
                  <Star className="mr-1 h-3.5 w-3.5 fill-primary" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                {title}
              </h2>

              <p className="max-w-[640px] text-sm text-muted-foreground sm:text-base md:text-lg md:leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-2 sm:gap-3 sm:pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeIndex === index
                        ? "w-10 bg-primary"
                        : "w-2.5 bg-muted-foreground/30"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative h-full">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative"
            >
              <div className="flex h-full min-h-[260px] flex-col rounded-xl border bg-card p-5 shadow-lg sm:p-6 md:min-h-[360px] md:p-8">
                <div className="mb-5 flex gap-1.5 sm:gap-2">
                  {Array(activeTestimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-500 text-yellow-500 sm:h-5 sm:w-5"
                      />
                    ))}
                </div>

                <div className="relative mb-5 flex-1 sm:mb-6">
                  <Quote className="absolute -left-1 -top-1 h-7 w-7 rotate-180 text-primary/20 sm:-left-2 sm:-top-2 sm:h-8 sm:w-8" />
                  <p className="relative z-10 pl-2 text-sm font-medium leading-relaxed sm:text-base md:text-lg">
                    &ldquo;{activeTestimonial.content}&rdquo;
                  </p>
                </div>

                <Separator className="my-4" />

                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar className="h-10 w-10 border sm:h-12 sm:w-12">
                    {activeTestimonial.avatar ? (
                      <AvatarImage
                        src={activeTestimonial.avatar}
                        alt={activeTestimonial.name}
                      />
                    ) : null}
                    <AvatarFallback>
                      {activeTestimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-sm font-semibold sm:text-base">
                      {activeTestimonial.name}
                    </h3>
                    <p className="text-xs text-muted-foreground sm:text-sm">
                      {[activeTestimonial.role, activeTestimonial.company]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -bottom-5 -left-5 hidden h-20 w-20 rounded-xl bg-primary/5 md:block" />
            <div className="absolute -right-5 -top-5 hidden h-20 w-20 rounded-xl bg-primary/5 md:block" />
          </motion.div>
        </motion.div>

        {trustedCompanies.length > 0 && (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={controls}
            className="mt-14 text-center md:mt-20"
          >
            <h3 className="mb-6 text-xs font-medium text-muted-foreground sm:mb-8 sm:text-sm">
              {trustedCompaniesTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-10 sm:gap-y-6 md:gap-x-12 md:gap-y-8">
              {trustedCompanies.map((company) => (
                <div
                  key={company}
                  className="text-base font-semibold text-muted-foreground/60 sm:text-xl md:text-2xl"
                >
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

