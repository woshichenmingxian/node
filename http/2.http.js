let {createServer}=require('http');
let {readFile,writeFile,createReadStream,createWriteStream}=require('fs');
let port=4000;
createServer((req,res)=>{
  //req是客户端 是可读流

  //res是服务端 是可写流
  res.setHeader('Content-type','text/html;charset=utf-8')
  // readFile('./static/inde.html',(err,data)=>{
  //   res.end(data)
  // })
  console.log('55')
  createReadStream('./static/inde.html').pipe(res)
}).listen(port,()=>{
  console.log('服务启动')
})