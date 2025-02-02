import type { NextConfig } from "next";
import widthPlaiceholder from "@plaiceholder/next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables `next export` by default
  images: {
    unoptimized: true, // Needed since Next.js Image Optimization doesn't work in static export
  },
};

export default widthPlaiceholder(nextConfig);
