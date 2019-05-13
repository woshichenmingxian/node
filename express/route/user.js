let express=require('express');
let router=express.Router();//创建一个路由池
let path=require('path');


//router返回也是个函数
router.get('/login',function(req,res){
  res.send('登录')
})

router.get('/reg',function(req,res){
  // res.sendFile(path.resolve('./static/index.html'));//相对路径 哪里读取相对于那个文件路径
  res.sendFile(path.join(__dirname,'../static/index.html'));//绝对路径
  // res.send('注册')
})

module.exports=router;