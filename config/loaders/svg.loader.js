/**
 * Creats SVG sprite.
 * https://github.com/JetBrains/svg-sprite-loader
 */
// const spriteLoader = {
//   loader: "svg-sprite-loader",
//   options: {},
// };

/**
 * Optimizes svg images with svgo.
 * https://github.com/svg/svgo-loader
 */
// const svgoLoader = {
//   loader: "svgo-loader",
//   options: {},
// };

// const urlLoader = {
//   loader: "url-loader",
//   options: {
//     // encoding: 'utf8',
//     fallback: require.resolve("responsive-loader"),
//   },
// };

// const svgUrlLoader = {
//   loader: "svg-url-loader",
//   options: {},
// };

module.exports = [
  {
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/ // *.svg?url
  },
  {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    use: ['@svgr/webpack']
  }
]
