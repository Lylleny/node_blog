
const Koa = require('koa');
const helmet = require('koa-helmet');
const cors = require('koa-cors');
const responseTime = require('koa-response-time');
const body = require('koa-body');
const logger = require('koa-logger');
const session = require('koa-session');
const {conf} = require('./conf/conf');

const app = new Koa();


app.use(logger);
app.use(responseTime);
app.use(helmet);
app.use(cors());
app.use(body({multiline:true}));
app.use(
    session({
        key:'nodedemo',
        maxAge:1000*60*60*8,
        overwrite:true,
        httpOnly:true,
        signed:true,
        rolling:false  //强制为每个用户设置session
    })
)

app.use(async (ctx)=>{
ctx.body = 'hello koa2'
})

app.listen(conf.port,function () {
    console.log('服务器启动，监听 port : '  + conf.host + conf.port )
})
