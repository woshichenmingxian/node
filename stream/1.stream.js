//流:可读可写 边读边写 基于事件
let fs=require('fs');
//highWaterMark 每次能读多少 默认64K 默认不需要更改 读取默认buffer
//需要监听事件 数据到来事件 rs.emit('data',数据)
// 默认非流动模式
//默认data事件不停的触发 直到文件的数据全部读完
let rs=fs.createReadStream('1.txt',{highWaterMark:1});
let dataArr=[];

rs.on('data',function(chunk){
  dataArr.push(chunk)
  rs.pause();//暂停 暂data事件停触发
  setTimeout(function(){
    rs.resume();//恢复data事件触发
  },1000)
})

//读完后触发
rs.on('end',function(chunk){
  let st=Buffer.concat(dataArr).toString()
  console.log(st)
})
//报错
rs.on('err',function(err){
  //文件不存在
})

//on('data') on('end') on('err') fs.resume() fs.pause()