### koa

1. 安装koa

npm install --save koa

2. 初体验

```
const Koa = require('koa')
const app = new Koa ()

app.use( async (ctx, next) => {
  await next()
  ctx.response.type="text/html"
  ctx.response.body = "测试"
  })

app.listen(3000)  
```

浏览器访问就可以了
