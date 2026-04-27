"use client";

import { motion } from "framer-motion";
import { useForm } from "@/hooks";
import { sendContactEmail } from "@/services/api";
import { validateContactForm } from "@/utils/validation";
import { FormInput, FormTextarea, Button } from "@/components/ui";
import type { ContactFormData } from "@/types";

export default function Contact() {
  const initialState: ContactFormData = {
    name: "",
    email: "",
    message: "",
  };

  const { data, handleChange, handleSubmit, isLoading, error, success, reset } =
    useForm(initialState, async (formData) => {
      const errors = validateContactForm(formData);
      if (errors.length > 0) {
        throw new Error(errors[0].message);
      }

      const response = await sendContactEmail(formData);
      if (!response.success) {
        throw new Error(response.error || response.message);
      }
    });

  const formErrors: Record<string, string> = {};

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 px-4 md:px-12 overflow-hidden" id="contact">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              Let's work <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                together.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-md leading-relaxed">
              I'm currently available for freelance projects and open to full-time opportunities.
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>

            <div className="flex flex-col gap-6 mb-12">
              <a href="mailto:nuzyflex14@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <span className="text-lg">nuzyflex14@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-4">
                 <SocialLink href="#" icon={<GithubIcon />} label="GitHub" />
                 <SocialLink href="#" icon={<LinkedinIcon />} label="LinkedIn" />
                 <SocialLink href="https://aladdin.netlify.app" icon={<LinkIcon />} label="Website" />
              </div>
            </div>

            <a 
              href="/Nurudeen-Salihu-Resume.pdf" 
              download="Nurudeen-Salihu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors transform hover:-translate-y-1"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download Resume
            </a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm"
          >
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-sm flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                id="name"
                name="name"
                type="text"
                label="Name"
                value={data.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                disabled={isLoading}
              />

              <FormInput
                id="email"
                name="email"
                type="email"
                label="Email"
                value={data.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                disabled={isLoading}
              />

              <FormTextarea
                id="message"
                name="message"
                label="Message"
                value={data.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                required
                disabled={isLoading}
                characterLimit={1000}
              />

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-sm flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {error}
                </motion.div>
              )}

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isLoading}
                className="w-full"
                disabled={isLoading}
              >
                {success ? "Message Sent!" : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>

        <footer className="mt-24 pt-8 border-t border-white/5 text-center text-gray-500 font-mono text-sm">
           <p>&copy; {new Date().getFullYear()} Nurudeen Salihu. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

// Icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);
const LinkedinIcon = () => (
   <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
const LinkIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.07 0l1.41-1.41a5 5 0 0 0 0-7.07 5 5 0 0 0-7.07 0L10.5 5" />
    <path d="M14 11a5 5 0 0 0-7.07 0L5.52 12.4a5 5 0 0 0 0 7.07 5 5 0 0 0 7.07 0L13.5 19" />
  </svg>
);
