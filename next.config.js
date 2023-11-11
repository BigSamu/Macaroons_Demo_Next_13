/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://127.0.0.1:8000/api/:path*"
      }
    ];
  },
};

module.exports = nextConfig;
