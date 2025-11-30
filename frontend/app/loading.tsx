/* eslint-disable react-hooks/purity */
"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useMobileContext } from "@/lib/MobileContext";

export default function Loading() {
  const { isMobile } = useMobileContext();
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0e0e0e] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-[#0033FF40] blur-[120px]" />
      </div>

      {/* Logo / Image */}
      {isMobile ? (
        <div className="relative z-10">
          <Image
            src="/assets/logo.svg"
            alt="Loading"
            width={140}
            height={140}
            className="rounded-xl object-contain drop-shadow-[0_0_30px_#0033FF70]"
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <Image
            src="/assets/logo.svg"
            alt="Loading"
            width={140}
            height={140}
            className="rounded-xl object-contain drop-shadow-[0_0_30px_#0033FF70]"
          />
        </motion.div>
      )}

      {/* Text below */}
      {isMobile ? (
        <p className="text-gray-300 tracking-widest text-sm mt-6 uppercase z-10">
          Loading your experience...
        </p>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-300 tracking-widest text-sm mt-6 uppercase z-10"
        >
          Loading your experience...
        </motion.p>
      )}

      {/* Loader ring */}
      {!isMobile && (
        <motion.div
          className="absolute bottom-20 h-16 w-16 border-4 rounded-full border-t-[#0033FF] border-[#1a1a1a]"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
        />
      )}

      {/* Subtle floating particles - only on desktop */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.span
              key={i}
              className="absolute w-1 h-1 bg-[#0033FF] rounded-full"
              initial={{
                opacity: 0,
                x: Math.random() * 1400 - 700,
                y: Math.random() * 800 - 400,
                scale: 0.4,
              }}
              animate={{
                opacity: [0.1, 0.6, 0.1],
                y: "+=40",
                x: "+=20",
              }}
              transition={{
                repeat: Infinity,
                duration: 3 + Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
