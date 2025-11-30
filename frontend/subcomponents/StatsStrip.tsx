import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

function StatsStrip() {
  const stats = [
    { label: "CLIENTS", value: "3" },
    { label: "PROJECTS", value: "3" },
    { label: "HAPPY CLIENTS", value: "100%" },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-4 bg-black rounded-md p-4 border-2 border-[#1a1a1a] overflow-hidden">
      {/* Stats */}
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex-1 flex flex-col items-center justify-center bg-[#1a1a1a] rounded-[14px] px-6 py-6 md:px-8 md:py-6 border border-[#222] group hover:scale-105 hover:border-[#0033ff] duration-200 transition-all ease-in-out"
        >
          <span className="text-gray-400 text-xs md:text-sm tracking-[0.22em] text-center">
            {s.label}
          </span>
          <span className="text-[28px] md:text-[32px] font-bold text-[#0033ff] mt-2">
            {s.value}
          </span>
        </div>
      ))}

      {/* KNOW MORE */}
      <div className="flex-1 flex items-center justify-center bg-[#1a1a1a] rounded-[14px] px-6 py-6 md:px-10 md:py-10 border border-[#222] group hover:scale-105 hover:border-[#0033ff] duration-200 transition-all ease-in-out">
        <div className="flex items-center gap-4">
          {/* Circle Button */}
          <div className="h-14 w-14 rounded-full bg-black border border-[#222] flex items-center justify-center">
            <FiArrowUpRight className="text-[#0033ff] text-2xl" />
          </div>

          {/* Text */}
          <span className="text-gray-300 text-xs md:text-sm tracking-[0.22em]">
            KNOW MORE
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(StatsStrip);
