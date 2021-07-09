export default () => {
  return {
    type: 'input',
    message: 'set package name:',
    name: 'packageName',
    default: 'koa-cli',
    filter(val) {
      return val.replace(/([A-Z])/g,"-$1").toLowerCase() // 驼峰转烤肉串方式
    }
  }
}
