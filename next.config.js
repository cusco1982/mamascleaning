/** @type {import('next').NextConfig} */
const nextConfig = {


    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'sudsybucketscleaning.com',
          },
          // {
          //   protocol: 'https',
          //   hostname: 'i-teamglobal.com',
          // },
          {
            protocol: 'https',
            hostname: 'steamproinc.com',
          },
          {
            protocol: 'https',
            hostname: 'images.squarespace-cdn.com',
          },
        ],
      },
}

module.exports = nextConfig