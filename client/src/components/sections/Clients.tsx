import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Clients() {
  const clients = [
    {
      name: "Siva Sakthi",
      role: "Founder & CEO, VoltAura",
      content: "Amar delivered a professional website and custom tools tailored to our business needs. His ability to translate requirements into technical solutions is outstanding.",
      tags: ["Web Dev", "Custom Tools"]
    },
    {
      name: "Kalaiarasan",
      role: "Personal Brand / Business",
      content: "Automation saved time and improved consistency in content publishing. The AI workflows implemented have completely transformed how I manage my social media presence.",
      tags: ["AI Automation", "n8n"]
    }
  ];

  return (
    <section id="clients" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real feedback from business owners and founders I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-8 right-8 text-white/5 w-16 h-16" />
              
              <p className="text-gray-300 text-lg mb-8 relative z-10 leading-relaxed">
                "{client.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{client.name}</h4>
                  <p className="text-primary text-sm">{client.role}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                {client.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
