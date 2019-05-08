let path=require('path');
// join('./a','./b') 拼路径 a/b
// path.join(__dirname,'./a','./b') __dirname从当前目录下
// path.resolve('./a','./b') 从当前目录下
// path.resolve('/a','./b') 相对/a/b
//path.delimiter 环境变量分隔符
// console.log(path.join(__dirname,'/a','./b'))
// console.log(path.resolve('/a','./b'))
//查看系统分隔符
console.log(path.win32.delimiter)
console.log(path.sep)
console.log(path.posix.sep)//linux

//流基于事件的
