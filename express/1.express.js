let http=require('http');
let url=require('url');
http.createServer(function(req,res){
  //路由 不同路径返回不同res
  let {pathname,query}=url.parse(req.url,true);

}).listen(4020)