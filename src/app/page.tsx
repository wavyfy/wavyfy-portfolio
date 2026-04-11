import Navbar from "@/components/Navbar";
import BlurOverlay from "@/components/BlurOverlay";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-5">
      {/* <div className="fixed bottom-0 left-0 w-full h-20 z-50 pointer-events-none ">
        <div
          className="w-full h-full backdrop-blur-lg"
          style={{
            WebkitMaskImage:
              "linear-gradient(to top, black 40%, transparent 100%)",
            maskImage: "linear-gradient(to top , black 0%, transparent 100%)",
          }}
        />
      </div> */}

      <BlurOverlay />

      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
