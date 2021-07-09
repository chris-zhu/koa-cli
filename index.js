import fs from 'fs'
import path from 'path'
import execa from 'execa'
import chalk from 'chalk'
import { createConfig } from './config.js'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'

import question from './question/index.js'

const answer = await question()
const config = createConfig(answer)

console.log(chalk.blue(`创建项目文件夹:${config.packageName}`))
fs.mkdirSync(getRootPath())

console.log(chalk.blue(`创建 index.js`))
fs.writeFileSync(
  // path.resolve(getRootPath(), './index.js'),
  `${getRootPath()}/index.js`,
  createIndexTemplate(config)
)

console.log(chalk.blue(`创建 package.json`))
fs.writeFileSync(
  // path.resolve(getRootPath(), './package.json'),
  `${getRootPath()}/package.json`,
  createPackageTemplate(config)
)

// 安装依赖
console.log(chalk.blue(`安装依赖`))
execa("yarn", {
  cwd: getRootPath(),
  // stdio: [2, 2, 2],
});

function getRootPath() {
  // return `./${config.packageName}`
  return path.resolve(process.cwd(), config.packageName)
}
