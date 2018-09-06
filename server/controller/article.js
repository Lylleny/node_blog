const {readSQL} = require('../utils/query');
const Sequelize = require('sequelize');
const moment = require('moment');

exports.getArticals = (ctx,next)=>{
    console.log('能获取到数据吗？ ===== ' + JSON.stringify(ctx.request))

    let where = {};
    return readSQL({
        ctx,
        where,
        table:'blog_article',
        sequeObj:{
            id:{type:Sequelize.INTEGER,primaryKey:true},
            owner: { type: Sequelize.CHAR },
            title: { type: Sequelize.CHAR },
            url: { type: Sequelize.CHAR },
            pic: { type: Sequelize.CHAR },
            photo: { type: Sequelize.CHAR },
            desc: { type: Sequelize.CHAR },
            date: { type: Sequelize.CHAR },
            author: { type: Sequelize.CHAR },
            del: { type: Sequelize.INTEGER },
            tags: { type: Sequelize.CHAR }

        }
    }).then(res => {
        console.log('能获取 ===== ' + JSON.stringify(res.rows))
        ctx.response.type = 'json';
        ctx.response.body = Object.assign({
            code: 200,
            data: null,
            msg: '成功'
        }, res);
    })

}