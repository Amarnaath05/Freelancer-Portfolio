import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, User, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import React from "react";

// Project Images
import imgEcommerce from "@/assets/project-ecommerce.png";
import imgFinance from "@/assets/project-finance.png";
import imgLearnsphere from "@/assets/project-learnsphere.png";
import imgFreelance from "@/assets/project-freelance.png";
import imgMarketing from "@/assets/project-marketing.png";
import imgResume from "@/assets/project-resume.png";

interface Project {
  title: string;
  description: string;
  stack: string[];
  image: string;
  category?: string;
  clientName?: string;
  clientType?: string;
  myRole?: string;
  caseStudySlug?: string;
}

const ProjectCard = ({ project, isClient = false }: { project: Project; isClient?: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleProjectClick = (title: string, isClient = false, caseStudySlug?: string) => {
    if (isClient && caseStudySlug) {
      // For client projects, navigate to the case study page
      window.location.href = `/case-studies/${caseStudySlug}`;
    } else if (!isClient) {
      // For personal projects, scroll to experimental lab section
      const experimentalLab = document.getElementById("experimental-lab");
      if (experimentalLab) {
        experimentalLab.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      style={{ perspective: "1000px" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY }}
        whileHover={{ scale: 1.02 }}
        className="rounded-2xl overflow-hidden glass-card border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col"
      >
        <div className="h-48 w-full relative overflow-hidden bg-zinc-900">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
          {isClient && (
            <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold text-primary border border-primary/30">
              Client Project
            </div>
          )}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
            {project.category}
          </div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          {isClient && (
            <div className="flex items-center gap-2 mb-2">
              <User size={12} className="text-primary" />
              <span className="text-xs font-semibold text-gray-300">{project.clientName}</span>
              <span className="text-[10px] text-gray-500">• {project.clientType}</span>
            </div>
          )}
          
          <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {isClient && (
            <div className="flex items-center gap-2 mb-4">
              <Briefcase size={12} className="text-secondary" />
              <span className="text-xs text-gray-400 italic">Role: {project.myRole}</span>
            </div>
          )}
          
          <div className="flex flex-wrap gap-2 mb-6 mt-auto">
            {project.stack.map(tech => (
              <span key={tech} className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            {isClient && project.caseStudySlug ? (
              <Link href={`/case-studies/${project.caseStudySlug}`}>
                <button className="text-sm font-medium text-white flex items-center gap-1 hover:text-primary transition-colors">
                  View Case Study <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            ) : (
              <button 
                onClick={() => handleProjectClick(project.title, isClient, project.caseStudySlug)}
                className="text-sm font-medium text-white flex items-center gap-1 hover:text-primary transition-colors"
              >
                {isClient ? "View Case Study" : "View Details"} <ArrowUpRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ClientProjectsSection = () => {
  const clientProjects = [
    {
      title: "VoltAura Enterprise",
      clientName: "Siva Sakthi",
      clientType: "Founder & CEO",
      category: "Business Automation",
      description: "Company website design & development with custom software tools and performance optimization.",
      myRole: "Full-Stack Developer",
      stack: ["React", "JavaScript", "Node.js", "REST APIs"],
      image: imgEcommerce,
      caseStudySlug: "freelance-marketplace"
    },
    {
      title: "Personal Brand Automation",
      clientName: "Kalaiarasan",
      clientType: "Personal Brand",
      category: "AI Automation",
      description: "AI automation for LinkedIn content scheduling and business workflow optimization.",
      myRole: "AI Automation Engineer",
      stack: ["n8n", "OpenAI", "APIs", "Cloud Hosting"],
      image: imgMarketing,
      caseStudySlug: "marketing-crew-ai"
    },
    {
      title: "Finance Insight Pro",
      clientName: "Private Client",
      clientType: "FinTech Startup",
      category: "AI/ML Solutions",
      description: "AI-powered personal finance assistant with expense prediction and smart budget recommendations.",
      myRole: "AI Engineer",
      stack: ["Python", "React", "Scikit-Learn", "AWS"],
      image: imgFinance,
      caseStudySlug: "finance-insight-pro"
    }
  ];

  return (
    <section id="client-projects" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Client <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-400 max-w-xl">
            Professional solutions delivered to real-world businesses and founders globally.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} isClient={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const PersonalProjectsSection = () => {
  const personalProjects = [
    {
      title: "Freelance Marketplace",
      category: "Full-Stack",
      description: "A comprehensive freelancing platform with role-based access, secure payments, and real-time messaging.",
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: imgFreelance
    },
    {
      title: "Marketing Crew AI",
      category: "Automation",
      description: "AI agents system for automating SEO analysis, content generation, and job scheduling.",
      stack: ["LangChain", "OpenAI", "Next.js"],
      image: imgMarketing
    },
    {
      title: "Gen-AI Resume Maker",
      category: "Generative AI",
      description: "Tool to generate professional resumes instantly using LLMs based on user input.",
      stack: ["React", "Gemini API", "PDFGen"],
      image: imgResume
    },
    {
      title: "LearnSphere",
      category: "Course Platform",
      description: "A full-featured educational platform for course management and student interaction.",
      stack: ["React", "MERN Stack", "Cloudinary"],
      image: imgLearnsphere
    }
  ];

  return (
    <section id="experimental-lab" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Experimental <span className="text-secondary">Lab</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              Exploring the boundaries of AI, Automation, and Modern Web architectures.
            </p>
          </div>
          <Button variant="outline" className="border-secondary/20 hover:bg-secondary/10 text-secondary">
            Github Repository <Github className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Projects() {
  return (
    <>
      <ClientProjectsSection />
      <PersonalProjectsSection />
    </>
  );
}
