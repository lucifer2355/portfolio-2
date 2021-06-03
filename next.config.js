const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

module.exports = withPlugins(
  [
    optimizedImages,
    {
      overwriteImageLoaderPaths: require.resolve.paths("")[0],
    },
  ],
  { target: "serverless" }
);
