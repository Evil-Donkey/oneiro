/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oneirosolutions-cms.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.oneirosolutions-cms.com",
        port: "",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/meet-the-team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/",
        permanent: true,
      },
      {
        source: "/seedfunding",
        destination: "/",
        permanent: true,
      },
      {
        source: "/jobs",
        destination: "/",
        permanent: true,
      },
      {
        source: "/dlx",
        destination: "/",
        permanent: true,
      },
      {
        source: "/news",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/how-it-works",
        destination: "/",
        permanent: true,
      },
      {
        source: "/corporatebankinggenz",
        destination: "/",
        permanent: true,
      },
      {
        source: "/newdirectors",
        destination: "/",
        permanent: true,
      },
      {
        source: "/traditional-lending-practices",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
