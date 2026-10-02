import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep development files separate so a production build cannot break the live preview.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
