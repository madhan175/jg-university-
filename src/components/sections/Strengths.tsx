"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Users, GraduationCap, Brain, User } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const springValue = useSpring(count, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-black text-white tracking-tighter">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
}

import { useMotionValue } from "framer-motion";

const stats = [
  { label: "Students", value: 25000, suffix: "+" },
  { label: "Faculty", value: 500, suffix: "+" },
  { label: "Industry Partners", value: 100, suffix: "+" },
  { label: "Placement Support", value: 95, suffix: "%" },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black text-white mb-24 tracking-tighter"
        >
          Our <span className="text-gradient-neon">Strengths</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <Counter value={stat.value} suffix={stat.suffix} />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-jg-red blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-gray-400 font-bold tracking-[0.2em] uppercase text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Interdisciplinary Approach",
              desc: "Students from a wide range of backgrounds connect, ideate and solve problems with different conceptual structures and methods of understanding",
              color: "bg-pink-500",
              icon: Users
            },
            {
              title: "Immersive & Experiential Learning",
              desc: "Exposure to real-life projects to develop hands-on expertise",
              color: "bg-purple-600",
              icon: GraduationCap
            },
            {
              title: "Whole Brain Learning Pedagogy",
              desc: "Pedagogy that empower learners to acquire future-proof technical skills and moulds them into creative thinkers",
              color: "bg-cyan-500",
              icon: Brain
            },
            {
              title: "Faculty from Academia & Industry",
              desc: "Inspiration by dynamic, brilliant scholars with vast academic knowledge and real-world experience",
              color: "bg-jg-gold",
              icon: User
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-[32px] flex gap-6 items-start hover:bg-white/5 transition-all group"
            >
              <div className={`w-20 h-20 shrink-0 rounded-full ${feature.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(200,16,46,0.1),transparent_50%)] animate-pulse" />
      </div>
    </section>
  );
}
