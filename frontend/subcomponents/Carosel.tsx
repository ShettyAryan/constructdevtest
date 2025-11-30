/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState, useRef } from "react";
import { motion, PanInfo, useMotionValue, useTransform } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Hook to detect mobile
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  
  return isMobile;
}

function CarouselProjectCard({
  image,
  title,
  subtitle,
  nav,
}: {
  image: string;
  title: string;
  subtitle: string;
  nav?:string;
}) {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#0e0e0e] border border-[#1a1a1a]">
      {/* Top Image */}
      <div className="relative w-full h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          height={500}
          width={600}
          quality={75}
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 420px"
          className="w-full h-full object-fill"
        />

        {/* Floating circular arrow */}
        <div className="absolute group top-4 right-4 bg-[#0033ff] h-14 w-14 rounded-full flex items-center justify-center shadow-[0_0_30px_#0033ff80] hover:bg-white hover:scale-120 transition-all ease-in-out duration-200">
          <Link href={nav ? `${nav}` : "#"} target="_blank">
            <FiArrowUpRight className="text-white text-3xl group-hover:text-[#0033ff] transition-all ease-in-out duration-200" />
          </Link>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-linear-to-t from-[#0e0e0e] to-transparent" />
      </div>

      {/* Text Section */}
      <div className="py-6 px-4">
        <h2 className="text-white text-lg font-semibold">{title}</h2>
        <p className="text-gray-400 text-sm">{subtitle}</p>
      </div>
    </div>
  );
}

export interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
  nav:string;
}

export interface CarouselProps {
  items: CarouselItem[];
  baseWidth?: number; // now treated as max width
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
}

const GAP = 16;
const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const SPRING = {stiffness: 300, damping: 30 };

function Carousel({
  items,
  baseWidth = 420,
  autoplay = true,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
}: CarouselProps) {
  // Disable autoplay and reduce complexity on mobile
  const isMobile = useIsMobile();
  const effectiveAutoplay = isMobile ? false : autoplay;
  const effectiveAutoplayDelay = isMobile ? 5000 : autoplayDelay;
  const containerPadding = 16;
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  // Track width of container for responsiveness - throttled for performance
  useEffect(() => {
    if (!containerRef.current) return;

    let rafId: number | null = null;
    const updateWidth = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (containerRef.current) {
          setContainerWidth(containerRef.current.offsetWidth);
        }
      });
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(containerRef.current);

    window.addEventListener("resize", updateWidth, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const effectiveWidth = containerWidth ?? baseWidth;
  const itemWidth = effectiveWidth - containerPadding * 2;
  const trackOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  // Hover pause
  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return;

    const c = containerRef.current;
    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    c.addEventListener("mouseenter", enter);
    c.addEventListener("mouseleave", leave);

    return () => {
      c.removeEventListener("mouseenter", enter);
      c.removeEventListener("mouseleave", leave);
    };
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (!effectiveAutoplay || (pauseOnHover && isHovered)) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev === items.length - 1 && loop) return prev + 1;
        if (prev === carouselItems.length - 1) return loop ? 0 : prev;
        return prev + 1;
      });
    }, effectiveAutoplayDelay);

    return () => clearInterval(timer);
  }, [
    effectiveAutoplay,
    effectiveAutoplayDelay,
    isHovered,
    loop,
    items.length,
    carouselItems.length,
    pauseOnHover,
  ]);

  // Snap back for loop
  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  // Drag logic
  const dragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex((prev) => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 rounded-md border border-[#1a1a1a] bg-[#1a1a1a]"
      style={{
        width: "100%",
        maxWidth: baseWidth ? `${baseWidth}px` : undefined,
      }}
    >
      {/* TRACK */}
      <motion.div
        className="flex"
        drag={isMobile ? false : "x"} // Disable drag on mobile for better performance
        onDragEnd={isMobile ? undefined : dragEnd}
        animate={{ x: -(currentIndex * trackOffset) }}
        transition={isResetting || isMobile ? { duration: 0 } : SPRING}
        onAnimationComplete={isMobile ? undefined : handleAnimationComplete}
        style={{ gap: `${GAP}px`, x }}
      >
        {carouselItems.map((item, index) => {
          // Always calculate range and rotateY to maintain hook order
          // But only use rotateY on desktop
          const range = [
            -(index + 1) * trackOffset,
            -index * trackOffset,
            -(index - 1) * trackOffset,
          ];

          // Always call useTransform to maintain hook order
          const rotateY = useTransform(x, range, [70, 0, -70]);

          // On mobile, use regular div without 3D transforms
          if (isMobile) {
            return (
              <div
                key={index}
                className="shrink-0"
                style={{ width: itemWidth }}
              >
                <CarouselProjectCard
                  image={item.image}
                  title={item.title}
                  subtitle={item.description}
                  nav={item.nav}
                />
              </div>
            );
          }

          // On desktop, use motion.div with 3D transforms
          return (
            <motion.div
              key={index}
              className="shrink-0"
              style={{
                width: itemWidth,
                rotateY,
              }}
              transition={SPRING}
            >
              <CarouselProjectCard
                image={item.image}
                title={item.title}
                subtitle={item.description}
                nav={item.nav}
              />
            </motion.div>
          );
        })}
      </motion.div>

      {/* PAGINATION */}
      {/* <div className="flex w-full justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentIndex % items.length === i ? "bg-white" : "bg-gray-600/40"
            }`}
            animate={{
              scale: currentIndex % items.length === i ? 1.3 : 1,
            }}
            transition={{ duration: 0.15 }}
          />
        ))}
      </div> */}
    </div>
  );
}
export default React.memo(Carousel, (prevProps, nextProps) => {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});