const fs = require('fs');
const { SOURCE_DIR } = require('./constants');
const HTMLWebpackPlugin = require('html-webpack-plugin');

/**
 * Simplifies creation of HTML files.
 * https://github.com/jantimon/html-webpack-plugin
 */

module.exports = fs
  .readdirSync(`${SOURCE_DIR}/pages/`)
  .map(templateName => {
    if (!/\.(html)$/i.test(templateName)) return false;

    let filename = templateName.split('.')[0];
    filename = filename;

    console.log("HTML", filename);


    return new HTMLWebpackPlugin({
      template: `${SOURCE_DIR}/pages/${templateName}`,
      filename: `${filename}.html`,
      // chunks: ['common', filename],
      inject: 'body',
    });
  })
  .filter(Boolean);
