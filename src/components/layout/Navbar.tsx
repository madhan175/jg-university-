"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Brain, ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { programmes } from "@/data/programmes";

const navLinks = [
  { name: "Programmes", href: "#programmes", hasMega: true },
  { name: "Campus", href: "#campus" },
  { name: "Industry Linkage", href: "#partners" },
  { name: "Collaborations", href: "#collaborations" },
  { name: "Discover Us", href: "#strengths" },
  { name: "Media", href: "#faculty", hasDropdown: true },
  { name: "Career", href: "#career", hasDropdown: true },
  { name: "Contact Us", href: "#contact" },
];

const dropdownData: Record<string, string[]> = {
  Media: ["News", "Student Activities", "Blogs", "Initiatives by JGUNI", "Awards and Recognition"],
  Career: ["News", "Student Activities", "Blogs", "Initiatives by JGUNI", "Awards and Recognition"],
};

const megaMenuData = {
  undergrad: [
    "BBA | BBA (Hons)", "Integrated BBA + MBA", "Integrated BBA + MBA - Global Business",
    "BBA / BBA (Hons) / iMBA", "B.Com | B.Com (Hons)", "B.Com (Hons) with ACCA",
    "BCA | BCA (Hons)", "Integrated BSc + MSc (IT)", "Integrated BSc +MSc (IT-Specialization)",
    "B.Sc. / B.Sc. (Hons) / iMSc", "Integrated BCA + MCA", "B.Tech Programs",
    "BBA | BBA (Hons) - International Trade & Finance",
    "Integrated BBA + MBA - Aviation, Hospitality, & Travel Management",
    "Integrated BBA + MBA - International Trade & Finance", "LL.B."
  ],
  postgrad: [
    "MBA", "Masters in International Trade & Finance",
    "Masters in Aviation, Hospitality & Travel Management",
    "M.Com (Hons) - International Accounting & Taxation", "MCA",
    "MCA - AI / Full Stack Development", "MSc (IT-Specialization)", "MSc", "LL.M."
  ],
  doctoral: [
    "Management", "Commerce", "Computing", "Interdisciplinary", "Law", "Forensic Science"
  ],
  resources: [
    "MBA & MCA JGET Question Bank", "M.Com (Hons) JGET Question Bank", "Ph.D JGET Question Bank"
  ],
  nep: ["Code Of Conduct"]
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof programmes>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white shadow-xl py-2" : "bg-white py-4"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8">
        {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <div className="bg-white p-2 rounded-xl shadow-lg border border-gray-100">
              <img src="/assets/logo.png" alt="JG University Logo" className="h-16 w-auto" />
            </div>
          </Link>

        {/* Desktop Links */}
        <div className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => {
                link.hasMega && setMegaMenuOpen(true);
                link.hasDropdown && setActiveDropdown(link.name);
              }}
              onMouseLeave={() => {
                link.hasMega && setMegaMenuOpen(false);
                link.hasDropdown && setActiveDropdown(null);
              }}
              className="relative py-4"
            >
              <Link
                href={link.href}
                className={`text-[13px] font-bold transition-colors flex items-center gap-1 ${
                  link.name === "Career" || link.name === "Contact Us" ? "text-jg-red" : "text-gray-600 hover:text-jg-red"
                }`}
              >
                {link.name}
                {(link.hasMega || link.hasDropdown) && <ChevronDown className={`w-4 h-4 transition-transform ${megaMenuOpen || activeDropdown === link.name ? "rotate-180" : ""}`} />}
              </Link>

              {/* Simple Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 py-2 z-50"
                    >
                      {dropdownData[link.name]?.map((item) => (
                        <Link
                          key={item}
                          href="#"
                          className="block px-5 py-3 text-[13px] text-gray-600 hover:text-jg-red hover:bg-gray-50 transition-colors"
                        >
                          {item}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}

              {/* Mega Menu */}
              {link.hasMega && (
                <AnimatePresence>
                  {megaMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[1200px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl overflow-hidden border border-gray-100 p-12 grid grid-cols-4 gap-12"
                    >
                      {/* Column 1: Undergrad */}
                      <div className="col-span-1">
                        <h4 className="text-neon-blue font-bold text-sm mb-6 uppercase tracking-wider">Undergraduate Programmes</h4>
                        <ul className="space-y-3">
                          {megaMenuData.undergrad.map(item => (
                            <li key={item}>
                              <Link href="#" className="text-gray-500 hover:text-jg-red text-[12px] leading-tight block transition-colors">{item}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Postgrad & Doctoral */}
                      <div className="col-span-1 flex flex-col gap-12">
                        <div>
                          <h4 className="text-neon-blue font-bold text-sm mb-6 uppercase tracking-wider">Postgraduate Programmes</h4>
                          <ul className="space-y-3">
                            {megaMenuData.postgrad.map(item => (
                              <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-jg-red text-[12px] leading-tight block transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-neon-blue font-bold text-sm mb-6 uppercase tracking-wider">Doctoral Programmes (Ph.D)</h4>
                          <ul className="space-y-3">
                            {megaMenuData.doctoral.map(item => (
                              <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-jg-red text-[12px] leading-tight block transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Column 3: Resources & NEP */}
                      <div className="col-span-1 flex flex-col gap-12">
                        <div>
                          <h4 className="text-neon-blue font-bold text-sm mb-6 uppercase tracking-wider">Resources</h4>
                          <ul className="space-y-3">
                            {megaMenuData.resources.map(item => (
                              <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-jg-red text-[12px] leading-tight block transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-neon-blue font-bold text-sm mb-6 uppercase tracking-wider">NEP 2020</h4>
                          <ul className="space-y-3">
                            {megaMenuData.nep.map(item => (
                              <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-jg-red text-[12px] leading-tight block transition-colors">{item}</Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Column 4: Decoration/CTA */}
                      <div className="col-span-1 bg-gray-50 p-8 rounded-2xl relative overflow-hidden flex flex-col justify-end">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-jg-red/5 to-transparent" />
                        <h5 className="text-xl font-black text-jg-red relative z-10 mb-4">Admissions Open 2026-27</h5>
                        <p className="text-gray-500 text-xs mb-6 relative z-10">Shape your future with world-class faculty and cutting-edge research facilities.</p>
                        <button className="w-full py-3 bg-jg-gold text-black font-bold text-xs uppercase tracking-widest rounded-lg relative z-10 hover:bg-jg-gold/80 transition-all">
                          Apply Now
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* CTA & Search */}
        <div className="hidden xl:flex items-center gap-4">
          <button className="px-8 py-3 rounded-lg bg-jg-gold text-black font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-jg-gold/20">
            Admission
          </button>
          <div className="relative group">
            <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2 border border-transparent focus-within:border-jg-red/20 transition-all">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search programmes..." 
                value={searchQuery}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchQuery(val);
                  if (val.length > 1) {
                    setSearchResults(programmes.filter(p => 
                      p.name.toLowerCase().includes(val.toLowerCase()) || 
                      p.school.toLowerCase().includes(val.toLowerCase())
                    ));
                  } else {
                    setSearchResults([]);
                  }
                }}
                className="bg-transparent border-none focus:ring-0 text-sm text-gray-700 placeholder-gray-400 w-32 focus:w-48 transition-all duration-500"
              />
            </div>
            
            {/* Search Results Dropdown */}
            <AnimatePresence>
              {searchResults.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-[400px] bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 z-50 max-h-[400px] overflow-y-auto"
                >
                  <div className="p-4 bg-gray-50 border-b border-gray-100">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Found {searchResults.length} Programmes</span>
                  </div>
                  {searchResults.map((res, i) => (
                    <Link 
                      key={i} 
                      href="#programmes"
                      onClick={() => {
                        setSearchQuery("");
                        setSearchResults([]);
                      }}
                      className="block p-4 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0 group"
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[13px] font-bold text-gray-800 group-hover:text-jg-red transition-colors">{res.name}</span>
                        <span className="text-[9px] font-black text-jg-gold uppercase tracking-tighter">{res.school}</span>
                      </div>
                      <p className="text-[11px] text-gray-400 line-clamp-1">{res.detail}</p>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="xl:hidden p-3 text-jg-red rounded-full hover:bg-gray-100 transition-colors z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={30} className="stroke-[3]" /> : <Menu size={30} className="stroke-[3]" />}
        </button>
      </div>

      {/* Mobile Menu - Full screen overlay for app-like feel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-white z-[105] flex flex-col p-8 overflow-y-auto">
          <div className="flex flex-col gap-6 mb-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-2xl font-black text-gray-800 flex justify-between items-center py-4 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                <ArrowRight className="w-6 h-6 text-jg-red" />
              </Link>
            ))}
          </div>
          
          <div className="mt-auto space-y-4">
            <button 
              className="w-full py-5 rounded-2xl bg-jg-red text-white font-black text-lg uppercase tracking-widest shadow-xl shadow-jg-red/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Apply Now
            </button>
            <p className="text-center text-xs font-bold text-gray-400">
              SPONSORED BY ASIA CHARITABLE TRUST
            </p>
          </div>
        </div>
      )}
    </nav>
  );
}

