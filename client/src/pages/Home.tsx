import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import CaseStudies from "@/components/sections/CaseStudies";
import Clients from "@/components/sections/Clients";
import Skills from "@/components/sections/Skills";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CaseStudies />
        <Clients />
        <Skills />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
