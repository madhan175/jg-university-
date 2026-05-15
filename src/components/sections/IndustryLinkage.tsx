"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users, Briefcase, GraduationCap, Handshake } from "lucide-react";

const mentors = [
  {
    name: "Mr. Bhavin S Bhagat",
    role: "Founder",
    image: "/assets/home/image.png"
  },
  {
    name: "Mr. Vivek Ogra",
    role: "Director",
    image: "/assets/home/image copy.png"
  },
  {
    name: "Mr. Nilesh Patel",
    role: "Regional Business Head at Shapoorji Pallonji",
    image: "/assets/home/image copy 2.png"
  }
];

const partners = [
  "Yudiz", "DEV IT", "Aventure Systems", "samy@k", "CODING PRO"
];

export default function IndustryLinkage() {
  return (
    <section id="partners" className="bg-black">
      {/* Industry Linkage Hero */}
      <div className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <img 
          src="/assets/Campus/image copy 4.png" 
          className="absolute inset-0 w-full h-full object-cover opacity-40" 
          alt="Handshake"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative z-10 text-6xl md:text-8xl font-black text-white tracking-tighter text-center"
        >
          Industry <span className="text-gradient-neon">Linkage</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-8 py-32">
        {/* Mentorship Programme */}
        <div className="mb-32">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-white mb-12 tracking-tight"
          >
            Mentorship Programme
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-6 text-gray-400 text-lg leading-relaxed"
            >
              <p>
                JG University believes that mentors have the best interest at heart and make sure to encourage students to succeed personally and professionally. For us, mentors are experienced individuals, trusted advisors who hold the institution on a higher platform.
              </p>
              <p>
                At JG University, every student has a mentor. They come from the industry and consulting spaces. With their knowledge and experiences, they guide students to make informed decisions. Our Mentorship Programme is a unique model that aims to build a bridge between the students and the industry.
              </p>
            </motion.div>
            
            <div className="relative glass-card p-12 rounded-[40px] border border-white/10">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{ nextEl: ".mentor-next", prevEl: ".mentor-prev" }}
                autoplay={{ delay: 5000 }}
                spaceBetween={30}
                className="w-full"
              >
                {mentors.map((mentor, i) => (
                  <SwiperSlide key={i}>
                    <div className="text-center group">
                      <div className="w-48 h-48 mx-auto mb-8 rounded-2xl overflow-hidden border-2 border-white/10 group-hover:border-jg-red transition-all">
                        <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-2">{mentor.name}</h4>
                      <p className="text-jg-gold text-xs font-bold uppercase tracking-widest">{mentor.role}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="mentor-prev absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="mentor-next absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Industry Partnership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h3 className="text-4xl font-black text-white mb-12 tracking-tight">Industry Partnership</h3>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                JG University endeavours to be in tune with the current times. With a commitment to inspire and cultivate industry leaders our Industry Connect model bridges the gap between academy and industry.
              </p>
              <p>
                Our Pedagogy is conceptualised, in terms of active learner engagement. The teaching method is innovative and creative, offering each student theoretical knowledge and practical learning, inspiring them to be lifelong learners.
              </p>
              <p>
                Apart from creating employable individuals, we also believe in nurturing our students into a responsible citizen. The idea is to learn as much. Be a knowledge-sponge. And then, give back!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Active Engagement", icon: Users },
              { title: "Innovative Teaching", icon: GraduationCap },
              { title: "Bridge The Gap", icon: Handshake },
              { title: "Employable Leaders", icon: Briefcase }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col items-center justify-center text-center group hover:bg-white/5 transition-all"
              >
                <item.icon className="w-10 h-10 text-jg-red mb-4 group-hover:scale-110 transition-transform" />
                <span className="text-white font-bold text-sm">{item.title}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Partners */}
        <div className="mt-32">
          <h3 className="text-3xl font-black text-white mb-12 tracking-tight text-center">Our Partners</h3>
          <div className="glass-card p-12 rounded-[40px] border border-white/10 relative overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, el: ".partners-pagination" }}
              slidesPerView={2}
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 }
              }}
              className="w-full pb-16"
            >
              {partners.map((partner, i) => (
                <SwiperSlide key={i}>
                  <div className="flex items-center justify-center px-8">
                    <span className="text-3xl md:text-4xl font-black text-white/20 hover:text-white transition-colors cursor-default tracking-tighter uppercase text-center">
                      {partner}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="partners-pagination flex justify-center gap-2 mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
