const path = require('path');
const fs = require('fs');
const  koaStatic = require('koa-static');
const Router = require('koa-router');
const {conf} = require('./conf/conf');
const {getArticals,getArtical} = require('./controller/article');

exports.setRouter = app =>{
    const router = new Router({
        prefix:'/api'
    });

    router.get('/getArticals',getArticals);
    router.get('/getArtical',getArtical);


    app.use(router.routes());
}