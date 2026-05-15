"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Briefcase, GraduationCap, Users, MonitorPlay, Compass, Clock } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-jg-red" />,
    title: "NEP 2020 Compliant",
    description: "National Education Policy 2020 & UGC Compliant Programmes.",
  },
  {
    icon: <Globe className="w-6 h-6 text-jg-gold" />,
    title: "Global Collaboration",
    description: "Collaboration with Foreign Universities for Curriculum, Delivery, and Student Exchange.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-jg-red" />,
    title: "On-The-Job Training",
    description: "Full Pay On-The-Job Training Opportunities.",
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-jg-gold" />,
    title: "Capstone Projects",
    description: "Course-Embedded Capstone Projects for real-world application.",
  },
  {
    icon: <Users className="w-6 h-6 text-jg-red" />,
    title: "Expert Faculty",
    description: "Faculty Members with Industry Experience and Academic Expertise.",
  },
  {
    icon: <MonitorPlay className="w-6 h-6 text-jg-gold" />,
    title: "Emerging Tech",
    description: "Hands-on Experience using Industry Use-Cases and Emerging Tech.",
  },
  {
    icon: <Compass className="w-6 h-6 text-jg-red" />,
    title: "Diverse Internships",
    description: "Cross-Cultural and Cross-Sectoral Internships.",
  },
  {
    icon: <Clock className="w-6 h-6 text-jg-gold" />,
    title: "24*7 Accessibility",
    description: "24*7 Accessibility of Facilities to Students and Faculty Members.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Salient <span className="text-gradient">Features</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Why JG University stands out as the premier choice for your higher education.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
