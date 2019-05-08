//300k 读64K 5次 读取第一次就开始写 只能写16k 暂停读取，当drain后再恢复读取
let fs=require('fs');
function pipe(source,target){
  let rs=fs.createReadStream(source,{highWaterMark:4});
  let ws=fs.createWriteStream(target,{highWaterMark:1});
  rs.on('data',function(chunk){
    //写流带宽占满
    if(ws.write(chunk)===false){
      //暂停读取
      rs.pause();
    }
  })
  //当前写入内容写完带宽清空
  ws.on('drain',function(){
    console.log('基础')
    //开启读取
    rs.resume()
  })
  //读完关闭强制快速写流
  rs.on('end',function(){
    ws.end()
  })

  
}
function pipe2(source,target){
  let rs=fs.createReadStream(source,{highWaterMark:4});
  let ws=fs.createWriteStream(target,{highWaterMark:1});
  rs.pipe(ws);//可读流pipe：可写流
}

pipe('./1.txt','4.txt')
pipe2('./1.txt','5.txt')