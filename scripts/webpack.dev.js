const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const setupServer = require('./setupServer');
const common = require('./webpack.common.js');

module.exports = merge(common(), {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    inline: true,
    hot: true,
    disableHostCheck: true,
    stats: {
      colors: true,
      assets: false,
      entrypoints: false,
      modules: false,
    },
    overlay: {
      warnings: false,
      errors: true,
    },
    contentBase: path.join(process.cwd(), 'src', 'assets'),
    port: 3000,
    watchContentBase: true,
    host: '0.0.0.0',
    before: setupServer,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      ENV: '\'development\'',
    }),
  ],
});
