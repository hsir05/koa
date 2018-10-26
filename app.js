const Koa = require('koa');
// 这个地方返回的是函数
const router = require('koa-router')();
const bodyParse = require('koa-bodyparser');


const app = new Koa();
app.use(bodyParser());

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next()
});

router.get('/home/:name', async (ctx, next) => {
  let name = ctx.params.name
  ctx.response.body = `hello ${name}`
});

router.get('/', async (ctx, next) => {
  ctx.response.body = 'hello 999'
});

app.use(router.routes());

app.listen(3000)
console.log('app started at port 3000');
