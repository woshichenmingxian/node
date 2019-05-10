function app(){

}
app.middleWare=[];
let index=0
function next(){
  app.middleWare[index++](null,null,next)
}



app.use=function(cb){
  this.middleWare.push(cb);

}

app.use(function(req,res,next){
  console.log(1)
  next()
})
app.use(function(req,res,next){
  console.log(2)
  // next()
})
app.use(function(req,res,next){
  console.log(3)
  next()
})

next()