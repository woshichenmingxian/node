let express=require('express');
let app =express();
app.listen(3002);

//原始：不能直返对象 express:res.json()可以直接返回json
//原始：html需要creatReadStream(path).pipe(res) express:res.sendFile()返回文件
//res.statusCode res.end=>res.sendStatus();
//res.end() res.header();=>res.send();//res.send() 会进行校验识别res.sendStatus()||res.json()


// res.send()实线原理
app.use(function(req,res,next){
  res.mySend=function(data){
    if(typeof data==='object'){
      res.setHeader('Content-type','aplication/json;charset=utf-8');
      res.end(JSON.stringify(data))
    }
    //...
  }
  next()
})



app.get('/json',function(req,res){
  res.json({name:'陈明显',age:19})
})
//文件
app.get('/',function(req,res){
  // res.sendFile(__dirname+'/static/index.html');//需要绝对路径 
  res.sendFile('./static/index.html',{root:__dirname});//注意root不能通过../寻找 需要绝对路径 __dirname当前目录下
  // res.sendFile(require('path').join(__dirname,'..','index.html'));//注这样可以通过../寻找 需要绝对路径 __dirname当前目录下
})
app.get('/code',function(req,res){
  res.sendStatus(200)
})

app.get('/send',function(req,res){
  // res.send({chnmx:'scscsc',id:5555});
  res.send(200)
})