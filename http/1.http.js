// let http=require('http');
let {createServer}=require('http');
let port=3000;
createServer(function(req,res){//监听函数,当请求到来时会执行回调函数
  //req客户端 可读流
  //res服务端 可写流
  console.log('start')
  res.setHeader('Content-type','text/plain;charset=utf8')
  res.write('hello');
  res.write('杀')
  res.end();//调用end后结束响应
}).listen(port,()=>{
  console.log(`服务器已经启动${port}上`)
})