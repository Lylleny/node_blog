const {readSQL} = require('../utils/query');
const Sequelize = require('sequelize');
const moment = require('moment');
const result = require('../utils/result');

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
        console.log('能获取 ===== ' + JSON.stringify(res));
        if (res){
            result.result(ctx,{
                data:res
            })
        }else {
            result.error(ctx,{msg:'查询出错'})
        }

    })

};

exports.getArtical = (ctx,next)=>{
    const {id} = ctx.query;

   return readSQL({
        ctx,
        table:'blog_article',
        where:{id},
        sequeObj:{
            id:{type:Sequelize.INTEGER,primaryKey:true},
            title:{type:Sequelize.CHAR},
            url:{type:Sequelize.CHAR},
            pic:{type:Sequelize.CHAR},
            photo:{type:Sequelize.CHAR},
            desc:{type:Sequelize.CHAR},
            date:{type:Sequelize.CHAR},
            author:{type:Sequelize.CHAR},
            content:{type:Sequelize.TEXT('long')},
            data: { type: Sequelize.TEXT('long') },
            like: { type: Sequelize.INTEGER },
            del: { type: Sequelize.INTEGER },
            tags: { type: Sequelize.CHAR }
        }
    }).then(res => {
        console.log('获取的reponse is = \n' + JSON.stringify(res[0]));
        if (res){
            result.result(ctx,{
                data:res[0]
            })
        }else {
            result.error(ctx,{msg:'查询失败'})
        }
    })
}