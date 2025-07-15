/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  ...(process.env.NODE_ENV === 'production' ? {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
  } : {}),
};

export default nextConfig; 