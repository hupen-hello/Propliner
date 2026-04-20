/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'propliners.in',
        pathname: '/**', // Iska matlab propliners.in ki koi bhi image allow ho jayegi
      },
    ],
  },
};

export default nextConfig;