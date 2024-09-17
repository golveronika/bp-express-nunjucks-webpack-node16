const { SOURCE_DIR, OUTPUT_DIR } = require('../constants')
const htmlPlugin = require('../plugins/html.plugin.js')
const eslintPlugin = require('../plugins/eslint.plugin.js')
const stylelintPlugin = require('../plugins/stylelint.plugin.js')
const clearTerminal = require('../plugins/clearTerminal.plugin.js')
const javascriptLoader = require('../loaders/javascript.loader.js')
const nunjucksLoader = require('../loaders/nunjucks.loader.js')
const svgLoader = require('../loaders/svg.loader.js')
const CopyPlugin = require('copy-webpack-plugin')

// const OpengraphHtmlWebpackPlugin = require('opengraph-html-webpack-plugin')

const assetsPlugin = new CopyPlugin({
  patterns: [{ from: `${SOURCE_DIR}/assets`, to: `${OUTPUT_DIR}/images` }]
})

module.exports = {
  name: 'webpack-common-config',
  context: SOURCE_DIR,
  entry: {
    common: ['./js/app', './sass/app']
  },
  resolve: {
    extensions: ['.js', '.sass', '.scss', '.png', '.jpg', '.svg'],
    alias: {
      '@': SOURCE_DIR
    }
  },
  stats: { all: false },
  plugins: [clearTerminal, ...htmlPlugin, eslintPlugin, stylelintPlugin, assetsPlugin],
  module: {
    rules: [javascriptLoader, nunjucksLoader, ...svgLoader]
  }
}
