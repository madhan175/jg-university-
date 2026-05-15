"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({
      name: !form.name,
      email: !form.email || !/\S+@\S+\.\S+/.test(form.email),
    });
  };

  return (
    <section id="contact" className="bg-black">
      {/* Hero */}
      <div className="relative h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/Campus/image copy 2.png"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Contact Us"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-6xl md:text-8xl font-black text-white tracking-tighter text-center"
        >
          Contact <span className="text-gradient-neon">Us</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-8 py-24">
        {/* Contact Information + Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-10"
          >
            <h3 className="text-4xl font-black text-white tracking-tight">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <MapPin className="w-6 h-6 text-jg-red shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold mb-1">Main Campus</p>
                  <p className="text-gray-400">ASIA Campus, Drive In Rd, Thaltej,<br />Ahmedabad‑380054, Gujarat, India.</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <Mail className="w-6 h-6 text-jg-red shrink-0 mt-1" />
                <div>
                  <p className="text-jg-gold font-semibold">connect@jguni.in</p>
                  <p className="text-jg-gold font-semibold">admission@jguni.in</p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <Phone className="w-6 h-6 text-jg-red shrink-0 mt-1" />
                <p className="text-gray-400">+91 7567 7567 58/59</p>
              </div>
            </div>
          </motion.div>

          {/* Google Map Embed */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[32px] overflow-hidden border border-white/10 shadow-2xl h-80"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.581624534839!2d72.52697781489427!3d23.057248884937936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e832eb81e11c3%3A0x3fd0e1a2d66dbdf0!2sJG%20University!5e0!3m2!1sen!2sin!4v1684000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>

        {/* Get in Touch Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto glass border border-white/10 rounded-[48px] p-16"
        >
          <h3 className="text-4xl font-black text-white mb-12 text-center tracking-tight">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
              />
              {errors.name && <p className="text-jg-red text-xs mt-2">Please Enter Full Name</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
              />
              {errors.email && <p className="text-jg-red text-xs mt-2">Please Enter Valid Email</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Contact Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all"
              />
            </div>
            <div className="md:col-span-2">
              <textarea
                placeholder="Write your message here"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 focus:border-jg-red/50 rounded-xl px-6 py-4 text-white placeholder-gray-500 outline-none transition-all resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="px-16 py-4 rounded-xl bg-jg-red text-white font-black text-sm uppercase tracking-widest hover:bg-jg-red/80 hover:scale-105 transition-all shadow-lg shadow-jg-red/20"
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
