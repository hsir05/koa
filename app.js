const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    console.log(ctx.url);
    await next()
    ctx.response.type = 'text/html';
    ctx.response.body = `<p> 测试一段文字 <p>`
});

app.listen(3000)
console.log('app started at port 3000');
