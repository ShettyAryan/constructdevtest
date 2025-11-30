"use client"
import { FiArrowUpRight } from "react-icons/fi";
import { reasons } from "@/data";
import {motion} from "motion/react"
import React, { useMemo } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/useIsMobile";
import { createSectionVariants, createItemVariants } from "@/data";

const WhyChooseUs = () => {
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
      className="w-full flex flex-col gap-6 mt-10 border-[#1a1a1a] rounded-lg p-4 border-2 bg-black"
    >
      {/* Title Bar */}
      <motion.div
        variants={itemVariants}
        className="w-full bg-[#1a1a1a] p-6 rounded-xl border border-[#222]"
      >
        <h2 className="text-white text-2xl md:text-4xl font-medium tracking-tight">
          <span className="text-[#1B4BCE]">REASONS TO CHOOSE</span> CONSTRUCTDEV
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={sectionVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {reasons.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: (!isMobile && !prefersReducedMotion) ? 0.5 : 0, delay: (!isMobile && !prefersReducedMotion) ? i * 0.2 + 0.3 : 0 }}
            className="bg-[#1a1a1a] border border-[#222] rounded-xl p-6 flex flex-col justify-between min-h-80 group hover:scale-105 transition-all ease-in-out duration-200"
          >
            <div>
              <h3 className="text-[#1b4bce] text-lg md:text-xl font-medium leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm font-light mt-3 leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Footer Button */}
            <div className="flex items-center gap-3 mt-6">
              <div className="h-12 w-12 rounded-full bg-black border border-[#222] flex items-center justify-center shadow-sm group hover:scale-120 transition-all ease-in-out duration-200">
                <FiArrowUpRight className="text-white text-xl group-hover:text-[#0033ff] transition-all ease-in-out duration-200" />
              </div>
              <span className="text-gray-300 text-sm">Learn More</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default React.memo(WhyChooseUs);
