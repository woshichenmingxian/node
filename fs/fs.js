let fs=require('fs');
fs.readFile('./1.js','utf8',function(err,data){
  if(err){
    return err
  }
  let test={...data.json,age:80}
  fs.writeFile('./write001.txt',JSON.stringify(test),function(err,data){

  })
})
function makep(url,cb){
  let urlArr=url.split('/');
  let index=0;
  function make(p){
    fs.stat(p,function(err){
      if(err){
        fs.mkdir(p,function(err){
          if(index<=urlArr.length-1){
            make(urlArr.slice(0,++index+1).join('/'))
          }
          
        })
      }else{
        make(urlArr.slice(0,++index+1).join('/'))
      }
    })
    
  }
  make(urlArr[index])
}
makep('a/b/c/b/s')