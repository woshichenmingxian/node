let express=require('express');
//应用express模块,express是个函数
let app=express();//express执行后，返回一个http监听函数,也就是http.createServer中的函数
//在此函数上投站一个listen可以监听端口
// require('http').createServer(app).listen(4020);//等价于下
//
// app.listen=function(...args){
//   require('http').createServer(app).listen(...args)
// }
app.listen(4020,function(){
  console.log('express')
})
//路由上至下匹配 匹配到了就return  '/signin'没有后面的参数不需要管 
app.get('/signin',function(req,res){
  res.setHeader('Content-type','text/plain;charset=utf-8')
  res.end('注册')
})
app.post('/signin',function(req,res){
  res.end('登录')
})
//all表示所有的请求方法 *所有路径 需要放到最后
app.all('*',function(req,res){
  res.end('404')
})