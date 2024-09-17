'use strict';

// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './src/ts/pages/index.ts',
//     about: './src/ts/pages/about.ts',
//   },
//   output: {
//     filename: 'bundle.[name].js',
//     path: path.resolve(__dirname, './dist'),
//     clean: true,
//     publicPath: '',
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       title: 'Index',
//       filename: 'index.html',
//       template: 'src/templates/index.html',
//       chunks: ['index'],
//     }),
//     new HtmlWebpackPlugin({
//       title: 'about',
//       filename: 'about.html',
//       template: 'src/templates/about.html',
//       chunks: ['about'],
//     }),
//   ]
// };

const path = require('path');
const webpack = require('webpack');
const htmlPlugin = require('./config/html.plugin');
const njkPlugin = require('./config/njk.plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/main.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/',
  },
  plugins: [
    ...njkPlugin,
    ...htmlPlugin,
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [
      // {
      //   test: /\.jsx?$/,
      //   exclude: /node_modules/,
      //   loader: 'babel',
      //   query: {
      //     presets: ['es2015', 'stage-0'],
      //   },
      // },
      {
        test: /\.json?$/,
        loader: 'json',
      },
      {
        test: /\.css$/,
        loader:
          'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      },
    ],
  },
};
