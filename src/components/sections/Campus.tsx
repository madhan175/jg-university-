"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { Cpu, Rocket, BookOpen, Wifi, ChevronLeft, ChevronRight, Accessibility, Database, Search, Users, Heart, ChevronDown } from "lucide-react";

const campusImages = [
  "/assets/Campus/image.png",
  "/assets/Campus/image copy.png",
  "/assets/Campus/image copy 2.png",
  "/assets/Campus/image copy 3.png",
  "/assets/Campus/image copy 4.png",
];

const upcomingImages = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
];

export default function Campus() {
  return (
    <section id="campus" className="py-32 bg-black">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black text-white mb-12 tracking-tighter"
        >
          Campus
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-gray-400 text-lg max-w-4xl mb-16 leading-relaxed"
        >
          The university's main campus is located at <span className="text-white font-bold">Asia Campus on Drive-In Road in Ahmedabad</span>. It is situated in the centre of the city and has quick access to the metro and other local transportation.
        </motion.p>

        {/* Current Campus Sliders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {[1, 2].map((i) => (
            <div key={i} className="relative group rounded-[32px] overflow-hidden glass border border-white/10">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: `.campus-next-${i}`, prevEl: `.campus-prev-${i}` }}
                autoplay={{ delay: 4000 + i * 1000 }}
                loop={true}
                className="w-full aspect-video"
              >
                {campusImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={img} alt="Campus" className="w-full h-full object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className={`campus-prev-${i} absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className={`campus-next-${i} absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          {/* Differently Abled */}
          <div>
            <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Facilities For Differently-Abled</h3>
            <p className="text-gray-400 mb-8">The campus is thoughtfully designed to be inclusive and accessible for differently-abled individuals through structural enhancements and support facilities.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Differently Abled Friendly", icon: Heart },
                { name: "Ramps with Handrails", icon: Accessibility },
                { name: "Accessible Toilets", icon: Users },
                { name: "Elevators for Easy Access", icon: ChevronDown }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-jg-red" />
                  <span className="text-white text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Library */}
          <div>
            <h3 className="text-3xl font-black text-white mb-8 tracking-tight">Library</h3>
            <p className="text-gray-400 mb-8">A comprehensive and robust library module has been developed within the university's ERP system, ensuring seamless access to academic resources.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "ERP Integrated Digital Access", icon: Database },
                { name: "Journals & Research Material", icon: BookOpen },
                { name: "Quiet Reading Areas", icon: Search },
                { name: "Modern Workstations", icon: Cpu }
              ].map((item, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-jg-red" />
                  <span className="text-white text-sm font-bold">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Campus Section */}
        <div className="mt-32">
          <motion.h2 className="text-5xl font-black text-white mb-12 tracking-tighter">Upcoming <span className="text-gradient-neon">Campus</span></motion.h2>
          <motion.p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-5xl">
            JG University's new campus is coming up near <span className="text-white font-bold">Uvarsad, Gandhinagar on the SG Highway</span>. The campus is less than 18 kilometers from Ahmedabad Airport and approximately 25 kilometers from Ahmedabad Railway Station. It will be equipped with wifi, a multipurpose auditorium, a tech-enabled library, a fitness area, and an incubation center.
          </motion.p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
            {[3, 4].map((i) => (
              <div key={i} className="relative group rounded-[32px] overflow-hidden glass border border-white/10">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={{ nextEl: `.upcoming-next-${i}`, prevEl: `.upcoming-prev-${i}` }}
                  autoplay={{ delay: 5000 + i * 500 }}
                  loop={true}
                  className="w-full aspect-video"
                >
                  {upcomingImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={img} alt="Upcoming Campus" className="w-full h-full object-cover" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className={`upcoming-prev-${i} absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button className={`upcoming-next-${i} absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Features Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[
            { name: "IIoT Lab", icon: Cpu },
            { name: "R&D + Incubation", icon: Rocket },
            { name: "Tech Library", icon: BookOpen },
            { name: "Wi-Fi Campus", icon: Wifi },
            { name: "Auditorium", icon: Users },
            { name: "Fitness Center", icon: Heart }
          ].map((feature, i) => (
            <motion.div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full glass border border-pink-500/30 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-all shadow-lg">
                <feature.icon className="w-8 h-8 text-pink-500" />
              </div>
              <p className="text-gray-400 font-bold text-xs tracking-tight group-hover:text-white transition-colors">{feature.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


