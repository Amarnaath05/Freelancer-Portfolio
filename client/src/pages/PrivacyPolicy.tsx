import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#0b0e14] to-[#0b0e14] text-white">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Button
            onClick={() => window.history.back()}
            variant="ghost"
            className="mb-8 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-400 text-lg">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information We Collect
              </h2>
              <p className="leading-relaxed">
                We collect information you provide directly to us, such as when you contact us through our 
                contact form or email. This may include your name, email address, and any other information 
                you choose to provide.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                How We Use Your Information
              </h2>
              <p className="leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Communicate with you about projects and opportunities</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Information Sharing
              </h2>
              <p className="leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy. We may share your 
                information with trusted service providers who assist us in operating our website.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Data Security
              </h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Cookies
              </h2>
              <p className="leading-relaxed">
                Our website may use cookies to enhance your experience. Cookies are small files that 
                are stored on your device. You can choose to accept or decline cookies through your 
                browser settings.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Your Rights
              </h2>
              <p className="leading-relaxed">
                You have the right to access, update, or delete your personal information. 
                If you would like to exercise these rights, please contact us using the information 
                provided below.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Contact Us
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <p className="font-medium text-white">Email: privacy@amarnaath.com</p>
                <p className="font-medium text-white mt-2">Portfolio: amarnaath.com</p>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                Changes to This Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
