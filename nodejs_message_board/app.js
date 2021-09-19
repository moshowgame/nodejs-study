//加载模块
const http=require('http');
const fs=require('fs');
const url=require('url');
const template=require('art-template');
const path = require('path');
const express = require('express');
const router = express.Router();
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html',require('express-art-template'));

app.use('/public',express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);


//创建监听对象
app.listen(80,function(){
  console.log('zhengkai.blog.csdn.net 项目启动成功 http://localhost')
})



