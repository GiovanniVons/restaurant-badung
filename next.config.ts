import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.110.143"],
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/menu.html", destination: "/menu", permanent: true },
      { source: "/menu.php", destination: "/menu", permanent: true },
      { source: "/about", destination: "/ons-verhaal", permanent: true },
      { source: "/over-ons", destination: "/ons-verhaal", permanent: true },
      { source: "/contact", destination: "/reserveren", permanent: true },
      { source: "/contact.html", destination: "/reserveren", permanent: true },
      { source: "/afhalen", destination: "/menu", permanent: true },
      { source: "/takeaway", destination: "/menu", permanent: true },
      { source: "/afhaalmenu", destination: "/menu", permanent: true },
      { source: "/afhaalmenu-2", destination: "/menu", permanent: true },
      { source: "/maandmenu", destination: "/menu", permanent: true },
      { source: "/maandmenu-2", destination: "/menu", permanent: true },
    ];
  },
};

export default nextConfig;
