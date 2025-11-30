export const projects = [
  {
    id: 1,
    title: "AI Gen Agentic Solutions (Ireland)",
    description: "Website Development.",
    image: "/assets/web1.png",
    nav: "https://aigenagentic.com/",
  },
  {
    id: 2,
    title: "Dessire (Cafe)",
    description: "UI/UX + Webflow Build.",
    image: "/assets/web3.png",
    nav: "https://drive.google.com/file/d/1ZNUioQ5H_JW__2b8GAIbLv86RWkvZSpw/view?usp=sharing",
  },
  {
    id: 3,
    title: "ConstructXR",
    description: "Web Design, Development and SEO ",
    image: "/assets/web2.png",
    nav: "https://www.constructxr.in/",
  },
];

export const reasons = [
  {
    title: "EXPERTISE IN CUTTING-EDGE TECHNOLOGIES",
    desc: "ConstructDev ensures your projects are powered by state-of-the-art technologies, guaranteeing innovation and future-proof solutions.",
  },
  {
    title: "PROVEN TRACK RECORD OF SUCCESS",
    desc: "ConstructDev demonstrates a consistent ability to meet and exceed client expectations, providing reliable and effective web solutions tailored to diverse needs.",
  },
  {
    title: "CLIENT-CENTRIC APPROACH",
    desc: "At ConstructDev, we prioritize understanding our clients' unique requirements, fostering transparent communication throughout the development process.",
  },
  {
    title: "DEDICATED TEAM OF PROFESSIONALS",
    desc: "Our professionals bring a wealth of expertise to the table, ensuring the delivery of top-notch, scalable, and secure web solutions for your business.",
  },
];

import {Variants } from "motion/react";

// Create variants function that accepts mobile/reduced motion flags
export const createSectionVariants = (isMobile: boolean, prefersReducedMotion: boolean): Variants => {
  const shouldAnimate = !isMobile && !prefersReducedMotion;
  
  return {
    hidden: { opacity: 0, y: shouldAnimate ? 40 : 0 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldAnimate ? 0.7 : 0,
        ease: "easeOut",
        staggerChildren: shouldAnimate ? 0.15 : 0,
      },
    },
  };
};

export const createItemVariants = (isMobile: boolean, prefersReducedMotion: boolean): Variants => {
  const shouldAnimate = !isMobile && !prefersReducedMotion;
  
  return {
    hidden: { opacity: 0, y: shouldAnimate ? 25 : 0 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: shouldAnimate ? 0.6 : 0, 
        ease: "easeOut" 
      } 
    },
  };
};

// Default variants for backward compatibility (no animation)
export const sectionVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0,
      staggerChildren: 0,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0 } },
};
