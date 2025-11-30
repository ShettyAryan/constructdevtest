import { FiArrowUpRight } from "react-icons/fi";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-10 font-roboto-mono">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_20%_20%] gap-6 w-full overflow-hidden">
        {/* COLUMN 1: HOME LINKS */}
        <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#222] grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 justify-between">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Home</h3>

            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>Why Us</li>
              <li>About Us</li>
              <li>Projects</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Projects</h3>

            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>AIGenAgentic Solutions</li>
              <li>Dessire</li>
              <li>ConstructXR</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Services</h3>

            <ul className="flex flex-col gap-3 text-gray-400 text-sm">
              <li>Web Development</li>
              <li>Brand Design</li>
              <li>AI Integration</li>
              <li>SEO Optimisation</li>
            </ul>
          </div>
        </div>

        {/* COLUMN 4 & 5 (SOCIALS) - only visible on LG */}
        <div className="relative flex max-md:items-center max-md:justify-center w-full gap-6 items-stretch">
          {/* LINKEDIN */}
          <Link
            href={"https://www.linkedin.com/in/aryanshetty01/"}
            target="_blank"
          >
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#222] flex flex-col justify-between md:min-w-[262px] hover:border-[#0011ff] transition-all ease-in-out duration-200 h-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="h-14 w-14 rounded-xl border border-[#0033ff80] flex items-center justify-center">
                  <FaLinkedin className="text-[#0033FF] text-2xl" />
                </div>

                <div className="h-10 w-10 rounded-full border border-[#333] flex items-center justify-center max-sm:hidden">
                  <FiArrowUpRight className="text-[#0033FF]" />
                </div>
              </div>

              <h3 className="text-white text-xl font-semibold mb-2">
                LINKEDIN
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Share visually appealing snippets of our latest web projects.
              </p>
            </div>
          </Link>

          {/* TWITTER */}
          <Link href={"https://x.com/AryanDevelops01"} target="_blank">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-[#222] flex flex-col justify-between md:min-w-[262px] hover:border-[#0011ff] transition-all ease-in-out duration-200 h-auto pb-13">
              <div className="flex items-center justify-between mb-6">
                <div className="h-14 w-14 rounded-xl border border-[#0033ff80] flex items-center justify-center">
                  <FaTwitter className="text-[#0033FF] text-2xl" />
                </div>

                <div className="h-10 w-10 rounded-full border border-[#333] flex items-center justify-center max-sm:hidden">
                  <FiArrowUpRight className="text-[#0033FF]" />
                </div>
              </div>

              <h3 className="text-white text-xl font-semibold mb-2">TWITTER</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tweet about interesting coding challenges you’ve overcome.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mt-6 flex flex-col md:flex-row items-center justify-between bg-[#1a1a1a] p-6 rounded-2xl border border-[#222] text-gray-400 text-sm">
        <p>© 2025 ConstructDev. All rights reserved.</p>

        <div className="flex items-center gap-6 mt-2 md:mt-0">
          <span className="cursor-pointer hover:text-white transition">
            Terms & Conditions
          </span>
          <span className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </span>
        </div>
      </div>
    </footer>
  );
}
