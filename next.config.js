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

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
