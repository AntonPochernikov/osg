const path = require('path');
const webpack = require('webpack');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'main.js',
    chunkFilename: '[chunkhash].[name].js',
    path: path.resolve(__dirname, 'build/assets'),
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, 'src'),
        ],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      favicon: 'public/static/icons/favicon.ico',
      filename: '../index.html',
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devtool: isDevMode ? 'source-map' : false,
  devServer: {
    noInfo: true,
    stats: 'minimal',
    port: 3005,
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
  },
};
