const path = require('path');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base.js');

const config = {
  target: 'node',
  mode: 'production',
  entry: './server/index.js',
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve('server-build'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(scss|css)$/, loader: 'ignore-loader' },
    ],
  },
};

module.exports = merge(baseConfig, config);
