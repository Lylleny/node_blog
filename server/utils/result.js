

exports.result = (ctx,data)=>{
    ctx.response.type = 'json';
    ctx.response.body = Object.assign({
        code:200,
        msg:'成功',
        status:1
    },data);
}


exports.error = (ctx,{msg = '服务器异常',code = 500,err} )=> {
    try {
        err = JSON.stringify(err);
    }catch (e){
        err = '未知错误'
    }
    ctx.response.type = 'json';
    ctx.response.body = {
        code,
        msg:msg,
        status:0
    }
}