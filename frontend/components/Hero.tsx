"use client";

import { projects } from "@/data";
import Carousel from "@/subcomponents/Carosel";
import Deco from "@/subcomponents/Deco";
import MarqueeText from "@/subcomponents/MarqueeText";
import StatsStrip from "@/subcomponents/StatsStrip";
import React, { useMemo } from "react";
import Marquee from "react-fast-marquee";
import { motion, Variants } from "motion/react";
import { useIsMobile, useReducedMotion } from "@/lib/useIsMobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !isMobile && !prefersReducedMotion;

  const fadeUp: Variants = useMemo(() => ({
    hidden: { opacity: shouldAnimate ? 0 : 1, y: shouldAnimate ? 20 : 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldAnimate ? 0.7 : 0, ease: "easeOut" },
    },
  }), [shouldAnimate]);

  const fade: Variants = useMemo(() => ({
    hidden: { opacity: shouldAnimate ? 0 : 1 },
    show: {
      opacity: 1,
      transition: { duration: shouldAnimate ? 0.7 : 0, ease: "easeOut" },
    },
  }), [shouldAnimate]);

  return (
    <div className="w-full flex flex-col gap-3 items-start justify-center mt-10">
      {/* Landing Page */}
      <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-1 w-full md:pr-1">
        {/* LEFT TEXT SECTION */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          className="relative px-4 bg-[#1a1a1a] rounded-lg max-w-full"
        >
          <div className="px-6 pt-6 pb-4">
            {/* Heading */}
            <motion.h1
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-medium text-left text-white uppercase md:leading-20 leading-normal mt-4 tracking-tight"
            >
              <span className="text-[#1B4BCE]">Digital</span> Solutions <br />
              that Drive <span className="text-[#1B4BCE]">Success</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={fadeUp}
              transition={{ delay: 0.25 }}
              className="text-sm sm:text-base font-light text-left text-gray-300 pb-6 max-w-2xl"
            >
              At ConstructDev, we believe in transforming your vision into
              immersive digital experiences with cutting-edge development,
              stunning design, and innovative solutions.
            </motion.p>
          </div>

          {/* Marquee */}
          <motion.div
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="bg-black p-1 rounded-md my-2 font-roboto-mono mt-2 mb-6"
          >
            {isMobile ? (
              <div className="text-gray-300 text-sm px-2 flex items-center justify-center">
                <div className="p-2 flex items-center justify-center gap-2">
                  <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
                  <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                    Website
                  </p>
                </div>
                <div className="p-2 flex items-center justify-center gap-2">
                  <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
                  <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                    Brand
                  </p>
                </div>
                <div className="p-2 flex items-center justify-center gap-2">
                  <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
                  <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                    SEO
                  </p>
                </div>
                <div className="p-2 flex items-center justify-center gap-2">
                  <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
                  <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                    AI
                  </p>
                </div>
              </div>
            ) : (
              <Marquee
                direction="left"
                pauseOnHover
                loop={0}
                autoFill
                speed={20}
              >
                <MarqueeText text="Web Design" />
                <MarqueeText text="Web Development" />
                <MarqueeText text="Branding" />
                <MarqueeText text="AI Integration" />
                <MarqueeText text="SEO Management" />
              </Marquee>
            )}
          </motion.div>

          {/* Deco */}
          <motion.div
            initial={{ opacity: shouldAnimate ? 0 : 1, scale: shouldAnimate ? 0.9 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shouldAnimate ? 0.55 : 0, duration: shouldAnimate ? 0.6 : 0 }}
            className="md:hidden bottom-20 my-5"
          >
            <Deco />
          </motion.div>

          <motion.div
            initial={{ opacity: shouldAnimate ? 0 : 1, scale: shouldAnimate ? 0.9 : 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shouldAnimate ? 0.55 : 0, duration: shouldAnimate ? 0.6 : 0 }}
            className="hidden md:block absolute top-12 left-120"
          >
            <Deco />
          </motion.div>
        </motion.div>

        {/* RIGHT CAROUSEL */}
        <motion.div
          initial={{ opacity: shouldAnimate ? 0 : 1, x: shouldAnimate ? 30 : 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: shouldAnimate ? 0.7 : 0,
            ease: "easeOut",
            delay: shouldAnimate ? 0.3 : 0,
          }}
          className="w-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <Carousel items={projects} />
        </motion.div>
      </div>

      {/* Stats Strip */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ delay: shouldAnimate ? 0.4 : 0 }}
        className="w-full mt-4 mb-5"
      >
        <StatsStrip />
      </motion.div>
    </div>
  );
};

export default Hero;
