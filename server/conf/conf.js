exports.conf = {
    host:'127.0.0.1',
    port:5000,
    appVersion:'/api',
    uploadSuffix:['.jpg','png','.gif','jpeg'],
    limitTime:1000
};

exports.db = {
    user:'root',
    password:'root',
    host:'127.0.0.1',
    port:3306,
    database:'blog'
}