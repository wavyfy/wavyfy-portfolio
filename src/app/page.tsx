import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

// Below-fold sections — dynamically imported so their JS ships in separate chunks,
// reducing the initial JS payload for first paint. SSR is kept (default) for SEO.
const Projects = dynamic(() => import("@/components/Projects"));
const Process = dynamic(() => import("@/components/Process"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Services = dynamic(() => import("@/components/Services"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));
const BlurOverlay = dynamic(() => import("@/components/BlurOverlay"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-2 sm:px-5 page-bg">
      <Navbar />
      <Hero />
      <Showcase />
      <Projects />
      <Process />
      <Testimonials />
      <Services />
      <FAQ />
      <Footer />
      <BlurOverlay />
    </main>
  );
}
