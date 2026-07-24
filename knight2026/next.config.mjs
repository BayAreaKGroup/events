/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages project site — served under /events/knight2026/
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? '/events/knight2026',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

export default nextConfig
