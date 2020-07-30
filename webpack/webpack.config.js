 
const path = require("path"); 
const htmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  // 必填 webpack执⾏行行构建⼊入⼝口 (字符串， 数组， 对象)
  entry: "./src/index.js", 
  // entry: {
  //   main: "./src/index.js",
  //   other: "./src/other.js",
  //   test: "./src/test.js",
  // },
  mode: "development",   // none development production
  // mode: "production",
  output: {
    // 将所有依赖的模块合并输出到main.js 
    // filename: "main.js",
    filename: "[name].js", // chunkHash hash contentHash 
    // 输出⽂文件的存放路路径，必须是绝对路路径
    path: path.resolve(__dirname, "./dist")
  },
  devtool:"cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        // 两个loader 有执行顺序 自左往右
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.png$/,
        // use: ["file-loader"]
        use: {
          loader: "file-loader",
          options: {
            // name: "[name]_[hash].[ext]"
            name: "[name].[ext]"
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname,  "./dist"),
    open: true,
    port: 8082,
    proxy: {
      "/api": {
        target: "http://localhost:9092"
      }
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "My App",
      template: "./index.html",
      filename: "index.html"
    }),
    new CleanWebpackPlugin()
  ]
}