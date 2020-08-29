const baseWebpackConfig = require('./webpack.base.config')
const webpack = require("webpack");
const {merge} = require('webpack-merge')
const path = require('path')
const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "cheap-module-eval-source-map",// 开发环境配置
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8081,
    // 即便HMR不⽣效，浏览器也不⾃动刷新，就开启hotOnly
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
module.exports = devWebpackConfig