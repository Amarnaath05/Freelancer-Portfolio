import { motion } from "framer-motion";
import { Layout, Brain, Cpu, Bot, PenTool, Youtube } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Development",
      description: "Scalable web applications, dashboards, and business platforms using MERN & Java stack.",
      icon: <Layout className="w-8 h-8 text-primary" />,
      color: "border-primary/20 hover:border-primary/50"
    },
    {
      title: "AI & ML Solutions",
      description: "Custom NLP systems, predictive models, and data-driven intelligence for your business.",
      icon: <Brain className="w-8 h-8 text-secondary" />,
      color: "border-secondary/20 hover:border-secondary/50"
    },
    {
      title: "Generative AI Apps",
      description: "LLM-powered applications, AI resume tools, and custom AI assistants tailored to your needs.",
      icon: <Cpu className="w-8 h-8 text-accent" />,
      color: "border-accent/20 hover:border-accent/50"
    },
    {
      title: "Business Automation",
      description: "Streamline workflows with n8n, AI agents, and process automation to save time and costs.",
      icon: <Bot className="w-8 h-8 text-green-400" />,
      color: "border-green-400/20 hover:border-green-400/50"
    },
    {
      title: "AI Content Tools",
      description: "Automated content generation, social media automation, and script writing tools.",
      icon: <PenTool className="w-8 h-8 text-pink-400" />,
      color: "border-pink-400/20 hover:border-pink-400/50"
    },
    {
      title: "YouTube Automation",
      description: "Script automation, content planning, and analytics tools for creators.",
      icon: <Youtube className="w-8 h-8 text-red-500" />,
      color: "border-red-500/20 hover:border-red-500/50"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
             Combining cutting-edge technology with business logic to deliver high-impact solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card p-8 rounded-2xl transition-all duration-300 group hover:-translate-y-2 ${service.color} border bg-gradient-to-b from-white/[0.03] to-transparent`}
            >
              <div className="p-4 rounded-xl bg-black/40 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 font-heading group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
