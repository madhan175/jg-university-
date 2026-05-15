"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, FileText, Send, Globe, Mail } from "lucide-react";

export default function SideBars() {
  return (
    <>
      {/* Left Sidebar - Psychometric Test */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-1/2 -translate-y-1/2 z-[60] hidden xl:block"
      >
        <button className="bg-jg-red text-white py-6 px-3 rounded-r-2xl font-bold [writing-mode:vertical-lr] rotate-180 flex items-center gap-4 shadow-[0_0_20px_rgba(200,16,46,0.3)] hover:pr-6 transition-all group">
          <FileText className="w-5 h-5 rotate-90 group-hover:scale-110 transition-transform" />
          FREE PSYCHOMETRIC TEST
        </button>
      </motion.div>

      {/* Right Sidebar - Apply & Enquire */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col gap-1 hidden xl:flex"
      >
        <button className="bg-jg-red text-white py-8 px-3 rounded-l-2xl font-bold [writing-mode:vertical-lr] flex items-center gap-4 shadow-[0_0_20px_rgba(200,16,46,0.3)] hover:pl-6 transition-all group">
          <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
          APPLY NOW
        </button>
        <button className="bg-jg-dark text-white py-8 px-3 rounded-l-2xl font-bold [writing-mode:vertical-lr] flex items-center gap-4 border border-white/10 hover:pl-6 transition-all group">
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          ENQUIRE NOW
        </button>
      </motion.div>

      {/* Social Floating Icons (Bottom Left) */}
      <div className="fixed bottom-8 left-8 z-[60] flex flex-col gap-3 hidden md:flex">
        {[Globe, Mail, Send, Globe].map((Icon, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1, x: 5 }}
            className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-jg-red transition-all shadow-xl"
          >
            <Icon className="w-4 h-4 text-white" />
          </motion.button>
        ))}
      </div>

      {/* WhatsApp Button (Bottom Right) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
        <Phone className="w-8 h-8 text-white fill-white" />
      </motion.button>
    </>
  );
}
