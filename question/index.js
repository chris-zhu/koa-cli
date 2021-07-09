import inquirer from 'inquirer' //用户交互输入
import packageName from './packageName.js'
import middleware from './middleware.js'
import port from './port.js'
import language from './language.js'

const promptList = [language(), packageName(), middleware(), port()]

export default async () => {
  return await inquirer.prompt(promptList)
}
