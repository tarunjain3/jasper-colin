import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"
const nextConfig: NextConfig = {
  basePath: isProd ? "/jasper-colin" : "",
  output: "export",
  reactStrictMode: true,
  /* config options here */
};

export default nextConfig;
