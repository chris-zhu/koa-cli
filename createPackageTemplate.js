


import ejs from 'ejs'
import fs from 'fs'
import path from 'path'
import prettier from "prettier"

export default (config) => {
  const packageTemplate = fs.readFileSync(path.resolve('./template/package.ejs'))

  const code = ejs.render(packageTemplate.toString(), {
    packageName: config.packageName,
    middleware: config.middleware
  })

  return prettier.format(code, { parser: "json" })

}




