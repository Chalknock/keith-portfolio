import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  output: "export",
  images: {
    unoptimized: true,
  },

  basePath: "/keith-portfolio",
  assetPrefix: "/keith-portfolio/",
};

export default nextConfig;
