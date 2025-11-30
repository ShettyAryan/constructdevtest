"use client"
import React from 'react'
import Marquee from "react-fast-marquee";
import MarqueeText from "@/subcomponents/MarqueeText";
import { useIsMobile } from "@/lib/useIsMobile";

const WorkTogether = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full py-6 md:py-10">
      {/* Marquee */}
      <div className="bg-[#1a1a1a] p-1 rounded-md my-2 font-roboto-mono mt-2 mb-6">
        {isMobile ? (
          <div className="text-gray-300 text-sm px-2 flex items-center justify-center">
            <div className="p-2 flex items-center justify-center gap-2">
              <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
              <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                Let&apos;s work together
              </p>
            </div>
            <div className="p-2 flex items-center justify-center gap-2">
              <div className="rounded-full w-2 h-2 bg-[#0033ff]"></div>
              <p className="text-sm tracking-tighter font-medium text-gray-400 upperacse">
                Let&apos;s work together
              </p>
            </div>
            
          </div>
        ) : (
          <Marquee direction="left" pauseOnHover loop={0} autoFill>
            <MarqueeText text="Let's work Together" />
          </Marquee>
        )}
      </div>
    </div>
  );
}

export default WorkTogether