let mongodb = require('mongodb');
let mongoCt = mongodb.MongoClient //创建客户端	对象
//创建连接

//'mongodb://127.0.0.1:27017'
module.exports = (callback) => {
  mongoCt.connect('mongodb://127.0.0.1:27017', callback);
}

