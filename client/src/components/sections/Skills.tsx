import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Brain, Terminal, Database, Cloud } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Bootstrap", "HTML5/CSS3", "Figma", "SEO"]
    },
    {
      title: "Backend Systems",
      icon: <Server className="w-6 h-6 text-secondary" />,
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "GraphQL", "Microservices", "JWT Auth"]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6 text-accent" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "NLP", "Transformers", "LLMs", "LangChain", "OpenAI API"]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: ["MongoDB", "PostgreSQL", "MySQL", "AWS", "Firebase", "Redis"]
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      skills: ["Docker", "Git", "GitHub", "CI/CD", "Vercel", "Netlify", "Linux"]
    },
    {
      title: "Automation",
      icon: <Terminal className="w-6 h-6 text-purple-400" />,
      skills: ["n8n", "Zapier", "Python Scripts", "Workflow Automation", "AI Agents"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, intelligent, and high-performance applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold font-heading">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 text-gray-300 hover:text-white transition-all py-1.5"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
