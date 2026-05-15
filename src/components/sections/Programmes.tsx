"use client";

import { motion } from "framer-motion";

const programmes = [
  {
    name: "BBA (Hons)",
    image: "/assets/home/image.png",
    description: "4 years, 8 semesters - Bachelor of Business Administration",
    color: "bg-jg-red"
  },
  {
    name: "iMBA",
    image: "/assets/home/image copy.png",
    description: "5 years, 10 semesters - Integrated BBA + MBA",
    color: "bg-neon-blue"
  },
  {
    name: "B.Tech CSE",
    image: "/assets/home/image copy 2.png",
    description: "4 years, 8 semesters - Computer Science ",
    color: "bg-jg-gold"
  },
  {
    name: "BCA (Hons)",
    image: "/assets/Campus/image.png",
    description: "4 years, 8 semesters - Computer Applications",
    color: "bg-purple-600"
  }
];

export default function Programmes() {
  return (
    <section id="programmes" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black text-white mb-16 tracking-tighter"
        >
          Programmes
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programmes.map((prog, i) => (
            <motion.div
              key={prog.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={prog.image}
                  alt={prog.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className={`${prog.color} py-4 text-center`}>
                <h3 className="text-white font-bold text-lg">{prog.name}</h3>
              </div>
              
              {/* Futuristic Hover Overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

