var express = require('express');
var router = express.Router();

/* by zhengkai.blog.csdn.net - 静态路由托管 */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'node.js+art-template',blog: 'zhengkai.blog.csdn.net' });
});

module.exports = router;
