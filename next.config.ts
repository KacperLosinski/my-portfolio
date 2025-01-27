import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // Jeśli używasz obrazów z zewnętrznych źródeł, dodaj domeny tutaj
    formats: ['image/avif', 'image/webp'], // Obsługiwane formaty obrazów
  },
};

export default nextConfig;

