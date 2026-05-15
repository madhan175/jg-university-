"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const faculty = [
  { name: "CA CPA Harshil Trivedi", school: "School of Management", image: "/assets/Faculty/CA CPA Harshil Trivedi .png" },
  { name: "Dr. Hitesh Harwani", school: "School of Management", image: "/assets/Faculty/Dr. Hitesh Harwani.png" },
  { name: "Dr. Jigar Aggarwal", school: "School of Management", image: "/assets/Faculty/Dr. Jigar Aggarwal .png" },
  { name: "Prof. Dinesh Patel", school: "School of Management", image: "/assets/Faculty/Prof. Dinesh Patel .png" },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-5xl font-black text-white mb-24 tracking-tighter"
        >
          Faculty <span className="text-gradient-neon">Members</span>
        </motion.h2>

        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, EffectCoverflow, Navigation]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            autoplay={{ delay: 3000 }}
            navigation={{
              nextEl: ".faculty-next",
              prevEl: ".faculty-prev",
            }}
            loop={true}
            className="w-full py-12"
          >
            {faculty.map((member, i) => (
              <SwiperSlide key={i} className="max-w-[400px]">
                <div className="glass-card rounded-[40px] overflow-hidden group">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-8 text-center bg-white/5">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-jg-gold text-xs font-bold uppercase tracking-widest">
                      {member.school}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <button className="faculty-prev absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="faculty-next absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

