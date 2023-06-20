/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
        domains: ["upload.wikimedia.org"],
      },
}

module.exports = nextConfig
