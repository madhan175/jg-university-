import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Welcome from "@/components/sections/Welcome";
import AutoSlider from "@/components/sections/AutoSlider";
import Programmes from "@/components/sections/Programmes";
import SchoolsCatalog from "@/components/sections/SchoolsCatalog";
import Strengths from "@/components/sections/Strengths";
import IndustryLinkage from "@/components/sections/IndustryLinkage";
import Leaders from "@/components/sections/Leaders";
import Faculty from "@/components/sections/Faculty";
import SalientFeatures from "@/components/sections/SalientFeatures";
import Campus from "@/components/sections/Campus";
import AlumniTestimonials from "@/components/sections/AlumniTestimonials";
import Collaborations from "@/components/sections/Collaborations";
import Career from "@/components/sections/Career";
import ContactUs from "@/components/sections/ContactUs";
import AdmissionsModal from "@/components/ui/AdmissionsModal";
import SideBars from "@/components/layout/SideBars";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <SmoothScroll>
      <AdmissionsModal />
      <SideBars />
      <div className="relative min-h-screen bg-black overflow-hidden">
        {/* Global Noise Overlay */}
        <div className="noise-overlay" />
        
        <Navbar />
        
        <main>
          <Hero />
          <Welcome />
          
          <div className="relative z-10 bg-black">
            <AutoSlider />
            <Strengths />
            <Programmes />
            <SchoolsCatalog />
            <SalientFeatures />
            <Leaders />
            <Faculty />
            <Campus />
            <IndustryLinkage />
            <Collaborations />
            <Career />
            <AlumniTestimonials />
            <ContactUs />
          </div>
        </main>
        
        <Footer />

        {/* Floating Background Effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-20">
          <div className="absolute top-[10%] left-[5%] w-[30vw] h-[30vw] bg-jg-red/5 blur-[150px] rounded-full animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[5%] w-[40vw] h-[40vw] bg-neon-blue/5 blur-[150px] rounded-full animate-pulse-slow" />
        </div>
      </div>
    </SmoothScroll>
  );
}

