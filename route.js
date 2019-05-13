let app=require('express')();
app.listen(3000,function(){
  console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>3000端口请用<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
})

let bodyParser=require('body-parser');//解析body参数 

let user=require('./route/user');//用户

let article=require('./route/article');//文章

let ejs=require('./route/ejs');//服务器渲染ejs

// function bodyParser(){
//   return function(req,res,next){
//     let str='';
//     req.on('data',function(chunk){
//       str+=chunk
//     })
//     req.on('end',function(chunk){
//       req.body=require('querystring').parse(str);
//       next()
//     })
//   }
// }

// app.use(bodyParser());

app.use(bodyParser.urlencoded({extended:false}));///解析body参数 表单格式

app.use(bodyParser.json());///解析body参数 json

app.engine('html',require('ejs').__express);//页面所有render的方法中的html，用ejs渲染

// //更改模板路径 之前的文件夹叫做static,现在的文件夹veiws
// app.set('static','views');

//匹配默认的模板后缀名字
// app.set('static engine','html');

app.use('/user',user);

app.use('/article',article);

app.use('/ejs',ejs);//服务器渲染ejs

app.all('*',function(req,res){
  res.send('主页')
})