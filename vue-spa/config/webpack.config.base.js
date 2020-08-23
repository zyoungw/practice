const path = require("path");
module.exports = {
  mode: "development",
  // 必填 webpack执⾏行行构建⼊入⼝口
  entry: path.resolve(__dirname, "../index.js"),
  output: {
    // 将所有依赖的模块合并输出到main.js
    filename: "main_[hash].js",
    // 输出⽂文件的存放路路径，必须是绝对路路径
    path: path.resolve(__dirname, "../dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.js$/,
        loader: "eslint-loader",
        enforce: "pre",
        include: [path.resolve(__dirname, "../src")] // 指定检查的目录
        // options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        //   formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        // }
      }
    ]
  }
};
