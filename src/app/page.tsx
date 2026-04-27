import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandScroll from "@/components/BrandScroll";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Reels from "@/components/Reels";
import Testimonials from "@/components/Testimonials";
import Footer4Col from "@/components/ui/footer-column";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-white">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-70" />
      <div className="relative">
        <Navbar />
        <Hero />
        <BrandScroll />
        <Services />
        <Works />
        <Reels />
        <Testimonials />
        <Footer4Col />
      </div>
    </div>
  );
}
