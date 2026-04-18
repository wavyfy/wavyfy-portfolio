import Navbar from "@/components/Navbar";
import BlurOverlay from "@/components/BlurOverlay";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
// import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-2 sm:px-5 page-bg">
      <BlurOverlay />

      <Navbar />

      <Hero />
      <Showcase />
      <Projects />
      <Process />
      <Testimonials />
      <Services />
      <FAQ />
      <Footer />
    </main>
  );
}
