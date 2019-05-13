let express=require('express');
let app=express();
let fs=require('fs');
app.listen(3001,function(){
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>服务器启动<<<<<<<<<<<<<<<<<<<<<<<<<<<')
})

function static(path){
  return function (req,res,next){
      //获取请求路径 req.path
      let pa=require('path').join(path,req.path);//相对路径
      //文件存不存在？
      fs.stat(pa,function(err,status){
        if(err){
          return next()
        }
        if(status.isFile){
          fs.createReadStream(pa).pipe(res)
        }
      })
  }
}

app.use(static('dist'));//静态文件中间件

// app.get('/index.html',function(req,res){
//   res.sendFile('./dist/index.html',{root:__dirname})
// })

// app.get('/css/index.css',function(req,res){
//   res.sendFile('./dist/css/index.css',{root:__dirname})
// })