import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { caseStudiesConfig } from "@/config/caseStudiesConfig";

export default function CaseStudies() {
  const cases = caseStudiesConfig;

  return (
    <section id="case-studies" className="py-24 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-gray-400">Deep dive into complex problems I've solved.</p>
        </motion.div>

        <div className="space-y-12">
          {cases.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 rounded-3xl border border-white/5 hover:border-white/10 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 md:opacity-10 transition-opacity group-hover:opacity-20 pointer-events-none">
                 <Box size={200} />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-6xl font-bold text-white/5 font-heading mb-4">{study.id}</div>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {study.category}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{study.title}</h3>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {study.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {study.tags.map(tag => (
                      <div key={tag} className="flex items-center gap-2 text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {tag}
                      </div>
                    ))}
                  </div>

                  <Link href={`/case-studies/${study.slug}`}>
                    <Button variant="link" className="text-white p-0 hover:text-primary transition-colors text-lg h-auto">
                      Read Full Case Study <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
                
                {/* Visual Representation */}
                <div className="h-64 md:h-80 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden">
                  {study.slug === 'freelance-marketplace' && (
                    <img 
                      src="/src/assets/arch-marketplace.png" 
                      alt="MERN Stack Architecture - Freelance Marketplace"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                  {study.slug === 'marketing-crew-ai' && (
                    <img 
                      src="/src/assets/arch-ai-lab.png" 
                      alt="AI Agent System Architecture - Marketing Crew AI"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                  {study.slug === 'finance-insight-pro' && (
                    <img 
                      src="/src/assets/arch-finance (1).png" 
                      alt="Finance Analytics Dashboard - Finance Insight Pro"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
