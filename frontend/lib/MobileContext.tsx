"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface MobileContextType {
  isMobile: boolean;
  prefersReducedMotion: boolean;
}

const MobileContext = createContext<MobileContextType>({
  isMobile: false,
  prefersReducedMotion: false,
});

export function MobileProvider({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Set initial values
    setIsMobile(window.innerWidth < 768);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Single resize listener for entire app
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile, prefersReducedMotion }}>
      {children}
    </MobileContext.Provider>
  );
}

export function useMobileContext() {
  return useContext(MobileContext);
}

