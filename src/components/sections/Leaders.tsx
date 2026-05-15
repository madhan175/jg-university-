"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "M.P Chandran",
    role: "President, JG University",
    image: "/assets/leader/M.P Chandran.png",
    message: "View President's Message",
    description: "M.P Chandran is a postgraduate in management with more than 30 years of experience in senior and board-level positions in public and private sectors in India and abroad. He is the Chairperson of the Education Task Force, Gujarat Chamber of Commerce and Industry. He is also the chairman of ASIA Charitable Trust (ACT). ACT owns and successfully runs 3 schools, 17 colleges, and JG University."
  },
  {
    name: "Dr. CA Achyut Dani",
    role: "Director-General and Provost, JG University",
    image: "/assets/leader/Dr. CA Achyut Dani.png",
    message: "View DG's Message",
    description: "Dr. CA Achyut Dani has more than 21 years of experience and expertise in academics and industry. He holds a doctorate in management and commerce and is also a research guide. He has been a fellow member of the Committee for Review of Education and Training (CRET) of the Institute of Chartered Accountants of India, a senior mentor and faculty at Academic Staff College. Gujarat University, National Academy of Direct Taxes, DTRTI (Direct Taxes Regional Training Institute), CEI - Confederation of Entrepreneurship Initiatives and with Mission Mentors for strategic management and international collaborations."
  }
];

export default function Leaders() {
  return (
    <section id="leaders" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black text-white mb-24 tracking-tighter"
        >
          Our <span className="text-gradient-neon">Leaders</span>
        </motion.h2>

        <div className="flex flex-col gap-24">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                i % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Leader Image */}
              <div className="w-full lg:w-1/3 aspect-[4/5] rounded-[40px] overflow-hidden glass border border-white/10 shadow-2xl">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Leader Info */}
              <div className="w-full lg:w-2/3">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                    {leader.name}
                  </h3>
                  <div className="h-8 w-[1px] bg-white/20 hidden md:block" />
                  <p className="text-purple-400 font-bold uppercase tracking-widest text-xs">
                    {leader.role}
                  </p>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  {leader.description}
                </p>

                <button className="px-8 py-4 rounded-xl bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all shadow-lg shadow-purple-600/20">
                  {leader.message}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
