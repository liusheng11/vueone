var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');
var cookieSession = require('cookie-session');
let mysql = require('mysql');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8001","http://localhost:5000","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));

app.use(bodyParser.urlencoded({extended:false}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置cookie-session
let arr=[];
for(var i=0;i<10000;i++){
  arr[i]='asdfsdf'+ Math.random()*10000
}
app.use(cookieSession({
  name:'sess_id',
  keys:arr,
  maxAge:1000*100
}));
// 连接Mysql
let db = mysql.createPool({
  host:'localhost',
  port: 3306,
  user: 'root',
  password: '12345qwert',
  database: 'meipai'
});
// 响应


var tiediyRouter = require('./routes/tiediy');
var tiediy_detailRouter = require('./routes/tiediy_detail');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/tiediy', tiediyRouter);
app.use('/tiediy_detail', tiediy_detailRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login',require('./routes/login')(db));
app.use('/reg',require('./routes/reg')(db));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
