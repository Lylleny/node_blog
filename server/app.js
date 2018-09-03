
const Koa = require('koa');
const app = new Koa();

app.use(async (ctx)=>{
ctx.body = 'hello koa2'
})


console.log('node demo is coming');
app.listen(3001)
