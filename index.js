import fs from 'fs'
import path from 'path'
import execa from 'execa'
import { createConfig } from './config.js'
import createIndexTemplate from './createIndexTemplate.js'
import createPackageTemplate from './createPackageTemplate.js'

import question from './question/index.js'

// 输入层
const answer = await question()

// 适配层
const config = createConfig(answer)

console.log(config)

// process 处理

fs.mkdirSync(getRootPath())

// output
fs.writeFileSync(
  path.resolve(getRootPath(), './index.js'),
  createIndexTemplate(config)
)

fs.writeFileSync(
  path.resolve(getRootPath(), './package.json'),
  createPackageTemplate(config)
)

// 安装依赖
// execa('yarn', {
//   cwd: getRootPath(),
//   stdio: [2, 2, 2]
// })

function getRootPath() {
  return `./${config.packageName}`
}
