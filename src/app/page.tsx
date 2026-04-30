import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandScroll from "@/components/BrandScroll";
import Services from "@/components/Services";
import PricingSection5 from "@/components/ui/pricing";
import Works from "@/components/Works";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import Footer4Col from "@/components/ui/footer-column";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-background">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70 dark:opacity-90" />
      <div className="relative">
        <Navbar />
        <Hero />
        <BrandScroll />
        <Services />
        <Works />
        <Reels />
        <PricingSection5 />
        <Testimonials />
        <Faq />
        <Footer4Col />
      </div>
    </div>
  );
}
