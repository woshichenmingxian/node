let express=require('express');
let app=express();
app.listen(3002,function(){
  console.log('>>>>>>>>>>>>>>>>>>>>>>服务启动<<<<<<<<<<<<<<<<<<<<<');
});
//id表示站位符 必须有才匹配 /login/id/name  
app.get('/login/:id/:name',function(req,res){
  console.log(req.query)//url?后的参数
  console.log(req.params)//查询站位符参数{id:xx,name:xxx}
  res.end('you have pay for id'+JSON.stringify(req.params))
})
//id表示站位符 必须有才匹配 /login/id
app.get('/login/:id',function(req,res){
  console.log(req.query)//url?后的参数
  res.end('you have pay for id')
})
app.get('/login',function(req,res){
  console.log(req.query)
  res.end('you are ok')
})

app.all('*',function(req,res){
  console.log(req.query)
  res.end('you are fail')
})


let url='/url/1/2/a';
let url2='/url/:id/:name/a';
let arr=[];
let newReg=url2.replace(/:[^\/]+/g,function(){
  arr.push(arguments[0].slice(1));//[id,name]
  return '([^\/]+)'
})
let reg=new RegExp(newReg);
let newArr=reg.exec(url);
let result={};
arr.forEach((item,index)=>{
  result[item]=newArr[index+1]
})