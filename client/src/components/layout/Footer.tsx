import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold font-heading mb-4 flex items-center gap-2">
              <span className="text-primary">&lt;</span>
              <span className="text-white">Amarnaath</span>
              <span className="text-primary">/&gt;</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Building scalable web platforms, intelligent AI-powered systems, and automation solutions for modern businesses.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Amarnaath05" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/amarnaath-pechimuthu-99617426a/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:amarnaathamarnaath12@gmail.com" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "AI Solutions", "Generative AI", "Automation", "Consulting"].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Projects", "Case Studies", "About Me", "Contact", "Privacy Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Amarnaath. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed & Built with React & AI
          </p>
        </div>
      </div>
    </footer>
  );
}
