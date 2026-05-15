"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chintan Vyas",
    role: "B.Com - Manager, Nexa",
    company: "Nexa",
    image: "/assets/Faculty/CA CPA Harshil Trivedi .png",
    text: "It gives me great pleasure to say with pride that I have completed my graduation from JG. The relationship between faculty members and students is very cordial, which gave me an opportunity to flourish in my studies. The years spent here were splendid and assisted both my professional and personal growth."
  },
  {
    name: "Priya Sharma",
    role: "MBA, Class of 2022",
    company: "Deloitte",
    image: "/assets/home/image.png",
    text: "JG University doesn't just teach business; it builds leaders. The industry connect and global collaborations opened doors I never thought possible."
  },
  {
    name: "Rahul Verma",
    role: "BCA, Class of 2023",
    company: "Microsoft",
    image: "/assets/home/image copy.png",
    text: "The hands-on projects and the 'Learning by Doing' approach prepared me for the real-world challenges from day one."
  },
  {
    name: "Sneha Patel",
    role: "BBA, Class of 2022",
    company: "Amazon",
    image: "/assets/home/image copy 2.png",
    text: "The holistic environment and the focus on interdisciplinary learning made my university experience truly transformative."
  }
];

export default function AlumniTestimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tighter"
        >
          JG Alumni <span className="text-gradient-neon">Testimonials</span>
        </motion.h2>

        <div className="relative glass-card p-12 rounded-[40px] border border-white/10 overflow-hidden">
          {/* Large Quote Mark background */}
          <div className="absolute top-10 left-10 text-jg-gold/20 select-none pointer-events-none">
            <Quote size={120} strokeWidth={1} fill="currentColor" />
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="w-full"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="max-w-4xl mx-auto pt-12 pb-12 px-4 md:px-12 relative z-10">
                  <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-12 italic">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-6">
                    <img src={t.image} alt={t.name} className="w-20 h-20 rounded-full border-2 border-white/10 shadow-xl" />
                    <div>
                      <h4 className="text-2xl font-bold text-white">{t.name}</h4>
                      <p className="text-purple-400 font-bold uppercase tracking-widest text-xs mt-1">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons (Bottom Right as per image) */}
          <div className="absolute bottom-12 right-12 flex gap-4 z-20">
            <button className="testimonial-prev w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button className="testimonial-next w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-white hover:bg-jg-red transition-all">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

