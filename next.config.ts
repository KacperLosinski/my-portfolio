import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio",
  images: {
    unoptimized: true, 
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
