"use client";

import dynamic from "next/dynamic";

// Lazy load BeamsBackground - it's heavy and only needed on desktop
// This must be a client component to use ssr: false
const BeamsBackground = dynamic(
  () => import("@/components/ui/beams-background").then((mod) => ({ default: mod.BeamsBackground })),
  {
    ssr: false, // Don't render on server - it's canvas-based
  }
);

export default function BeamsBackgroundWrapper() {
  return <BeamsBackground />;
}

