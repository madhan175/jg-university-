"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Brain, HeartPulse, CircleDollarSign, Globe, Layers, Database } from "lucide-react";

const domains = [
  { name: "Cyber Security", icon: ShieldCheck, color: "text-jg-red" },
  { name: "Artificial Intelligence & Machine Learning", icon: Brain, color: "text-neon-blue" },
  { name: "HealthTech", icon: HeartPulse, color: "text-jg-gold" },
  { name: "Fintech", icon: CircleDollarSign, color: "text-purple-500" },
  { name: "Global Entrepreneurship", icon: Globe, color: "text-green-500" },
  { name: "InfoTech Management", icon: Layers, color: "text-jg-red" },
  { name: "Data Science and Business Analytics", icon: Database, color: "text-neon-blue" }
];

export default function Collaborations() {
  return (
    <section id="collaborations" className="bg-black">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="/assets/Campus/image copy 3.png" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
          alt="Team Collaboration"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-6xl md:text-8xl font-black text-white tracking-tighter text-center"
        >
          Collab<span className="text-gradient-neon">orations</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-8 py-32">
        <div className="text-center mb-24">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-black text-white mb-4 tracking-tight"
          >
            Study in India and International Students
          </motion.h3>
        </div>

        {/* Carleton University Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h4 className="text-3xl font-black text-jg-red uppercase">JG and Carleton University</h4>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Carleton University is a comprehensive university located in the Capital of Canada, Ottawa, Ontario. It offers 65 programs in areas as diverse as public affairs, journalism, film studies, engineering, high technology and international studies.
              </p>
              <p>
                The Canada-India Centre for Excellence (CICE) at Carleton University is partnering with <span className="text-white font-bold">JGUNI</span> to offer CICE joint certificates to students across multiple high-tech domains.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="glass-card p-12 rounded-[48px] border border-white/10 flex flex-col items-center justify-center text-center bg-white/5"
          >
            <div className="w-32 h-32 bg-jg-red rounded-3xl flex items-center justify-center mb-8 rotate-3 shadow-2xl">
              <Globe className="w-16 h-16 text-white" />
            </div>
            <h5 className="text-2xl font-black text-white mb-4">Canada-India Centre for Excellence</h5>
            <p className="text-jg-gold font-bold uppercase tracking-widest text-xs">Carleton University</p>
          </motion.div>
        </div>

        {/* Domains Grid */}
        <div className="mb-32">
          <h4 className="text-3xl font-black text-white text-center mb-16">Training courses will be from multiple domains</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {domains.map((domain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:bg-white/10 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <domain.icon className={`w-8 h-8 ${domain.color}`} />
                </div>
                <span className="text-white font-bold text-sm leading-snug">{domain.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Exchange Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto p-12 rounded-[40px] glass border border-white/10 text-center bg-gradient-to-br from-jg-red/5 to-neon-blue/5"
        >
          <p className="text-gray-300 text-xl leading-relaxed italic">
            "The world is getting increasingly smaller as new technologies emerge, and educational institutions must keep up with the pace. We plan to initiate a student exchange programme at <span className="text-jg-gold font-bold">JGUNI</span> to enhance and enrich your educational experience."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
