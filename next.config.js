/** @type {import('next').NextConfig} */
const repoBasePath = process.env.NEXT_BASE_PATH || ''
const assetPrefix = process.env.NEXT_ASSET_PREFIX || (repoBasePath ? `${repoBasePath}/` : '')

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Configure basePath/assetPrefix for GitHub Pages project sites
  basePath: repoBasePath || undefined,
  assetPrefix: assetPrefix || undefined,
  images: {
    unoptimized: true
  },
  // Ensure 404 page is properly handled in static export
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}

module.exports = {
  output: "export",
  // optional: set assetPrefix / basePath if deploying to subpath
  // assetPrefix: "/your-base-path",
  // basePath: "/your-base-path",
};
