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

## express 服务
- let express=require('express');
- let app=express();
- app.listen(3000);//启动端口号为3000的http服务
- app.use(function(req,res,next){xxxx//逻辑代码 next()});//中间件所有的请求都会进来
   - 内置函数的next();代码是否往下继续执行；
   - req,res模块内都是一同生效，所有设置的属性 在接口也可读取使用如:res.atrr=1
- app.get('/index',function(req,res){xxxx//逻辑代码});//接口
- app.post('/index',function(req,res){xxxx//逻辑代码});//接口

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
 - express 下
   - res.json({xxx});//返回json
   - res.send(xxx);//会进行判别数字：状态码 ....
   - res.sendFile(path);//传送文件
      - 原始：html需要creatReadStream(path).pipe(res)
   - res.sendStatus(200);//状态码
      - 原始：res.statusCode res.end
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
- app.use(require(body-parser).urlencoded({extend:false}));//解析表单数据成json格式
- app.use(require(body-parser).json();//数据成json格式

## ejs服务器渲染-前后端未分离
- app.set('view engine','html');//模板引擎 使用文件为html
- app.set('view','static');//文件夹路径变更 旧地址 新地址
- app.engine('html',require('ejs').__express);//默认使用模板为ejs文件 设置后使用html
- res.render('index',data)||res.render(require('path').join(__dirname,'path'),data);
- ejs用法
   - <%=变量%> 
   - <%-html%> 渲染html标签 
   - <%arr.map((item)=>{%>
      <li><%=item%></li>
     <%})%> 渲染循环
   
## 静态文件中间件
参考staticWare文件
## 线程
 ### 优点
 - 单线程(一个线程5M内存)、非阻塞IO
 - 节约内存
 - 节约上下文切换时间，多线程不是同一时间执行多个任务，而是非常快速的切换时间片来实线
 - node没锁的问题（单线程），并发资源的处理。java锁：线程访问文件先加锁，完成解锁。
 - 谷歌v8引擎，效率高(编译型和解析型语言)
 ### 缺点
 - 单线程，线程崩了导致服务崩溃。
 - 浏览器UI线程与JS线程共用一个线程
 ### webworker多线程
 - 完全受主线程控制
 - 不能操作DOM
 ### 开辟新线程
 - AJAX
 - setTimeout
 - setInterval
 - event(事件)
 ### 同步与异步
 - 同步：执行之后，调用就不返回
 - 异步：执行之后，调用者不能立刻得到结果
 ### 阻塞和非阻塞
 - 阻塞：调用是指调用结果返回之前，当前线程会被挂起。函数只有在得到结果之后才会返回
 - 非阻塞：指在不能立刻得到结果之前，该函数不会阻塞当前线程，而会立刻返回。

