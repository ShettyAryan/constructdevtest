import dynamic from "next/dynamic";
import WhyChooseUs from "@/components/Choose";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import CTA from "@/components/CTA";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";

// Lazy load heavy components that are below the fold
const OurWork = dynamic(() => import("@/components/OurWork"), {
  loading: () => <div className="w-full h-96 flex items-center justify-center"><div className="text-gray-400">Loading projects...</div></div>,
  ssr: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="w-full h-64 flex items-center justify-center"><div className="text-gray-400">Loading testimonials...</div></div>,
  ssr: true,
});

export default function Home() {
  return (
    <div className="w-full relative p-5">
      
      <div className="mt-25 mb-10" id="home">
        <Hero />
      </div>
      <WhyChooseUs />
      <div id="services" className="mt-20">
        <ServicesSection />
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
