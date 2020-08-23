const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  mode: 'development',
  // 必填 webpack执⾏构建⼊⼝
  entry: "./src/index.js",
  output: {
    // 将所有依赖的模块合并输出到main.js
    filename: "main_[hash].js",
    // 输出⽂件的存放路径，必须是绝对路径
    path: path.resolve(__dirname, "../dist")
  },
  // devtool: "none",
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 8081
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use:[
          {
            loader:"style-loader",
            options: {
              injectType: "singletonStyleTag" // 将所有的style标签合并成⼀个
            }
          },
          "css-loader"
        ] 
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        //use使⽤⼀个loader可以⽤对象，字符串，两个loader需要⽤数组
        use: {
          loader: "file-loader",
          // options额外的配置，⽐如资源名称
          options: {
            // placeholder 占位符 [name]⽼资源模块的名称
            // [ext]⽼资源模块的后缀
            // https://webpack.js.org/loaders/fileloader#placeholders
            name: "[name]_[hash].[ext]",
            //打包后的存放位置
            outputPath: "images/"
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "Vue Project",
      filename: "index.html",
      template: path.resolve(__dirname, "../index.html")
    }),
    new CleanWebpackPlugin()
  ]
};