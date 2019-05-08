let fs=require('fs');
//可写流默认占用16384=16K 读64k 会切分写入
//write 也是异步 end
let ws=fs.createWriteStream('./2.txt',{highWaterMark:1});
var flag=ws.write(2+'',function(){
  
});//可写流必须是字符串或者Buffer
console.log(flag)
var flag=ws.write(1+'');//可写流必须是字符串或者Buffer
console.log(flag)

//当全部文件写完 触发 一般就开始读取 fs.createReadStream.resume();//继续读
ws.on('drain',function(){
  console.log('commit')
})
// ws.end('吃饱啦');//end后不能再用write 调用后会把所有的write中的内容写入

//300k 读64K 5次 读取第一次就开始写 只能写16k 暂停读取，当drain后再恢复读取