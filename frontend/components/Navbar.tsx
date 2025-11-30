"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  // Section highlight on scroll
  useEffect(() => {
    const sections = ["home", "services", "projects"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `transition-all duration-200 ${
      active === id ? "text-[#0033FF]" : "text-[#81807E]"
    } hover:text-[#0033FF]`;

  return (
    <div className="w-full fixed top-4 left-1/2 -translate-x-1/2 max-w-[1440px] z-50">
      <div className="flex items-center justify-between bg-[#1A1A1A] px-6 py-3 rounded-lg border border-[#2a2a2a] backdrop-blur-md">
        {/* Logo */}
        <Link href={"#home"}>
          <p className="font-zen font-medium tracking-tight text-white text-xl">
            Construct<span className="text-[#0033FF]">Dev</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-roboto-mono text-sm">
          <Link href="#home" className={linkClass("home")}>
            HOME
          </Link>
          <Link href="#services" className={linkClass("services")}>
            SERVICES
          </Link>
          {/* <Link href="#about" className={linkClass("about")}>
            ABOUT
          </Link> */}
          <Link href="#projects" className={linkClass("projects")}>
            PROJECTS
          </Link>
        </div>

        {/* Desktop Contact Button */}
        <button className="hidden md:block bg-[#0033FF] px-4 py-2 text-white font-roboto-mono rounded-md text-sm hover:scale-105 transition-all duration-200">
          CONTACT US
        </button>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#1A1A1A] mt-2 rounded-lg overflow-hidden transition-all duration-300 border border-[#2a2a2a] ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-4 font-roboto-mono text-sm gap-4">
          <Link
            href="#home"
            className={linkClass("home")}
            onClick={() => setOpen(false)}
          >
            HOME
          </Link>
          <Link
            href="#services"
            className={linkClass("services")}
            onClick={() => setOpen(false)}
          >
            SERVICES
          </Link>
          <Link
            href="#about"
            className={linkClass("about")}
            onClick={() => setOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            href="#projects"
            className={linkClass("projects")}
            onClick={() => setOpen(false)}
          >
            PROJECTS
          </Link>

          <button className="bg-[#0033FF] px-4 py-2 text-white font-roboto-mono rounded-md text-sm">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
