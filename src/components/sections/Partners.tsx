"use client";

import { motion } from "framer-motion";

const partners = [
  "IBM", "ISRO", "MICROSOFT", "GOOGLE", "AMAZON", "TECH MAHINDRA", 
  "INFOSYS", "WIPRO", "TCS", "ORACLE", "CISCO", "ADOBE"
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 border-y border-white/5 bg-black/40">
      <div className="container mx-auto px-8 mb-12 text-center">
        <h4 className="text-gray-500 font-bold tracking-[0.5em] uppercase text-[10px]">
          Global Industry Collaborators
        </h4>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 py-10 items-center"
        >
          {[...partners, ...partners].map((partner, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-black text-white/10 hover:text-white/40 transition-colors cursor-default tracking-tighter"
            >
              {partner}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
