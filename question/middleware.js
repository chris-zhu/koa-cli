export default () => {
  return {
    type: 'checkbox',
    message: 'choices middleware:',
    name: 'middleware',
    choices: [
      {
        name: 'koa-router',
        checked: true // 默认选中
      },
      {
        name: 'koa-static'
      },
      {
        name: 'koa-params'
      },
      {
        name: 'koa-jwt'
      }
    ]
  }
}
