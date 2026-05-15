"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

export default function Welcome() {
  return (
    <section className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tighter">
              Welcome to JG University the <span className="text-gradient-neon">Best University</span> in Ahmedabad
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                JG University is a New Age Tech-Driven University offering programmes that evolve as per future industry demand, 
                thus enabling its students to get into employment or self-employment seamlessly.
              </p>
              <p>
                It is a UGC approved University sponsored by the ASIA Charitable Trust, Which has been in the field of education since 1965, 
                successfully managing 17 colleges and 3 schools.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 group flex items-center gap-3 text-white font-bold"
            >
              <div className="w-12 h-12 rounded-full bg-jg-red flex items-center justify-center group-hover:bg-jg-gold transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
              DISCOVER OUR LEGACY
            </motion.button>
          </motion.div>

          {/* Right Side: Media Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="group relative aspect-[4/5] rounded-[32px] overflow-hidden glass border border-white/10"
            >
              <img 
                src="/assets/home/image.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                alt="Students studying"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-jg-red group-hover:scale-110 transition-all duration-500">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group relative aspect-[4/5] rounded-[32px] overflow-hidden glass border border-white/10 sm:mt-12"
            >
              <img 
                src="/assets/home/image copy.png" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                alt="University life"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-jg-gold group-hover:scale-110 transition-all duration-500">
                  <Play className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-jg-red/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
}
