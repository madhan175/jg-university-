"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe, Send, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Info */}
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-jg-red rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-white font-black text-xl">JG</span>
              </div>
              <span className="text-white font-black text-2xl tracking-tighter">UNIVERSITY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A futuristic educational ecosystem designed to empower the next generation of tech leaders and innovators.
            </p>
            <div className="flex gap-4">
              {[Globe, Send, Globe, Send].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center hover:bg-jg-red transition-all">
                  <Icon className="w-4 h-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              {["Programmes", "Campus Life", "Placements", "Research", "Collaborations"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-jg-gold text-sm transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 text-jg-red shrink-0" />
                <p className="text-gray-400 text-sm leading-relaxed">
                  ASIA Campus, Drive In Rd, Thaltej,<br />
                  Ahmedabad-380054, Gujarat, India.
                </p>
              </li>
              <li className="flex gap-4">
                <Mail className="w-5 h-5 text-jg-red shrink-0" />
                <div className="space-y-1">
                  <p className="text-gray-400 text-sm">connect@jguni.in</p>
                  <p className="text-gray-400 text-sm">admission@jguni.in</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="w-5 h-5 text-jg-red shrink-0" />
                <p className="text-gray-400 text-sm">+91 7567 7567 58/59</p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h4>
            <div className="glass p-2 rounded-xl border border-white/10 flex items-center">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-transparent border-none focus:ring-0 text-white text-sm px-4 w-full"
              />
              <button className="bg-jg-red p-2 rounded-lg text-white hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <Link href="#" className="inline-block text-jg-gold font-bold text-xs uppercase tracking-widest hover:underline">
              Mandatory Disclosure
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-xs">
            © 2026 JG University. All rights reserved. Managed by ASIA Charitable Trust.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-jg-red/10 to-transparent pointer-events-none -z-10" />
    </footer>
  );
}
