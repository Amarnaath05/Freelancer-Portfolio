import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      // NOTE: This is a demo implementation. 
      // In a real scenario, you would replace these with your actual EmailJS credentials
      // service_id, template_id, public_key
      
      // Simulating API call for the mockup
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // await emailjs.sendForm(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   formRef.current,
      //   'YOUR_PUBLIC_KEY'
      // );

      setSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 md:p-12 border border-white/10"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
              Let's Build Something <span className="gradient-text">Powerful</span>
            </h2>
            <p className="text-gray-400">
              Ready to start your next project? Send me a message and let's discuss.
            </p>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Name</label>
                <Input 
                  name="user_name" 
                  required 
                  placeholder="John Doe" 
                  className="bg-black/20 border-white/10 focus:border-primary text-white h-12"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Email</label>
                <Input 
                  name="user_email" 
                  type="email" 
                  required 
                  placeholder="john@example.com" 
                  className="bg-black/20 border-white/10 focus:border-primary text-white h-12"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <Textarea 
                name="message" 
                required 
                placeholder="Tell me about your project..." 
                className="bg-black/20 border-white/10 focus:border-primary text-white min-h-[150px] resize-none"
              />
            </div>

            <Button 
              type="submit" 
              disabled={loading || success}
              className={`w-full h-12 text-lg font-medium transition-all ${
                success ? "bg-green-600 hover:bg-green-700" : "bg-primary hover:bg-primary/90"
              }`}
            >
              {loading ? (
                "Sending..."
              ) : success ? (
                <span className="flex items-center gap-2">
                  Message Sent <CheckCircle2 className="w-5 h-5" />
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Send Message <Send className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-white/5 grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-white font-bold mb-1">Email</h4>
              <p className="text-gray-400 text-sm">amarnaathamarnaath12@gmail.com</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+91 8220321418</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-1">Location</h4>
              <p className="text-gray-400 text-sm">Remote / Worldwide</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
