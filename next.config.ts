import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/comment.php",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
      {
        source: "/content.php",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex",
          },
        ],
      },
    ];
  },

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
