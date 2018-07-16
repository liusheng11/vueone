var express = require('express');
var router = express.Router();

var connect = require('../common/mongodb')

/* GET home page. */
router.get('/', function (req, res, next) {

  // console.log('news', req.query);

  connect((err, client) => {
    let db = client.db('meipai');//连接库
    let list = db.collection('tiediy');//连接表(集合)
    let id = parseInt(req.query.id);
    console.log(typeof id)
    // let start = req.query.start-0;
    // let count = req.query.count-0;
    // list.find({}).skip(start).limit(count).toArray((err,result)=>{
    list.find({id:id}).toArray((err,result)=>{
      // console.log(result);
      res.send(result);
    });
  })

});

module.exports = router;
