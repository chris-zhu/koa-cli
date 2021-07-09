export default () => {
  return {
    type: 'list',
    message: 'use language:',
    name: 'language',
    choices: [
      {
        name: 'Javascript',
        checked: true // 默认选中
      },
      {
        name: 'Typescript'
      }
    ]
  }
}
