"use client";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { Star, MapPin, Cookie } from "lucide-react";
import {motion} from 'motion/react';
import { createSectionVariants, createItemVariants } from "@/data";
import Link from "next/link";
import React, { useMemo } from "react";
import { useIsMobile, useReducedMotion } from "@/lib/useIsMobile";

const works = [
  {
    title: "AIGenAgentic Solutions",
    category: "Web Design and Development",
    icon: <Star className="text-[#0033FF] w-5 h-5" />,
    desc: "A full-lifecycle, bespoke, full-stack web application meticulously designed, engineered, and deployed to serve a prominent agency client based in Ireland. The system incorporates an advanced, high-availability booking and reservation engine as its core functionality, enhancing operational efficiency and providing a seamless digital experience for both the agency and its clientele.",
    image: "/assets/web1.png",
    nav: "https://aigenagentic.com/",
  },
  {
    title: "Dessire",
    category: "Web Design Consultation",
    icon: <Cookie className="text-[#0033FF] w-5 h-5" />,
    desc: "Provided expert strategic consultation focused on optimizing the client's public-facing website's UI & UX. The engagement delivered a comprehensive roadmap covering design methodologies and search engine optimization (SEO) best practices specifically targeted at maximizing organic traffic acquisition and significantly improving on-site client conversion rates.",
    image: "/assets/web3.png",
    nav: "https://drive.google.com/file/d/1ZNUioQ5H_JW__2b8GAIbLv86RWkvZSpw/view?usp=sharing",
  },
  {
    title: "ConstructXR",
    category: "Web Design & Development and AI Integration",
    icon: <MapPin className="text-[#0033FF] w-5 h-5" />,
    desc: "Led the full-cycle design and development of an innovative digital platform anchored by an integrated intelligent conversational agent. The solution is a production-ready, web application where the AI Chatbot serves as a core functional component, enabling 24/7 automated interaction, personalized service delivery, and providing a scalable method for improving operational efficiency and user engagement.",
    image: "/assets/web2.png",
    nav: "https://www.constructxr.in/",
  },
];

const OurWorks = () => {
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
      className="w-full flex flex-col gap-6 mt-12 border-2 border-[#1a1a1a] p-4 rounded-lg bg-black"
    >
      {/* Title Row */}
      <motion.div
        variants={itemVariants}
        className="flex items-center justify-between w-full bg-[#1a1a1a] p-6 rounded-xl border border-[#222]"
      >
        <h2 className="text-white text-2xl md:text-4xl font-medium tracking-tight">
          OUR <span className="text-[#1B4BCE]">WORKS</span>
        </h2>

        {/* CTA */}
        <div className="flex items-center gap-3 cursor-pointer group hover:scale-110 transition-all ease-in-out duration-200">
          <div className="h-12 w-12 rounded-full bg-black border border-[#222] flex items-center justify-center">
            <FiArrowUpRight className="text-white text-xl group-hover:text-[#0033ff]" />
          </div>
          <span className="text-gray-300 text-sm tracking-[0.2em]">
            ALL WORKS
          </span>
        </div>
      </motion.div>

      {/* Work Items */}
      {works.map((w, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: (!isMobile && !prefersReducedMotion) ? 0.5 : 0, delay: (!isMobile && !prefersReducedMotion) ? i * 0.2 + 0.3 : 0 }}
          className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-4 bg-[#1a1a1a] p-6 rounded-xl border border-[#222] hover:scale-101 hover:border-[#0033ff] transition-all ease-in-out duration-200"
        >
          {/* LEFT SIDE — TEXT */}
          <div className="flex flex-col justify-start gap-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-black border border-[#222] flex items-center justify-center">
                {w.icon}
              </div>

              <h3 className="text-white text-lg md:text-xl font-semibold">
                {w.title}
              </h3>
            </div>

            {/* Category */}
            <span className="mt-4 inline-flex items-center gap-2 text-gray-300 text-sm bg-black border border-[#222] px-3 py-1 rounded-full w-fit">
              <span className="text-gray-500">Category</span>
              <span className="text-[#0033FF] font-medium">• {w.category}</span>
            </span>

            {/* Description */}
            <p className="text-gray-400 text-sm mt-4 leading-relaxed">
              {w.desc}
            </p>

            {/* DETAILS CTA */}
            <Link href={w.nav} target="_blank">
              <div className="mt-6 flex items-center gap-3 cursor-pointer group hover:scale-102 transition-all ease-in-out duration-200">
                <div className="h-10 w-10 rounded-full bg-black border border-[#222] flex items-center justify-center group-hover:scale-110 transition-all ease-in-out duration-200">
                  <FiArrowUpRight className="text-white text-lg group-hover:text-[#0033ff] transition-all ease-in-out duration-200" />
                </div>
                <span className="text-gray-300 text-sm tracking-[0.15em] group-hover:scale-110 transition-all ease-in-out duration-200">
                  DETAILS
                </span>
              </div>
            </Link>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="w-full h-full rounded-xl overflow-hidden">
            <Image
              src={w.image}
              width={500}
              height={600}
              alt={w.title}
              quality={75}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default React.memo(OurWorks);
