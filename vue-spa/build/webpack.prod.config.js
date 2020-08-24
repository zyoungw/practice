const baseWebpackConfig = require('./webpack.base.config')
const {merge} = require('webpack-merge')
const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: "none"
})
module.exports = devWebpackConfig