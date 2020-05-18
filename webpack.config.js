/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const resolve = {
  extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  alias: {
    Components: path.resolve(__dirname, 'src/components'),
    Actions: path.resolve(__dirname, 'src/actions'),
    Constants: path.resolve(__dirname, 'src/constants'),
    Utils: path.resolve(__dirname, 'src/utils'),
    Selectors: path.resolve(__dirname, 'src/selectors'),
    Reducers: path.resolve(__dirname, 'src/reducers'),
    Src: path.resolve(__dirname, 'src/'),
  },
};

const modules = {
  rules: [
    {
      test: /\.(ts|js)x?$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    },
    {
      test: /\.json$/,
      use: 'json',
    },
  ],
};

const serverConfig = {
  name: 'server',
  entry: {
    app: './src/server.tsx',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: modules,
  resolve,
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].node.js',
    publicPath: '/dist/',
  },
  plugins: [
    new LoadablePlugin({ filename: 'stats.server.json', writeToDisk: true }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

const clientConfig = {
  name: 'client',
  entry: {
    app: './src/client.tsx',
  },
  module: modules,
  resolve,
  output: {
    path: `${__dirname}/dist/`,
    filename: '[name].web.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/dist/',
  },
  plugins: [
    new LoadablePlugin({ filename: 'stats.client.json', writeToDisk: true }),
    //  new BundleAnalyzerPlugin(),
  ],
};

module.exports = [clientConfig, serverConfig];
