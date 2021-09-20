const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
  images: {
    domains: ["media.graphcms.com"],
  },
};

module.exports = withPlugins(
  [
    optimizedImages,
    {
      overwriteImageLoaderPaths: require.resolve.paths("")[0],
    },
  ],
  nextConfig,
  { target: "serverless" }
);
