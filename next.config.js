/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mcode-sneakers-store.vercel.app",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "mcode-ecommerce-template.vercel.app",
      },
      {
        protocol: "https",
        hostname: "tailwindui.com",
      },
    ],
  },
};

module.exports = nextConfig;
