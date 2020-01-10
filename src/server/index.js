const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())

// response
app.use(ctx => {
  ctx.body = 'Hello Koa2'
})

app.listen(process.env.PORT || 3000)