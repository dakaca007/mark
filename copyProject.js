// npm install fs-extra -g
const fs = require("fs-extra");

async function copyFiles(srcPath, destPath) {
  await fs.copy(srcPath, destPath, {
    filter: (src) => {
      return (
        !src.includes("node_modules") &&
        !src.includes(".git") &&
        !src.includes(".vscode") &&
        !src.includes(".gitignore") &&
        !src.includes("/huasen-compose/docker-compose.yml") &&
        !src.includes("/huasen-compose/huasen-server/config.js")
      );
    },
  });
}

module.exports = {
  copyFiles,
};
