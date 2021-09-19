const express = require('express');
const router = express.Router();


// 模拟首页留言列表数据
var comments= {"comments":[
    {name:"AAA",message:"你用什么编辑器？WebStorem or VSCODE",datetime:"2021-1-1"},
    {name:"BBB",message:"今天天气真好?钓鱼or代码",datetime:"2021-1-1"},
    {name:"Moshow",message:"zhengkai.blog.csdn.net",datetime:"2021-1-1"},
    {name:"DDD",message:"哈与哈哈与哈哈哈的区别",datetime:"2021-1-1"},
    {name:"EEE",message:"王守义十三香还是iphone十三香",datetime:"2021-1-1"}
]}

/* by zhengkai.blog.csdn.net - 静态路由托管 */
router.get('/', function(req, res, next) {
    res.render('index', comments);
});
router.get('/post', function(req, res, next) {
    res.render('post', comments);
});
router.get('/say', function(req, res, next) {
    console.log(req.query)
    console.log(req.url)
    const comment=req.query;
    comment.datetime='2021-10-01';
    comments.comments.unshift(comment);
    //重定向到首页，没有url后缀 localhost
    res.redirect('/');
    //直接渲染首页，有url后缀 localhost/say?xxxx=xxx
    //res.render('index', comments);
});

module.exports = router;
