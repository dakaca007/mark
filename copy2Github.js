/*
 * @Autor: huasenjio
 * @Date: 2023-04-15 02:12:10
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-04-15 16:41:33
 * @Description: 拷贝项目文件到Github开源仓库
 */
const { copyFiles } = require("./copyProject.js");

copyFiles(
  "/Users/huasenjio/Documents/iCollections/编程环境/github/huasen-compose",
  "/Users/huasenjio/Documents/iCollections/编程环境/github/huasenjio-compose"
)
  .then(() => console.log("Files copied successfully."))
  .catch((err) => console.error(err));
