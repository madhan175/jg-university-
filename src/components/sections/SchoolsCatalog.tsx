"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, GraduationCap, Code, Shield, Briefcase, Palette, Plane, Rocket } from "lucide-react";

const schoolsData = [
  {
    name: "School of Management",
    icon: Briefcase,
    programmes: [
      { name: "BBA (Hons)", detail: "4 years, 8 semesters - Bachelor of Business Administration" },
      { name: "iMBA", detail: "5 years, 10 semesters - Integrated BBA + MBA" },
      { name: "iMBA - Global Business", detail: "5 years, 10 semesters - Integrated BBA + MBA" },
      { name: "iMBA - International Trade & Finance", detail: "5 years, 10 semesters - Integrated BBA + MBA" },
      { name: "BBA (Hons) - International Trade & Finance", detail: "4 years, 8 semesters - Bachelor of Business Administration" },
      { name: "MBA", detail: "2 years, 4 semesters - Master of Business Administration" },
      { name: "Masters in International Trade & Finance", detail: "2 years, 4 semesters - Master of Business Administration" },
      { name: "PGD - Banking & Finance", detail: "1 year, 2 semesters" }
    ]
  },
  {
    name: "School of Investigative and Applied Sciences (SIAS)",
    icon: Shield,
    programmes: [
      { name: "iM.Sc. - Forensic Science", detail: "5 years, 10 semesters - Integrated B.Sc. + M.Sc. Forensic Science" },
      { name: "iM.Sc. - Cyber Security & Digital Forensics", detail: "5 years, 10 semesters - Integrated B.Sc. + M.Sc. Cyber Security & Digital Forensics" },
      { name: "iM.Sc. - Reproductive Biology & Clinical Embryology", detail: "5 years, 10 semesters - Integrated B.Sc. + M.Sc. Reproductive Biology & Clinical Embryology" },
      { name: "M.Sc. - Cyber Security & Digital Forensics", detail: "2 years, 4 semesters - Master of Science" },
      { name: "M.Sc. - Forensic Science & Technology", detail: "2 years, 4 semesters - Master of Science" },
      { name: "M.Sc. - Clinical Embryology & ART", detail: "2 years, 4 semesters - Master of Science" }
    ]
  },
  {
    name: "School of Engineering",
    icon: Code,
    programmes: [
      { name: "B.Tech - CSE", detail: "4 years, 8 semesters - Computer Science & Engineering" },
      { name: "B.Tech - IT", detail: "4 years, 8 semesters - Information Technology" },
      { name: "B.Tech - AI & DS", detail: "4 years, 8 semesters - Data Science" },
      { name: "B.Tech - AI & ML", detail: "4 years, 8 semesters - Artificial Intelligence" },
      { name: "B.Tech - CE", detail: "4 years, 8 semesters - Computer Engineering" },
      { name: "B.Tech - CSE - AI", detail: "4 years, 8 semesters - Artificial Intelligence" },
      { name: "B.Tech - CSE - AI & ML", detail: "4 years, 8 semesters" },
      { name: "B.Tech - CSE - BDA", detail: "4 years, 8 semesters - Big Data Analytics" }
    ]
  },
  {
    name: "School of Commerce",
    icon: BookOpen,
    programmes: [
      { name: "B.Com (Hons)", detail: "4 years, 8 semesters - Bachelor of Commerce" },
      { name: "B.Com (Hons) with ACCA", detail: "4 Years, 8 Semesters" },
      { name: "M.Com (Hons)", detail: "2 years, 4 semesters - International Accounting & Taxation" }
    ]
  },
  {
    name: "School of Computing",
    icon: Code,
    programmes: [
      { name: "BCA (Hons)", detail: "4 years, 8 semesters - Bachelor of Computer Applications" },
      { name: "iMSc (IT)", detail: "5 years, 10 semesters - Integrated BSc+MSc (IT)" },
      { name: "iMCA", detail: "5 years, 10 semesters - Integrated BCA + MCA" },
      { name: "MCA", detail: "2 years, 4 semesters - Master of Computer Applications" },
      { name: "MCA - AI & Full Stack Development", detail: "2 Years, 4 Semesters" }
    ]
  },
  {
    name: "School of Law",
    icon: GraduationCap,
    programmes: [
      { name: "LL.M.", detail: "2 years, 4 semesters - Master of Legislative Law" },
      { name: "LL.B.", detail: "3 years, 6 semesters - Bachelor of Legislative Law" }
    ]
  },
  {
    name: "School of Design",
    icon: Palette,
    programmes: [
      { name: "B.Design - UI/UX", detail: "3 years, 6 semesters - Bachelor of Design" },
      { name: "B.Design(Hons) - UI/UX", detail: "4 years, 8 semesters" },
      { name: "B.Design - Game Design", detail: "3 years, 6 semesters" },
      { name: "B.Design(Hons) - Game Design", detail: "4 years, 8 semesters" }
    ]
  },
  {
    name: "School of Emerging Technology",
    icon: Rocket,
    programmes: [
      { name: "Metaverse", detail: "Specialized Course" },
      { name: "Data Science, AI-ML", detail: "Specialized Course" },
      { name: "Mobile applications", detail: "Flutter & React Native" },
      { name: "Blockchain", detail: "Specialized Course" },
      { name: "Digital Marketing", detail: "Specialized Course" },
      { name: "Cyber Security", detail: "Specialized Course" },
      { name: "Robotic Process Automation", detail: "Specialized Course" },
      { name: "Industrial IoT", detail: "Specialized Course" },
      { name: "Full Stack Architect", detail: "Specialized Course" },
      { name: "Azure DevOps", detail: "Specialized Course" }
    ]
  },
  {
    name: "School of Aviation & Hospitality",
    icon: Plane,
    programmes: [
      { name: "Integrated BBA + MBA", detail: "5 years, 10 semesters - Aviation & Hospitality" },
      { name: "Masters in Aviation & Hospitality", detail: "2 years, 4 semesters" }
    ]
  },
  {
    name: "School of Research & Innovation (Ph.D)",
    icon: GraduationCap,
    programmes: [
      { name: "Commerce", detail: "Doctoral Programme" },
      { name: "Management", detail: "Doctoral Programme" },
      { name: "Computing", detail: "Doctoral Programme" },
      { name: "Interdisciplinary", detail: "Doctoral Programme" },
      { name: "Law", detail: "Doctoral Programme" }
    ]
  }
];

export default function SchoolsCatalog() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="programmes" className="py-32 bg-black relative">
      <div className="container mx-auto px-8">
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter"
          >
            Academic <span className="text-gradient-neon">Catalog</span>
          </motion.h2>
          <p className="text-gray-400 mt-6 max-w-2xl text-base">
            Explore our comprehensive range of future-ready programmes across multiple disciplines.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {schoolsData.map((school, i) => (
            <div key={i} className="group">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`w-full p-8 rounded-[32px] glass border border-white/10 flex items-center justify-between transition-all hover:bg-white/5 ${
                  openIndex === i ? "bg-white/5 border-jg-red/30" : ""
                }`}
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${
                    openIndex === i ? "bg-jg-red text-white" : "bg-white/5 text-gray-400 group-hover:text-white"
                  }`}>
                    <school.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-left">
                    {school.name}
                  </h3>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-500 ${
                  openIndex === i ? "rotate-180 text-jg-red" : ""
                }`} />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {school.programmes.map((prog, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-jg-red/20 transition-all group/item"
                        >
                          <h4 className="text-white font-bold mb-2 group-hover/item:text-jg-gold transition-colors">
                            {prog.name}
                          </h4>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {prog.detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
