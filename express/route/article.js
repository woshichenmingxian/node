let express=require('express');
let router=express.Router();//路由池

router.get('/post',function(req,res){
  res.send('发布')
})

router.get('/delete',function(req,res){
  res.send('删除')
})

module.exports=router;