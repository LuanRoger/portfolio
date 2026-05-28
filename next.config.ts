import { varlockNextConfigPlugin } from "@varlock/nextjs-integration/plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  cacheLife: {
    github: {
      stale: 60 * 60 * 24, // 1 day
      revalidate: 60 * 60 * 24 * 3, // 3 days
      expire: 60 * 60 * 24 * 7, // 7 days
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.scdn.co",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "retroachievements.org",
      },
      {
        protocol: "https",
        hostname: "media2.giphy.com",
      },
    ],
  },
};

export default varlockNextConfigPlugin()(nextConfig);
