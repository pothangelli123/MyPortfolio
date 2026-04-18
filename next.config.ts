import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/MyPortfolio",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
