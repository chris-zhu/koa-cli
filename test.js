const cli = require('cac')()

// cli.option('-t, --type <type>', 'Choose a project type', {
//   default: 'node',
// })
// cli.option('-n, --name [name]', 'Provide your name')

// cli.command('lint [...files]', 'Lint files').option('-f, --file <asd>','test echo file').action((files, options) => {
//   console.log(files, options)
// })
// cli.command('lint:fix <asd> <trr>', 'Lint all files').action((_, options) => {
//   console.log(_, options)
// })

cli
    .command('init', 'Init a koa-cli propject by default')
    .option('-c, --custom', 'Custom by yourself.', {
      default: false
    })
    .action((_, options) => {
      console.log(_)
      console.log(options)
    })

cli.command('use <...modules>', 'Use preset modules').action((modules, options)=>{
  console.log(modules)
  console.log(options)
})

// Display help message when `-h` or `--help` appears
cli.help()
// Display version number when `-v` or `--version` appears
// It's also used in help message
cli.version('0.0.0')

// const parsed = cli.parse()

// console.log(JSON.stringify(parsed, null, 2))

cli.parse()