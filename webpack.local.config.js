/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const LoadablePlugin = require('@loadable/webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

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

const localConfig = {
  name: 'local',
  entry: {
    app: './src/local.tsx',
  },
  /*   externals: [nodeExternals()], */
  module: modules,
  resolve,
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].local.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/local.html',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  devServer: {
    port: 8080,
    /*   contentBase: path.join(__dirname, 'dist_local'), */
    historyApiFallback: true,
  },
};

module.exports = [localConfig];
