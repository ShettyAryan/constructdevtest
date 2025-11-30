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
 * Only renders children when they're about to enter viewport
 */
export default function LazySection({
  children,
  fallback = <div className="w-full h-32 bg-[#1a1a1a] rounded-lg animate-pulse" />,
  rootMargin = "100px", // Start loading 100px before entering viewport
  threshold = 0.1,
}: LazySectionProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [hasRendered, setHasRendered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasRendered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          setHasRendered(true);
          observer.disconnect();
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
  }, [rootMargin, threshold, hasRendered]);

  return (
    <div ref={ref}>
      {shouldRender ? children : fallback}
    </div>
  );
}

