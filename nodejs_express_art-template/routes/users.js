var express = require('express');
//import the http
var http = require('https');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({ blog: 'zhengkai.blog.csdn.net' , author : 'Moshow K ZHENG' , git : 'github.com/moshowgame'})
});

/* request github */
router.get('/git',function(req,res,next){
  res.send("Requesting");
  http.get('https://gitee.com/api/v5/users/moshowgame', (res) => {
    console.log(`Got response: ${res}`);
    
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
  res.send("END");
});

module.exports = router;
