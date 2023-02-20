/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/family-law.html',
        destination: '/family-law',
        permanent: true,
      },
      {
        source: '/legal-disclaimer.html',
        destination: '/legal-disclaimer',
        permanent: true,
      },
      {
        source: '/media.html',
        destination: '/media',
        permanent: true,
      },
      {
        source: '/personal-injury.html',
        destination: '/personal-injury',
        permanent: true,
      },
      {
        source: '/probate.html',
        destination: '/probate',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
