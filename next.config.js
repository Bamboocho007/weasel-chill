/** @type {import('next').NextConfig} */

// To prevent certain packages from being included in the client bundle,
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "bcryptjs"],
  },
};

module.exports = nextConfig;
