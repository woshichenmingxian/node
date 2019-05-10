//中间件
let express=require('express');
let app=express();
app.listen(3004);

//中间件第一个功能 可以进行权限判断
//可以进行res req属性的扩充
//中间件要放在执行路径上面
//next中的参数表示错误 会跳过所有的中间直接找到四个参数的中间件
//use第一个参数如何直接是callback默认全部匹配，否则按第一个匹配路径
app.use('/login',function(req,res,next){
  res.header('Content-type','text/plain;charset=utf-8')
  console.log('我要过滤石头')
  req.stone="过滤石头"
  next('cio')
})
app.use(function(req,res,next){
  console.log('我要过滤沙子')
  req.sand="过滤沙子"
  next()
})

app.get('/login',function(req,res){
  res.setHeader('Content-type','text/plain;charset=utf-8')
  res.end(`sand:${req.sand},stone:${req.stone}`)
})
app.get('/test',function(req,res){
  res.setHeader('Content-type','text/plain;charset=utf-8')
  res.end(`sand:${req.sand},stone:${req.stone}`)
})

app.use(function(err,req,res,next){
  console.log(err)
  res.end(`sand:${req.sand},stone:错误`)
})