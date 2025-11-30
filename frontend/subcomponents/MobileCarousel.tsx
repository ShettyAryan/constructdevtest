"use client";

import { useState, useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function CarouselProjectCard({
  image,
  title,
  subtitle,
  nav,
}: {
  image: string;
  title: string;
  subtitle: string;
  nav?: string;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0e0e0e] border border-[#1a1a1a]">
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          height={500}
          width={600}
          quality={70}
          loading="lazy"
          sizes="100vw"
          className="w-full h-full object-fill"
        />
        <div className="absolute group top-4 right-4 bg-[#0033ff] h-14 w-14 rounded-full flex items-center justify-center shadow-[0_0_30px_#0033ff80]">
          <Link href={nav ? `${nav}` : "#"} target="_blank">
            <FiArrowUpRight className="text-white text-3xl" />
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-linear-to-t from-[#0e0e0e] to-transparent" />
      </div>
      <div className="py-6 px-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export interface MobileCarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  nav: string;
}

export interface MobileCarouselProps {
  items: MobileCarouselItem[];
}

export default function MobileCarousel({ items }: MobileCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Simple swipe detection
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left - next
        setCurrentIndex((prev) => (prev + 1) % items.length);
      } else {
        // Swipe right - previous
        setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 rounded-md border border-[#1a1a1a] bg-[#1a1a1a] w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="min-w-full shrink-0"
            style={{ width: "100%" }}
          >
            <CarouselProjectCard
              image={item.image}
              title={item.title}
              subtitle={item.description}
              nav={item.nav}
            />
          </div>
        ))}
      </div>

      {/* Simple dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === i ? "w-8 bg-[#0033ff]" : "w-2 bg-gray-600"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

