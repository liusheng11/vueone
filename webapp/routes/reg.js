let express = require('express');

module.exports=(db)=>{
  let router = express.Router();
  
  
  router.post('/',(req,res)=>{
    //兜库——》拿着前端携带的数据对比
    let username=req.body.username;
    let password=req.body.password;
    db.query(
      `SELECT * FROM users WHERE username="${username}"`,
      (err,result)=>{
        if(err) res.send('2')
        else {          
          if(result.length>0){
            res.send('0')
          }else{
            //写库
            db.query(
              `INSERT INTO users (username,password) VALUES("${username}","${password}")`,
              (err,result)=>{
                if(!err){
                  res.send('1')
                }
              }
            )
          }
        }
      }
    )
  })
  
  return router;
}