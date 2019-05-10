let express=require('express');
let app=express();
app.listen(3001);

app.use(function(req,res,next){
  let startTime=new Date().getTime();//初始时间
  let end=res.end;
  //改写res.end方法
  res.end=function(...args){
    let time=new Date().getTime()-startTime
    res.write('time:'+time);
    end.call(res,...args)
  }
  next()
})


app.get('/login',function(req,res){
  for(let i =0 ;i<100;i++){

  }
  res.end(' login')
})

app.get('/test',function(req,res){
  for(let i =0 ;i<1000000;i++){
    
  }
  res.end(' test')
})