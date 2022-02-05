const { merge } = require('webpack-merge');
const { resolve } = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './root/index.tsx',
  output: {
    path: resolve(process.cwd(), 'dist/'),
    filename: '[name].[hash:8].js',
    chunkFilename: '[id].[hash:8].js',
  },
});
