# node
## http服务
- let http =require('http');
- http.createServer(function(req,res){
   - let {pathname,query}=require('url').parse(req.url,true);//解析路径和路径所带的参数（json）
   - //读取文件的时候 ，mime根据不同的文件类型设置不同类型的请求头
   - //res.setHeader('Content-type',reuqire('mime').getType(pathname)+';charset=utf-8');//mime要外包安装引入
   - //接口
   - if(pathname==='/addUser'){
     - ...//逻辑代码
     - res.end(xxx)
     - return
  - }
}).listen(3000,fn);//启动端口号为3000的http服务





## req上的属性
- req 为可读流，所有有可写读对的方法事件
- req.on('data',chunk=>{});//chunk为Buffer||String 传送的参数信息
- req.on('end',()=>{});信息接收完毕
- req.params:路径参数/use/:id/:name 查询站位符参数{id:xx,name:xxx}
- req.url:整个路径
- req.path:pathname路径
- req.hearders:请求头
- req.methods:请求的方法
- req.query 获取请求的参数问号后面的参数

## res的属性
- res为可写流，所有有可写流对的方法事件
- res.write();//写入
- res.end();//写入关闭
- res.redirect('xxx');//重定向与xxx 等同于下
   - res.setHeader('Location','http://www.baidu.com');
   - res.statusCode=302;
   - res.end();
- res.setHeader('xxx','xxx');//设置请求头信息 
 - res.setHeader("Access-Control-Allow-Origin",'*');//允许跨域
 ...

## middleWare 中间件
- 中间件的作用
   -处理公共逻辑
   -可以决定是否继续执行
   -开头匹配到就会执行通过next(),继续向下匹配
   -错误中间件,应该在页面最后,app.use(...args) args:四个参数 第一个是错误参数

## res新增的方法
- res.json({});发送json格式数据
- res.sendFile();发送文件 绝对路径 path.join('')||path.resovle("") 例：res.sendFile('./static/index.html',{root:__dirname});//注意root不能通过../寻找 需要绝对路径 __dirname当前目录下
- res.sendStatus();发送状态码
- res.send(); 发送

## 路由拆分
- let express=require('express');
- let router=express().Router();
- router.get('/user',fn);
- app.use('/lo'.router);

## bodyParser
app.use(require(body-parser).urlencoded({extend:false}));//解析表单数据成json格式
app.use(require(body-parser).json();//数据成json格式

## ejs服务器渲染-前后端未分离
app.set('view engine','html');//模板引擎 使用文件为html
app.set('view','static');//文件夹路径变更 旧地址 新地址
app.engine('html',require('ejs').__express);//默认使用模板为ejs文件 设置后使用html
res.render('index',data)||res.render(require('path').join(__dirname,'path'),data);
- ejs用法
   - <%=变量%> 
   - <%-html%> 渲染html标签 
   - <%arr.map((item)=>{%>
      <li><%=item%></li>
     <%})%> 渲染循环
   
## 静态文件中间件
参考staticWare文件
