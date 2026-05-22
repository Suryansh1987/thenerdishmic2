import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandScroll from "@/components/BrandScroll";
import Services from "@/components/Services";
import PricingSection5 from "@/components/ui/pricing";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer4Col from "@/components/ui/footer-column";
import { FAQ_ITEMS } from "@/lib/faq";
import { SITE_DESCRIPTION, SITE_LOGO, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${SITE_NAME}: Growth, automation & websites in one studio`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          "@type": "ImageObject",
          url: SITE_LOGO,
        },
        description: SITE_DESCRIPTION,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: {
          "@id": `${SITE_URL}/#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: [item.answer, ...item.points].join(" "),
          },
        })),
      },
    ],
  };

  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />
        <Hero />
        <BrandScroll />
        <Services />
        <Reels />
        <PricingSection5 />
        <Testimonials />
        <Faq />
        <Footer4Col />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </div>
    </div>
  );
}
