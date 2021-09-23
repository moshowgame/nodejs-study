// by zhengkai.blog.csdn.net
// 命令行输入node app1.js运行
// 新增jason数组
let arr = [{id:1,name:'a1',country:'CN'},{id:2,name:'a2',country:'CN'},{id:3,name:'HHH',country:'GB'},{id:4,name:'HHH',country:'HK'}];

// 一 forEach => 遍历数组
arr.forEach((v, i) => {
    console.log(v, ",index:",i);
});

// 二 map => 使用一个数组, 利用某规则映射得到一个新数组
let mapArr = arr.map((v, i) => {
    return v.status='1';
});
console.log("status",mapArr);
// 三 filter => 找出符合条件的元素

// 找出数组中的CN data
let filterArr1 = arr.filter((v, i) => v.country==='CN');
console.log("CN data :",filterArr1);

// 四 every => 判断数组中的所有元素是否都符合某种条件

// 数组中status是否都为1
let result1 = arr.every((v, i) => v.status==='1')
// 所有的结果都为true, 结果为true, 有一个false, 结果为false
console.log(result1)

// 五 some => 判断数组中是否含有符合条件的元素

// 5.1 数组中是否CN data
let result3 = arr.some(v => v.country==='CN')  // 只要有一个true, 结果为true
console.log("contains CN:",result3)

// 5.2 数组中是否US data
let result4 = arr.some(v => v.country==='US')
console.log("contains US",result4)
