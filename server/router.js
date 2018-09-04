const path = require('path');
const fs = require('fs');
const  koaStatic = require('koa-static');
const Router = require('koa-router');
const {conf} = require('./conf/conf');
const {article} = require('./controller/article');

exports.setRouter = app =>{
    const router = new Router({
        prefix:conf.apiVersion
    });

    router.get('/getArticles',article.getArticles);
    router.get('/getArticle',article.getArticle);

    app.use(router.routes);
}