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
    path: path.resolve(__dirname, 'dist/js'),
    publicPath: '/js/',
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
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        include: [
          path.resolve(__dirname, 'src'),
          path.resolve(__dirname, 'public/static'),
        ],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: (url, resourcePath, context) => {
                const relativePath = path.relative(context, resourcePath);
                const { dir, base, root } = path.parse(relativePath);
                const outputPath = path.format({
                  root,
                  dir: dir.split('\\').slice(1).join('\\'),
                  base,
                });
                return `../${outputPath}`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
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
