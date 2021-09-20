const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test');
//mongodb就是你不需要去创建任何东西，只要你一开始插入数据，数据库、集合等全部自动创建

//官方测试文档之喵
const Cat = mongoose.model('Cat', { name: String });
const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

//我们的测试文档之用户
const User = mongoose.model('user_info', { username: String , blog: String });
const myUser = new User({ username: 'moshow' , blog: 'https://blog.csdn.net/moshowgame'});
myUser.save().then(() => console.log('aoaoao'));

//查询
User.findOne({ 'username': 'moshow' }, 'username blog', function (err, doc) {
    // Prints "Space Ghost is a talk show host".
    console.log('%s %s ', doc.username, doc.blog);
});
