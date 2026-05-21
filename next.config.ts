import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "thenerdishmic.com",
          },
        ],
        destination: "https://www.thenerdishmic.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
