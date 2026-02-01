import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Update active section based on scroll position
  useEffect(() => {
    const sections = ["quick-links", "projects", "case-studies", "about", "contact"];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Quick Links", href: "#quick-links" },
    { name: "Projects", href: "#projects" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "About Me", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const scrollToSection = (href: string) => {
    // Handle Privacy Policy as a separate page
    if (href === "/privacy-policy") {
      window.location.href = href;
      setMobileMenuOpen(false);
      return;
    }
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/${href}`;
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/5" : "py-6 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="text-2xl font-bold font-heading cursor-pointer flex items-center gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-primary">&lt;</span>
          <span className="text-white">Amarnaath</span>
          <span className="text-primary">/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium transition-colors uppercase tracking-wider ${
                activeSection === link.href.substring(1) || (link.href.startsWith('/') && window.location.pathname === link.href)
                  ? "text-primary" 
                  : "text-gray-300 hover:text-primary"
              }`}
            >
              {link.name}
            </button>
          ))}
          <Button 
            onClick={() => scrollToSection("#contact")}
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6"
          >
            Hire Me
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-left text-lg font-medium transition-colors ${
                  activeSection === link.href.substring(1) || (link.href.startsWith('/') && window.location.pathname === link.href)
                    ? "text-primary" 
                    : "text-gray-300 hover:text-primary"
                }`}
              >
                {link.name}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#contact")}
              className="w-full bg-primary hover:bg-primary/90 mt-4"
            >
              Hire Me
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
