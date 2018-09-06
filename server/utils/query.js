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
            min:10,  //连接池中最小连接数量
            idle:10000   //如果一个线程 10 秒钟内没有被使用过的话，
        }
    })
    const Task = slqz.define(table,sequeObj,{
        timestamps:false,
        freezeTableName:true
    });

    return Task.findAll({
        where:where,
        order:[['id','DESC']]
    }).then(res => {
        return res;
    }).catch(err => {
        console.log('find err ===  ',err)
    })
}