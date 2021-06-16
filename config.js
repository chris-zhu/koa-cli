export function createConfig(answer) {
  const hasMiddware = (name) => answer.middleware.includes(name)

  return {
    ...answer,
    middleware: {
      static: hasMiddware('koa-static'),
      router: hasMiddware('koa-router')
    }
  }
}
