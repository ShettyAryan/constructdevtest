"use client"
import { FiArrowUpRight } from "react-icons/fi";
import { Code2, Search, Brush, Cpu } from "lucide-react";
import { createSectionVariants, createItemVariants } from "@/data";
import {motion} from 'motion/react'
import React, { useMemo } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/useIsMobile";

const services = [
  {
    title: "WEB DESIGN & DEVELOPMENT",
    desc: "Our Web Development service is focused on turning your website into a powerful digital asset. We utilize the latest technologies and industry best practices to build websites.",
    icon: <Code2 className="text-[#0033FF] w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "SEO OPTIMIZATION",
    desc: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications that engage your customers on-the-go.",
    icon: <Search className="text-[#0033FF] w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "BRANDING",
    desc: "Our Branding service is all about creating visually stunning and user-focused identity that leaves a lasting impression.",
    icon: <Brush className="text-[#0033FF] w-6 h-6 md:w-7 md:h-7" />,
  },
  {
    title: "AI INTEGRATION",
    desc: "In the digital age, artificial intelligence is a critical aspect of your business's success. Our AI Integration service employs robust automation systems to enhance your business.",
    icon: <Cpu className="text-[#0033FF] w-6 h-6 md:w-7 md:h-7" />,
  },
];

const ServicesSection = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  
  const sectionVariants = useMemo(() => createSectionVariants(isMobile, prefersReducedMotion), [isMobile, prefersReducedMotion]);
  const itemVariants = useMemo(() => createItemVariants(isMobile, prefersReducedMotion), [isMobile, prefersReducedMotion]);
  
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="w-full flex flex-col gap-8 mt-12 p-4 sm:p-6 md:p-8 border-2 border-[#1a1a1a] rounded-2xl bg-black"
    >
      {/* Title Bar */}
      <motion.div
        variants={itemVariants}
        className="w-full bg-[#1a1a1a] p-5 sm:p-6 md:p-8 rounded-xl border border-[#222]"
      >
        <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
          OUR <span className="text-[#1B4BCE]">SERVICES</span>
        </h2>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: (!isMobile && !prefersReducedMotion) ? 0.5 : 0, delay: (!isMobile && !prefersReducedMotion) ? i * 0.2 + 0.3 : 0 }}
            className="bg-[#1a1a1a] border border-[#222] rounded-xl 
                       p-6 sm:p-8 md:p-10 flex flex-col justify-between
                       transition-all duration-300 hover:-translate-y-1 hover:border-[#0033FF]/40"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                {/* Icon box */}
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-black border border-[#222] flex items-center justify-center">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-white text-base sm:text-lg md:text-xl font-normal leading-tight max-w-[180px] sm:max-w-none">
                  {s.title}
                </h3>
              </div>

              {/* Book call */}
              <div className="flex max-lg:hidden lg:flex-row lg:items-center gap-2 sm:gap-3 cursor-pointer">
                <div className="h-10 w-10 rounded-full bg-black border border-[#222] flex items-center justify-center">
                  <FiArrowUpRight className="text-[#0033FF] text-lg" />
                </div>
                <span className="text-gray-300 text-[11px] sm:text-xs tracking-[0.15em] whitespace-nowrap">
                  BOOK A CALL
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base mt-4 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(ServicesSection);
