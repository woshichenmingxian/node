let express=require('express');
let router=express.Router();
let path=require('path');

router.post('/ejs',function(req,res){
  console.log({...req.body})
  res.render(path.join(__dirname,'../static/result.html'),{name:'mix',firstname:'chen',...req.body,arr:[1,2.3,2,4,5,6],html:"<h2>这是h2<h2>"});//不是绝对路径的只能在views文件夹中的文件要更换只能通过app.set() 绝对路径下会指定模板路径 app.set无效
})

module.exports=router;