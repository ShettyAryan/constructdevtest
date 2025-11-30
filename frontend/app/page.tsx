import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";

// Aggressively lazy load heavy components - only load when needed
// SSR enabled for better SEO and initial load, but components are still code-split
const OurWork = dynamic(() => import("@/components/OurWork"), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><div className="text-gray-400">Loading projects...</div></div>,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="w-full h-64 flex items-center justify-center"><div className="text-gray-400">Loading testimonials...</div></div>,
});

// Lazy load other heavy components
const WhyChooseUsLazy = dynamic(() => import("@/components/Choose"));

const ServicesLazy = dynamic(() => import("@/components/Services"));

export default function Home() {
  return (
    <div className="w-full relative p-5">
      <div className="mt-25 mb-10" id="home">
        <Hero />
      </div>
      
      {/* Lazy load components below the fold */}
      <WhyChooseUsLazy />
      
      <div id="services" className="mt-20">
        <ServicesLazy />
      </div>
      
      <div id="projects" className="mt-20">
        <OurWork />
      </div>
      
      <div className="mt-10">
        <Testimonials />
      </div>
      
      <CTA />
      <WorkTogether />
      <Footer />
    </div>
  );
}
