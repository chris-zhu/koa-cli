const app = new Koa();

const router = new Router();
router.get("/", (ctx) => {
  ctx.body = "hello koa-cli";
});

app.use(router.routes());

app.listen(9999, () => {
  console.log("server run localhost:9999");
});
