let express=require('express');
let app=express();
app.listen(3003);

//拦截功能 '/user/:id/:name'
app.param('id',function(req,res,next){
  //req,res和下面一样
  req.params.id=`你的学号shi${req.params.id}`;
  next();//继续往下走 或者可以停在res.end()
})
//拦截功能
app.param('name',function(req,res,next){
  //req,res和下面一样
  req.params.name=`你的姓名shi${req.params.name}`;
  next();//继续往下走 或者可以停在res.end()
})


app.get('/user/:id/:name',function(req,res){
  res.setHeader('Content-type','text/plain;charset=utf-8')
  res.end('you have id you are name :jack master'+JSON.stringify(req.params))

})