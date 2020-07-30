 
const path = require("path"); 
module.exports = {
  // 必填 webpack执⾏行行构建⼊入⼝口 
  entry: "./src/index.js", 
  mode: "production",
  output: {
    // 将所有依赖的模块合并输出到main.js 
    filename: "main.js",
    // 输出⽂文件的存放路路径，必须是绝对路路径
    path: path.resolve(__dirname, "./dist")
  } 
}