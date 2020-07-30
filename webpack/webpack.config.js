const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  // 必填 webpack执⾏行行构建⼊入⼝口 (字符串， 数组， 对象)
  entry: './src/index.js',
  // entry: {
  //   main: "./src/index.js",
  //   other: "./src/other.js",
  //   test: "./src/test.js",
  // },
  mode: 'development', // none development production
  // mode: "production",
  output: {
    // 将所有依赖的模块合并输出到main.js
    // filename: "main.js",
    filename: '[name].js', // chunkHash hash contentHash
    // 输出⽂文件的存放路路径，必须是绝对路路径
    path: path.resolve(__dirname, './dist'),
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        // 两个loader 有执行顺序 自左往右
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png$/,
        // use: ["file-loader"]
        use: {
          loader: 'file-loader',
          options: {
            // name: "[name]_[hash].[ext]"
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            // 使用什么规则做转换
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    edge: '17',
                    firefox: '60',
                    chrome: '67',
                    safari: '11.1',
                  },
                  corejs: 2, //新版本需要指定核⼼心库版本 useBuiltIns: "usage"//按需注⼊入
                  useBuiltIns: 'usage', //按需注⼊入, babel 7新功能
                },
              ],
            ],
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    open: true,
    hot: true,
    // 强制浏览器不会刷新，哪怕hrm不生效
    hotOnly: true,
    port: 8082,
    proxy: {
      '/api': {
        target: 'http://localhost:9092',
      },
    },
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'My App',
      template: './index.html',
      filename: 'index.html',
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
}
