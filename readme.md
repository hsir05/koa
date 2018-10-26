### koa

1. 安装koa

   `npm install supervisor -g`

2. 小demo

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

3. 修改启动命令

`修改package.json中script选项为`
```
"scripts": {
  "start":"node app.js",
}

```

4. node 自动重启监听

**全局安装 supervisor**

`npm install supervisor -g`

**然后运行 supervisor node app.js, app.js 就是你的入口文件**

5. url的处理

URL的处理我们需要用到**koa-router**这个中间件

首先 安装
`npm install koa-router --save`

在app.js里引入

`const router = require('koa-router')();`

是以函数形式引入的

```
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
```

6. post请求处理

因为post请求发送的是一个表单或者`json`，`node`原生提供的`reqest`和`koa`提供的`request`对象，都不支持解析的功能

因此需要引入另一个库，**koa-bodyparser**

`npm install koa-bodyparser --save`

因为中间件执行顺序的关系，所以`koa-bodyparse`必须在router之前注册到app对象上

`app.use(bodyParser());`
