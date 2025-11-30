"use client";
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useIsMobile, useReducedMotion } from "@/lib/useIsMobile";

const Deco = () => {
  return (
    <div className="relative flex">
      <div className="w-15 h-15 border-[#0033ff] border-2 bg-black p-2 rounded-full z-1 flex items-center justify-center">
        <div className="rounded-full bg-[#0033ff] flex items-center justify-center w-10 h-10 hover:scale-125 transition-all duration-200 ease-in-out">
          <ArrowRight className="text-white w-5 h-5 text-center hover:scale-125 transition-all ease-in-out duration-200" />
        </div>
      </div>
      <div className="bg-[#1a1a1a] z-2 absolute left-14 top-1 w-55 py-3">
        {shouldAnimate ? (
          <TypeAnimation
            sequence={[
              "Your Brand Partner",
              3000,
              "Your Tech Partner",
              3000,
              "Your Web Partner",
              3000,
              "Your AI Partner",
              3000,
            ]}
            wrapper="span"
            speed={30}
            repeat={Infinity}
            className="uppercase text-white text-xl"
          />
        ) : (
          <p className="uppercase text-white text-xl">Your Tech Partner</p>
        )}
      </div>
    </div>
  );
}

export default React.memo(Deco);