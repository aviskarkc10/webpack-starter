// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  JS: path.resolve(__dirname, 'src'),
  SRC: path.resolve(__dirname, 'src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.JS, '/'),
  output: {
    path: paths.DIST,
    filename: 'app.bundle.js'
  },
  // devServer: {
  //   contentBase: paths.SRC,
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, '/index.html'),
    }),
    new ExtractTextPlugin('style.bundle.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      }
    ],
  },
  // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};