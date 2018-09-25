const Sequelize = require('sequelize');
const {db} = require('../conf/conf');

exports.readSQL = ({
    ctx,
    where = {},
    table,
    sequeObj = {id:{type:Sequelize.INTEGER,primaryKey:true}}
}) => {

    const slqz = new Sequelize(db.database,db.user,db.password,{
        host:db.host,
        dialect:'mysql',
        port:db.port,
        logging:function (sql) {
            console.log('sql 日志',sql)
        },
        pool: {
            max: 5,  //连接池中最大连接数量
            min:0,  //连接池中最小连接数量
            idle:10000   //如果一个线程 10 秒钟内没有被使用过的话，
        }
    })

    let data = (ctx.query?ctx.query:ctx.result.body);
    const {pageNum,pageSize} = data;
    let page ;
    if (pageNum){
        page = {
            pageNum:parseInt(pageNum,10),
            pageSize:parseInt(pageSize,10)
        }
    }
    const Task = slqz.define(table,sequeObj,{
        timestamps:false,
        freezeTableName:true
    });

    if(page){
        console.log('page ===============' ,page)
        return Task.findAndCountAll({
            offset:(page.pageNum - 1)*page.pageSize,
            limit:page.pageSize,
            where:where,
            order:[['id','DESC']]
        }).then(res => {
            return res;
        }).catch(err => {
            console.log(err)
        })
    }else {
        return Task.findAll({
            where:where,
            order:[['id','DESC']]
        }).then(res => {
            return res;
        }).catch(err => {
            console.log('find err ===  ',err)
        })
    }

}