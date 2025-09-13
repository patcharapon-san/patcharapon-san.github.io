import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true,
    domains: ['picsum.photos'],
  },
  basePath: '', // or '/patcharapon-san.github.io' for project page
  assetPrefix: '', // or '/patcharapon-san.github.io/' for project page
};

export default nextConfig;
