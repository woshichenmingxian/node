let express=require('express');
let app =express();
app.listen(3001);
app.get('/login',function(req,res){
  console.log(req.query)//req.query获取参数
  console.log(req.url)//req.url整个url包括？后
  console.log(req.path)//req.path获取url不包括？后
  console.log(req.headers)//请求头都是小写
  console.log(req.method)//请求方法 都是大写
  res.setHeader('Content-type','text/plain;charset=utf-8')
  res.end('这个是登录')
})