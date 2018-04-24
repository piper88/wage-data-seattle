'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

// module.exports = {
//   entry: './path/to/my/entry/file.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'my-first-webpack.bundle.js'
//   }
// };

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  //dev tool allows you to see where the error happened
  devtool: 'eval',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  //a plugin is a software component that adds a specific feature to an existing program
  plugins: [
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags.
    new HTMLPlugin({
      template: `${__dirname}/app/index.html`,
    }),
    // new ExtractTextPlugin('bundle.css'),
  ],
  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: 'babel',
  //     },
  //     {
  //       test: /\.(woff|ttf|svg|eot).*/,
  //       loader: 'url?limit=10000&name=font/[hash].[ext]',
  //     },
  //   ],
  // },
};
