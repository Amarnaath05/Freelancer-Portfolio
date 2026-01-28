import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code, CheckCircle, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We discuss your requirements, business goals, and technical feasibility.",
      icon: <MessageSquare className="w-6 h-6" />
    },
    {
      number: "02",
      title: "Design & Plan",
      description: "Creating wireframes, architectural diagrams, and selecting the right tech stack.",
      icon: <PenTool className="w-6 h-6" />
    },
    {
      number: "03",
      title: "Development",
      description: "Building the solution with clean, scalable code and regular updates.",
      icon: <Code className="w-6 h-6" />
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous testing for performance, security, and user experience.",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      number: "05",
      title: "Launch",
      description: "Deployment to production and ongoing support for your growth.",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            My <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach to delivering high-quality results on time, every time.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-6 rounded-2xl h-full flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-transparent hover:border-t-primary">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-primary mb-4 shadow-lg group-hover:scale-110 transition-transform bg-zinc-900">
                    {step.icon}
                  </div>
                  <div className="text-4xl font-bold text-white/5 mb-2 font-heading absolute top-2 right-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
