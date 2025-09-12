import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['picsum.photos'],
  },
  // GitHub Pages deployment configuration
  basePath: process.env.NODE_ENV === 'production' ? '/patcharapon-san.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/patcharapon-san.github.io/' : '',
};

export default nextConfig;