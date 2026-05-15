"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const slides = [
  {
    title: "Workshop on National Education Policy",
    title: "Global Learning",
    description: "Empowering educators and students with the latest insights into India's educational transformation.",
    image: "/assets/Campus/image.png",
    color: "from-jg-red/20",
  },
  {
    title: "Innovation Hub",
    description: "Nurturing global business leaders with a focus on digital transformation.",
    image: "/assets/home/image.png",
    color: "from-blue-500/20",
  },
  {
    title: "Student Life",
    description: "Innovating for a sustainable future with cutting-edge engineering solutions.",
    image: "/assets/Campus/image copy.png",
    color: "from-green-500/20",
  },
  {
    title: "Research Excellence",
    description: "Mastering the world of AI, Data Science, and Software Excellence.",
    image: "/assets/home/image copy.png",
    color: "from-purple-500/20",
  },
  {
    title: "Future Leaders",
    description: "Exploring the frontiers of scientific discovery and applied research.",
    image: "/assets/Campus/image copy 2.png",
    color: "from-cyan-500/20",
  },
  },
  {
    title: "Campus Life",
    description: "A vibrant, global community fostering holistic growth and memories.",
    image: "https://images.unsplash.com/photo-1523050335392-93851179ae22?q=80&w=2070&auto=format&fit=crop",
    color: "from-orange-500/20",
  },
];


export default function AutoSlider() {
  return (
    <section className="h-screen w-full relative group">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full overflow-hidden">
              {/* Background Image with Zoom Effect */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] scale-110 group-[.swiper-slide-active]:scale-100"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} to-black/80 z-10`} />
              
              {/* Slanted Split Effect (MetaMask/Premium Style) */}
              <div className="absolute inset-0 z-15 pointer-events-none">
                <div 
                  className="absolute inset-0 bg-jg-red/10 backdrop-blur-[1px]" 
                  style={{ clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)" }} 
                />
              </div>

              <div className="absolute inset-0 backdrop-blur-[1px] z-10" />

              {/* Content */}
              <div className="relative z-20 h-full max-w-7xl mx-auto px-8 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <h4 className="text-jg-gold font-bold tracking-[0.3em] uppercase mb-4">
                    Experience Excellence
                  </h4>
                  <h2 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[0.9] tracking-tighter">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i % 2 !== 0 ? "text-gradient-neon" : ""}>
                        {word}{' '}
                      </span>
                    ))}
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                  
                  <div className="flex gap-4">
                    <button className="px-8 py-4 rounded-full bg-white text-black font-bold flex items-center gap-2 hover:scale-105 transition-all">
                      Learn More <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-full glass border border-white/10 text-white font-bold hover:bg-white/5 transition-all">
                      View Courses
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* UI Cards (Floating) */}
              <div className="absolute right-12 bottom-24 z-30 hidden lg:block">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  className="glass-card p-6 w-80 rounded-3xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-jg-red/20 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-jg-red" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold">Industry Integrated</h3>
                      <p className="text-xs text-gray-400">100% Placement Support</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Collaborating with top tech giants to ensure our students are industry-ready from day one.
                  </p>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
