const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: 'development',
  // 必填 webpack执⾏行行构建⼊入⼝口
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    // 将所有依赖的模块合并输出到main.js
    filename: 'main_[hash].js',
    // 输出⽂文件的存放路路径，必须是绝对路路径
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, '../node_modules')
    ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~': path.resolve(__dirname, '../src'),
      '@': path.resolve(__dirname, '../src'),
      'config': path.resolve(__dirname, '../config')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src')] // 指定检查的目录
        // options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
        //   formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
        // }
      },
      {
        test:/\.less$/,
        use:[
          // {
          //   loader:"style-loader",
          //   options: {
          //       injectType: "singletonStyleTag" // 将所有的style标签合并成⼀个
          //   }
          // }, 
          MiniCssExtractPlugin.loader,
          "css-loader", 
          "less-loader",
          "postcss-loader"
        ] 
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new htmlWebpackPlugin({
      title: "vue-spa",
      filename: "index.html",
      template: path.resolve(__dirname, '../index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name]_[contenthash:6].css",
      chunkFilename: "[id].css"
    }),
    // 该配置不成功
    // require("autoprefixer")({
    //   overrideBrowserslist: ["last 2 versions", ">1%"]
    // })
  ]
};
