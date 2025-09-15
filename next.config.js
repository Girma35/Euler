/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure 404 page is properly handled in static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = nextConfig
