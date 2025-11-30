import { FiArrowUpRight } from "react-icons/fi";


export default function CallToAction() {
  return (
    <div className="w-full bg-[#2A39FF] rounded-lg p-6 md:p-8 lg:p-10 text-white mt-10">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        {/* Text Section */}
        <div className="max-w-4xl">
          <h2 className="text-xl md:text-3xl font-medium uppercase leading-tight">
            Ready to Transform Your Digital Presence?
          </h2>

          <p className="text-black/80 text-base md:text-md mt-4 leading-relaxed max-w-3xl">
            Take the first step towards digital success with ConstructDev by
            your side. Our team of experts is eager to craft tailored solutions
            that drive growth for your business.
          </p>
        </div>

        {/* Button */}
        <button className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition-all duration-200 text-sm md:text-base tracking-wide">
          GET IN TOUCH
          <FiArrowUpRight className="text-[#2A39FF] text-lg" />
        </button>
      </div>


    </div>
  );
}
