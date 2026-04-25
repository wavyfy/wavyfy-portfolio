import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";

// const Projects = dynamic(() => import("@/components/Projects"));
const Process = dynamic(() => import("@/components/Process"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Services = dynamic(() => import("@/components/Services"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));
const BlurOverlay = dynamic(() => import("@/components/BlurOverlay"));

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-2 sm:px-5 page-bg  mx-auto">
      <Navbar />
      <Hero />
      <Showcase />
      {/* <Projects /> */}
      <Process />
      <Testimonials />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <BlurOverlay />
    </main>
  );
}
