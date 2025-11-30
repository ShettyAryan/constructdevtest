import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optimize images - prioritize mobile sizes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Removed very large sizes
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60, // Cache images for 60 seconds
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Compress output
  compress: true,
  // Reduce bundle size
  experimental: {
    optimizePackageImports: ['lucide-react', 'react-icons', 'react-fast-marquee'],
  },
  // Optimize production builds
  productionBrowserSourceMaps: false, // Disable source maps in production for smaller bundles
  // Optimize output
  output: 'standalone', // Smaller output for better mobile performance
};

export default nextConfig;
