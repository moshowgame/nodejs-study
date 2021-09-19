var createError = require('http-errors');
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

//托管静态目录方法一 
// app.use('/public',function(req,res) {
//   console.log('./public/'+req.url)
//   fs.readFile('./public/'+req.url , 'utf-8' , function(err,data) {
//     if (err) res.send(err)
//     res.send(data)    
//   })
// })

app.use('/public',express.static(path.join(__dirname, 'public')));

app.listen(80,function () {
  console.log("启动成功， http://localhost/")
})
module.exports = app;
