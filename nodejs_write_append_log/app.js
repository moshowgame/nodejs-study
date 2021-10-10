const fs = require("fs");
// by zhengkai.blog.csdn.net
// fs.appendFile 追加文件内容
// 1, 参数1:表示要向那个文件追加内容,只一个文件的路径
// 2, 参数2:表示要追加的内容
// 3, 可选参数,表示追加文本内容的编码格式,如果省略,默认为utf-8
// 4, 参数4: 表示追加完成之后的回调[有一个参数err,是判断是否追加成功]
//fs.appendFile("./log.txt", new Date().toLocaleString()+" "+JSON.stringify({"CT":"CN","INST":"HBAP","BALANCE":{"ab":111.11,"lb":222.22}})+'\n' , (error)  => { });

//async 异步调用，返回promise，可以使用之后可以使用.then()
async function appendLog(cusid,body){

    //日期处理
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth()+1;
    let day = currentDate.getDate();

    //封装保存内容，'\n'为换行符
    let text = currentDate.toLocaleString()+" "+cusid+" "+JSON.stringify(body)+'\n'

    //输出到单个文件
    //fs.appendFile("./log.txt", currentDate.toLocaleString()+" "+cusid+" "+JSON.stringify(body)+'\n' , (error)  => { });
    //输出到以日期为格式的文件，有效防止单一文件过大
    let logFile = "./log_"+year+month+day+".txt"
    console.log(logFile)
    //存在则追加，不存在则新建
    if (fs.existsSync(logFile)) {
        fs.appendFile(logFile, text , (error)  => { });
    }else{
        console.log('该路径不存在');
        //fs.mkdir(logFile,null,(error)  => { });
        fs.writeFile(logFile, text , (error)  => { });
    }

}

//调用
appendLog("666",{"CT":"CN","INST":"HBAP","BALANCE":123456})
