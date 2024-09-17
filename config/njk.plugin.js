const fs = require('fs');
const { SOURCE_DIR } = require('./constants');
const NunjucksWebpackPlugin = require('nunjucks-webpack-plugin');
/**
 * Simplifies creation of HTML files.
 * https://github.com/jantimon/html-webpack-plugin
 */

module.exports = fs
  .readdirSync(`${SOURCE_DIR}/pages/`)
  .map((templateName) => {
    if (!/\.(njk|nunjucks)$/i.test(templateName)) return false;

    let filename = templateName.split('.')[0];
    filename = filename;

    console.log('NJK', filename);

    return new NunjucksWebpackPlugin({
      inject: 'body',
      templates: [
        {
          from: `${SOURCE_DIR}/pages/${templateName}`,
          to: `${filename}.html`,
        },
      ],
    });
  })
  .filter(Boolean);
