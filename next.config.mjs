/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/our-services",
        destination: "/solutions",
        permanent: true,
      },
      {
        source: "/shopify-development",
        destination: "/solutions/shopify-engineering",
        permanent: true,
      },
      {
        source: "/custom-software-development",
        destination: "/solutions/custom-software",
        permanent: true,
      },
      {
        source: "/blueticks",
        destination: "/products/blueticks",
        permanent: true,
      },
    ];
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rftechnologies.com.pk",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "pexels.com",
      },
    ],
  },
};

export default nextConfig;
