"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

export default function AdmissionsModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // Open after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="relative max-w-lg w-full glass-card rounded-[48px] overflow-hidden shadow-[0_0_50px_rgba(200,16,46,0.3)]"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-jg-red transition-all z-50"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header / Brand Area */}
            <div className="bg-jg-red p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)] animate-pulse" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-xl mx-auto flex items-center justify-center mb-4 shadow-xl">
                  <span className="text-jg-red text-2xl font-black">JG</span>
                </div>
                <h2 className="text-2xl font-black text-white tracking-tighter mb-1">UNIVERSITY</h2>
                <p className="text-white/80 text-[10px] font-bold uppercase tracking-[0.3em]">Excellence By Choice</p>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/10 mb-4"
              >
                <Sparkles className="w-3 h-3 text-jg-gold" />
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">New Session 2026-27</span>
              </motion.div>

              <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                ADMISSIONS <span className="text-gradient-neon">OPEN</span>
              </h3>
              
              <p className="text-gray-400 text-xs mb-8 leading-relaxed max-w-xs mx-auto">
                Step into the future of education. Secure your spot at JG University and join a global community of innovators.
              </p>

              <button className="w-full group relative py-4 rounded-xl bg-white text-black font-bold text-base overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98]">
                <div className="absolute inset-0 bg-jg-red/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Click Here To Apply Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <p className="mt-4 text-[9px] text-gray-500 font-bold uppercase tracking-widest">
                Sponsored by ASIA Charitable Trust
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
