import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Freelance Marketplace",
      category: "Full-Stack",
      description: "A comprehensive freelancing platform with role-based access, secure payments, and real-time messaging.",
      stack: ["React", "Node.js", "MongoDB", "Socket.io"],
      image: "linear-gradient(to bottom right, #1e1b4b, #312e81)", // Placeholder
      featured: true
    },
    {
      title: "E-Commerce Platform",
      category: "Client Project",
      description: "Scalable e-commerce solution with advanced cart management, payment gateways, and admin dashboard.",
      stack: ["MERN", "Redux", "Stripe"],
      image: "linear-gradient(to bottom right, #0f172a, #334155)",
      featured: true
    },
    {
      title: "AI Finance Assistant",
      category: "AI Application",
      description: "Personal finance tracker with AI-powered expense prediction and smart budget recommendations.",
      stack: ["Python", "React", "ML Models"],
      image: "linear-gradient(to bottom right, #022c22, #14532d)",
      featured: true
    },
    {
      title: "Marketing Crew AI",
      category: "Automation",
      description: "AI agents system for automating SEO analysis, content generation, and job scheduling.",
      stack: ["LangChain", "OpenAI", "Next.js"],
      image: "linear-gradient(to bottom right, #3f0e40, #701a75)",
      featured: false
    },
    {
      title: "Gen-AI Resume Maker",
      category: "Generative AI",
      description: "Tool to generate professional resumes instantly using LLMs based on user input.",
      stack: ["React", "Gemini API", "PDFGen"],
      image: "linear-gradient(to bottom right, #4a044e, #86198f)",
      featured: false
    },
    {
      title: "AWS Bedrock App",
      category: "Cloud & AI",
      description: "Serverless AI application using AWS Lambda, API Gateway, and Bedrock foundation models.",
      stack: ["AWS", "Lambda", "React"],
      image: "linear-gradient(to bottom right, #172554, #1e40af)",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-24 bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my best work in web development and AI engineering.
            </p>
          </div>
          <Button variant="outline" className="border-primary/20 hover:bg-primary/10 text-primary">
            View GitHub <Github className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden glass-card border-white/5 hover:border-primary/30 transition-all duration-500"
            >
              {/* Image Placeholder area */}
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(tech => (
                    <span key={tech} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-sm font-medium text-white flex items-center gap-1 hover:text-primary transition-colors">
                    View Project <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
