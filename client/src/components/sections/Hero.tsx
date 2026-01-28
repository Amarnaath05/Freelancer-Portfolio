import { useRef } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Button } from "@/components/ui/button";
import HeroScene from "../3d/HeroScene";
import { ArrowRight, Download, Linkedin, Github, Mail } from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";

function Fallback() {
  return <div className="w-full h-full" />;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0b0e14] to-[#0b0e14] z-0" />
      
      {/* 3D Scene Background (Absolute) */}
      <div className="absolute top-0 right-0 w-full h-full md:w-1/2 opacity-30 md:opacity-100 z-0 pointer-events-none">
         {/* Fallback Image if 3D fails or loads late */}
         <img 
            src="/hero-orb.png" 
            alt="Hero Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
         />
         
         <div className="absolute inset-0">
           <ErrorBoundary FallbackComponent={Fallback}>
             <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ alpha: true }}>
                <HeroScene />
             </Canvas>
           </ErrorBoundary>
         </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Availability Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new projects
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
            Hi, I'm <span className="text-white">Amar</span>
            <br />
            <span className="gradient-text">Full-Stack Dev</span> &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">AI Engineer</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
            I build scalable web platforms, intelligent AI-powered systems, and automation solutions for modern businesses.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base">
              Hire Me <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 rounded-full px-8 h-12 text-base">
              View Projects
            </Button>
          </div>

          <div className="flex gap-6">
             <a href="https://github.com/Amarnaath05" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Github /></a>
             <a href="https://www.linkedin.com/in/amarnaath-pechimuthu-99617426a/" target="_blank" className="text-gray-400 hover:text-white transition-colors"><Linkedin /></a>
             <a href="mailto:amarnaathamarnaath12@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail /></a>
          </div>
        </motion.div>

        {/* Right side is mostly empty for the 3D element to take space visually */}
        <div className="hidden md:block"></div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
