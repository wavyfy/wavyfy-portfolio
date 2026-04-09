import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-10">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Process />
    </main>
  );
}
