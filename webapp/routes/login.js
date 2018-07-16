let express = require('express');

module.exports=(db)=>{
  let router = express.Router();
  // router.get('/',(req,res)=>{
  //   res.render('login.ejs',{});
  // });

  //处理登录
  router.post('/',(req,res)=>{
    //兜库——》拿着前端携带的数据对比->种cookie
    let username=req.body.username;
    let password=req.body.password;
    console.log(username,password)
    db.query(
      `SELECT * FROM users WHERE username="${username}" AND password="${password}"`,
      (err,result)=>{
        if(err) res.send('login error database')
        else {
          if(result.length>0){
            // res.render('success.ejs',{})
            // res.send('登录成功');
            // req.session['user_id']= result[0].ID;//种cookie,保留一份session
            req.session['user_id']= result[0].ID;//种cookie,保留一份session
            
            res.send('1')
          }else{
            res.send('0');
          }
        }
      }
    )
  });

  return router;
}