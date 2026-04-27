import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    id: 1,
    name: "Alex Carter",
    role: "Founder & CEO",
    company: "Northwave Apparel",
    content:
      "thenerdishmic rebuilt our Shopify, plugged in the email automations and ran our Q4 ads. We did 3.2× more revenue than last year on the same ad spend. They feel like a co-founder, not an agency.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Head of Growth",
    company: "LumenLabs",
    content:
      "We had a Notion full of ideas and zero execution. Six weeks later we had a new website, a working CRM, branded content going out weekly and a paid funnel that actually converts. Easy decision to renew.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Marcus Lee",
    role: "Co-founder",
    company: "Beacon Studio",
    content:
      "The AI workflow they built for our support and onboarding saves us 40+ hours a week. They don't sell hours — they sell outcomes. Best agency hire we've made.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 4,
    name: "Sofia Reyes",
    role: "Founder",
    company: "Build With Sofia",
    content:
      "I came in needing a website. I left with a brand, a launch funnel, an automated email engine and 2× the leads in 60 days. The team genuinely cares about your numbers.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
];

export default function Testimonials() {
  return (
    <AnimatedTestimonials
      title="Founders scale faster with thenerdishmic"
      subtitle="From bootstrapped startups to 8-figure DTC brands — see why operators trust us to run their growth, content and automation under one roof."
      badgeText="Loved by 120+ founders"
      testimonials={testimonials}
      trustedCompanies={[
        "Northwave",
        "LumenLabs",
        "Beacon",
        "Stride",
        "Helix",
      ]}
      trustedCompaniesTitle="Helping brands grow across"
    />
  );
}
