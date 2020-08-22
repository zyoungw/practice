const path = require("path");
module.exports = {
  // 必填 webpack执⾏构建⼊⼝
  entry: "../src/index.js",
  output: {
  // 将所有依赖的模块合并输出到main.js
        filename: "../main.js",
  // 输出⽂件的存放路径，必须是绝对路径
  path: path.resolve(__dirname, "./dist")
 }
};