import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "jiylvu0kfx.ufs.sh",
      },
      
    ],
  },
};

export default nextConfig;
