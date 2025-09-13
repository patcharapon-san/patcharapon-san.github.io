import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
    domains: ['picsum.photos'],
  },
  basePath: '', // or '/patcharapon-san.github.io' for project page
  assetPrefix: '', // or '/patcharapon-san.github.io/' for project page
};

export default nextConfig;
