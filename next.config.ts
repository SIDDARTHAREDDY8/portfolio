import type { NextConfig } from "next";

// Static export for GitHub Pages.
// `output: "export"` tells Next.js to emit a fully static site into ./out
// instead of a Node server. GitHub Pages serves that folder directly.
//
// Notes:
//   • headers() / rewrites() / middleware are server features and cannot be
//     used with static export — removed here.
//   • images.unoptimized disables the built-in Image Optimisation API (which
//     needs a server), so images are emitted as plain <img> elements.
//   • trailingSlash ensures every route gets its own index.html so GitHub
//     Pages can serve paths without redirect loops.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
