import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Github, CheckCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { getCaseStudyBySlug } from "@/config/caseStudiesConfig";
import { Badge } from "@/components/ui/badge";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8">The case study you're looking for doesn't exist.</p>
          <Link href="/#case-studies">
            <Button>
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/#case-studies">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Case Studies
            </Button>
          </Link>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="border-white/10">
              <ExternalLink className="mr-2 w-4 h-4" />
              Live Demo
            </Button>
            <Button variant="outline" size="sm" className="border-white/10">
              <Github className="mr-2 w-4 h-4" />
              Source Code
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-6">
              {caseStudy.category}
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              {caseStudy.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {caseStudy.shortDescription}
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-primary/20 text-primary">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Overview</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              {caseStudy.overview}
            </p>
          </motion.section>

          {/* Problem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Problem</h2>
            <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {caseStudy.problem}
            </div>
          </motion.section>

          {/* My Role */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">My Role</h2>
            <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
              {caseStudy.role}
            </div>
          </motion.section>

          {/* Tech Stack */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Key Features</h2>
            <div className="space-y-4">
              {caseStudy.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Challenges & Solutions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Challenges & Solutions</h2>
            <div className="space-y-8">
              {caseStudy.challenges.map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-2xl border border-white/5">
                  <h3 className="text-xl font-semibold text-white mb-3">Challenge</h3>
                  <p className="text-gray-300 mb-4">{item.challenge}</p>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">Solution</h3>
                  <p className="text-gray-300">{item.solution}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Outcome/Results */}
          {(caseStudy.outcome || caseStudy.results) && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold font-heading mb-6">
                {caseStudy.outcome ? "Outcome" : "Results"}
              </h2>
              <div className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
                {caseStudy.outcome || caseStudy.results}
              </div>
            </motion.section>
          )}

          {/* Key Learnings */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold font-heading mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {caseStudy.keyLearnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{learning}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex justify-between items-center">
              <Link href="/#case-studies">
                <Button variant="outline" className="border-white/10">
                  <ArrowLeft className="mr-2 w-4 h-4" />
                  All Case Studies
                </Button>
              </Link>
              
              <div className="flex gap-4">
                <Button variant="outline" className="border-white/10">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Live Demo
                </Button>
                <Button variant="outline" className="border-white/10">
                  <Github className="mr-2 w-4 h-4" />
                  Source Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
