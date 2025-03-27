import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", 
  assetPrefix: "/my-portfolio",
  images: {
    unoptimized: true, 
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  publicRuntimeConfig: {
    basePath: "/my-portfolio",
  },
};

export default nextConfig;
