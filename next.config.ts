import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.replocdn.com",
        port: "",
        pathname: "/projects/**",
      },
      {
        protocol: "https",
        hostname: "soundseam-origin.s3.us-east-2.amazonaws.com",
        port: "",
        pathname: "/misc/**",
      },
      {
        protocol: "https",
        hostname: "sonix.audio",
        port: "",
        pathname: "/cdn/shop/files/**",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
