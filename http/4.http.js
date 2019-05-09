let {createServer}=require('http');
let {readFile,writeFile,createReadStream,createWriteStream,stat}=require('fs');
let {parse}=require('url');//吧路径解析成对象
let {join}=require('path');
//Content-type
let mime={
  '.js':'application/javascript',
  '.css':'text/css',
  '.html':'text/html'
}
let port=6000;
let directory='./static'
createServer((req,res)=>{
  //req是客户端 是可读流 req请求分别内容设置
  let {pathname,query}=parse(req.url,true);
  //根据不同的路径返回不同的结果
  //如果访问的是/ 显示主页html;访问文件 将文件读取返回；访问文件夹 默认返回index.html 文件不存在显示404
  stat(`./static${pathname}`,(err,stats)=>{
    if(err){
      res.statusCode=404;//找不到
      res.end(`${pathname} not found`)
    }else if(stats.isFile()){
      let extName=pathname.match(/\.\w+$/)[0];
      //不同类型
      res.setHeader('Content-type',mime[extName]+';charset=utf-8');
      //需要写头
      createReadStream(`${directory}${pathname}`).pipe(res)
    }else if(stats.isDirectory()){
      //是文件夹默认查找index.html
      res.setHeader('Content-type','text/html'+';charset=utf-8')
      let p =join(directory+pathname,'./index.html');//相对路径
      createReadStream(p).pipe(res)
      
    }
  })
}).listen(port,()=>{
  console.log('服务启动')
})