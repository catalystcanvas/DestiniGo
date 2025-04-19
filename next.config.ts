import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enable static export
  trailingSlash: true, // Ensures all paths resolve to folders (important for GitHub Pages)
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  // Optional: basePath if deploying to a subfolder on GitHub Pages
  // basePath: "/your-repo-name",
};

export default nextConfig;

