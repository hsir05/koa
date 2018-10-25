### koa

1. 安装koa

   `npm install supervisor -g`

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

**浏览器访问就可以了**

3. node 自动重启监听

**全局安装 supervisor**

`npm install supervisor -g`

**然后运行 supervisor node app.js, app.js 就是你的入口文件**
