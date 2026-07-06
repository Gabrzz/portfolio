import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Technologies from "@/components/sections/Technologies";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-darkBg text-white">
      {/* Premium grain overlay and dynamic mesh background */}
      <div className="grain-overlay" />
      <div className="mesh-background">
        <div className="mesh-glow" />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <Manifesto />
      <Projects />
      <Technologies />
      <CTA />
      
      {/* Footnote */}
      <Footer />
    </main>
  );
}
