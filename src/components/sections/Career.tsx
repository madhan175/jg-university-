"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Career() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="career" className="bg-black">
      {/* Hero */}
      <div className="relative h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/Campus/image copy.png"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Career"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-6xl md:text-8xl font-black text-white tracking-tighter text-center"
        >
          Career <span className="text-gradient-neon">Form</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto glass border border-white/10 rounded-[48px] p-16"
        >
          <h3 className="text-4xl font-black text-white mb-12 text-center tracking-tight">Join Our Team!</h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
            />
            <input
              type="tel"
              placeholder="Contact Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
            />
            <textarea
              placeholder="Write your message here"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all resize-none"
            />

            {/* CV Upload */}
            <div>
              <label className="block text-gray-400 text-sm mb-3 font-semibold">Upload Your CV (PDF only)</label>
              <div className="flex items-center gap-4">
                <label className="cursor-pointer px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all font-semibold">
                  Choose File
                  <input type="file" accept=".pdf" className="hidden" />
                </label>
                <span className="text-gray-500 text-sm">No file chosen</span>
              </div>
            </div>

            {/* Picture Upload */}
            <div>
              <label className="block text-gray-400 text-sm mb-3 font-semibold">Upload Your Picture (JPG only)</label>
              <div className="flex items-center gap-4">
                <label className="cursor-pointer px-5 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-sm hover:bg-white/10 transition-all font-semibold">
                  Choose File
                  <input type="file" accept=".jpg,.jpeg" className="hidden" />
                </label>
                <span className="text-gray-500 text-sm">No file chosen</span>
              </div>
            </div>

            {/* Captcha */}
            <div className="flex items-center gap-4">
              <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-xl">
                <span className="font-black text-jg-gold tracking-widest text-lg select-none">HR25U</span>
              </div>
              <input
                type="text"
                placeholder="Enter captcha code"
                className="flex-1 bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-3 text-white placeholder-gray-500 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-jg-red text-white font-black text-sm uppercase tracking-widest hover:bg-jg-red/80 hover:scale-105 transition-all shadow-lg shadow-jg-red/20"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
