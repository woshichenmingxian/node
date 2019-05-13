let express=require('express');
let app=express();

app.listen(3002,function(){
  console.log('>>>>>>>>>>>>>>>>>>>>>>>服务器启动<<<<<<<<<<<<<<<<<<<<<')
})

//redirect重定向跳转
app.get('/',function(req,res){
  res.setHeader('Location','http://www.baidu.com');
  res.statusCode=302;
  res.end();
    // res.redirect('http://www.baidu.com');//statusCode==301 || 302
})