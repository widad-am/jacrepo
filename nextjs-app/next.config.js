/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'jacen.jac.com.cn'],
  },
  sassOptions: {
    includePaths: ['./styles'],
  },
}

module.exports = nextConfig 