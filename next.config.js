/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  async redirects() {
    return [
      // Renamed 2026-10-02: guide is now "BESS Project Manager". Keep old inbound links/SEO alive.
      {
        source: '/bess-project-lifecycle',
        destination: '/bess-project-manager',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
