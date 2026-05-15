"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "National Education Policy (NEP) 2020 & UGC Compliant Programmes",
  "Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange",
  "Full Pay On-The-Job Training Opportunities",
  "Course-Embedded Capstone Projects",
  "Faculty Members with Industry Experience and Academic Expertise",
  "Hands-on Experience using Industry Use-Cases and Emerging Tech",
  "Cross-Cultural and Cross-Sectoral Internships",
  "24*7 Accessibility of Facilities to Students and Faculty Members"
];

export default function SalientFeatures() {
  return (
    <section id="features" className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter"
        >
          JG University Salient <span className="text-gradient-neon">Features</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-card p-12 rounded-[40px] border border-white/10 relative group overflow-hidden"
        >
          {/* Animated Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-jg-red/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 relative z-10">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 group/item"
              >
                <div className="mt-1">
                  <CheckCircle2 className="w-5 h-5 text-jg-gold group-hover/item:scale-110 transition-transform" />
                </div>
                <p className="text-gray-300 text-lg leading-snug group-hover/item:text-white transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}

