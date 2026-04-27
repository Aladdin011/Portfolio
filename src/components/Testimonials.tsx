"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { TESTIMONIALS } from "@/data";
import { useForm } from "@/hooks";
import { submitTestimonial } from "@/services/api";
import { validateTestimonialForm } from "@/utils/validation";
import { FormInput, FormTextarea, Button } from "@/components/ui";
import type { TestimonialSubmission } from "@/types";

export default function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initialState: TestimonialSubmission = {
    name: "",
    role: "",
    quote: "",
  };

  const { data, handleChange, handleSubmit, isLoading, error, success, reset } =
    useForm(initialState, async (formData) => {
      const errors = validateTestimonialForm(formData);
      if (errors.length > 0) {
        throw new Error(errors[0].message);
      }

      const response = await submitTestimonial(formData);
      if (!response.success) {
        throw new Error(response.error || response.message);
      }

      setTimeout(() => {
        reset();
        setIsModalOpen(false);
      }, 2000);
    });

  return (
    <section className="relative z-20 bg-[#0a0a0a] py-32 overflow-hidden" id="testimonials">
      {/* Background Ambience - Different position for variety */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

       <div className="container mx-auto px-6 mb-16 text-center relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            >
                Kind <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">Words</span>
            </motion.h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Feedback from clients and collaborators I've had the pleasure of working with.
            </p>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all text-sm font-medium backdrop-blur-sm"
            >
              Write a Review
            </motion.button>
       </div>

      <div className="relative w-full overflow-hidden mask-linear-fade">
         {/* Mask gradient for fade effect on edges */}
         <div className="absolute top-0 left-0 w-32 h-full z-20 bg-linear-to-r from-[#121212] to-transparent" />
         <div className="absolute top-0 right-0 w-32 h-full z-20 bg-linear-to-l from-[#121212] to-transparent" />

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{ x: "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((item, index) => (
              <div
                key={index}
                className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm shrink-0"
              >
                 <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                        {item.initials}
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-lg">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.role}</p>
                    </div>
                 </div>
                 <p className="text-gray-300 italic leading-relaxed">
                    "{item.quote}"
                 </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 shadow-2xl overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-blue-500/10 blur-[100px] pointer-events-none" />
              <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-purple-500/10 blur-[100px] pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">
                Submit a Testimonial
              </h3>
              <p className="text-gray-400 mb-6 relative z-10">
                Your feedback helps me improve and grow. Thank you!
              </p>

              {success && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-300 text-sm flex items-center gap-2 relative z-10"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Testimonial submitted! Thank you.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <FormInput
                  id="testimonial-name"
                  name="name"
                  type="text"
                  label="Name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <FormInput
                  id="testimonial-role"
                  name="role"
                  type="text"
                  label="Role / Company"
                  value={data.role}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                />

                <FormTextarea
                  id="testimonial-quote"
                  name="quote"
                  label="Testimonial"
                  value={data.quote}
                  onChange={handleChange}
                  rows={4}
                  required
                  disabled={isLoading}
                  characterLimit={500}
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

                <div className="flex gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={isLoading}
                    className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-medium transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </motion.button>
                  <Button
                    type="submit"
                    isLoading={isLoading}
                    className="flex-1"
                  >
                    {success ? "Sent!" : "Submit"}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
