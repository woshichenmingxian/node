window.onload=()=>{
  //跨域：协议 域名 端口号
  let clock=document.querySelector('#clock');
  function api(){
    let xhr=new XMLHttpRequest();
    xhr.open('get','/clock',true);
    xhr.onload=function(){
      if(this.status===200){
        console.log(xhr)
        document.querySelector('#clock').innerHTML=xhr.response
        
      }
    }
    xhr.send();
  }

  //fetch
  fetch('/clock',{
    method:'get'
  }).then((res)=>{
    return res.json() //接受响应的json对象 res.text()接受响应的string
  }).then((data)=>{
    console.log(data)
    clock.innerHTML=data.time
  })
}