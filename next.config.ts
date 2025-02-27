/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: "/tasbeeh",
      destination: "/tasbeeh/index.html",
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
