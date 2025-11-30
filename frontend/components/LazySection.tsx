"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Lazy loads sections using Intersection Observer
 * Keeps components mounted once loaded to prevent reloading on scroll back
 */
export default function LazySection({
  children,
  fallback = <div className="w-full h-32 bg-[#1a1a1a] rounded-lg" />,
  rootMargin = "300px", // Start loading 300px before entering viewport for smoother experience
  threshold = 0.01, // Lower threshold for earlier loading
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const hasRendered = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasRendered.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRendered.current) {
          // Load component when near viewport - only once
          setShouldRender(true);
          hasRendered.current = true;
          observer.disconnect(); // Disconnect after first load
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div ref={ref}>
      {shouldRender ? (
        // Once loaded, keep component mounted permanently to prevent reloading
        // This ensures smooth scrolling when returning to top
        children
      ) : (
        fallback
      )}
    </div>
  );
}

