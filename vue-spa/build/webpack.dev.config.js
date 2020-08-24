const baseWebpackConfig = require('./webpack.base.config')
const {merge} = require('webpack-merge')
const path = require('path')
const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "cheap-module-eval-source-map",// 开发环境配置
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    open: true,
    port: 8081
  },
})
module.exports = devWebpackConfig