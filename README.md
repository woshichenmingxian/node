# node
## node各模块简易学习理解资料与笔记

## req上的属性
、、、
1.req.params:路径参数/use/:id/:name 查询站位符参数{id:xx,name:xxx}
2.req.url:整个路径
3.req.path:pathname路径
4.req.hearders:请求头
5.req.methods:请求的方法
6.req.query 获取请求的参数问号后面的参数
、、、

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


   
