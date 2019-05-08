//发布订阅
let EventEmitter =require('events');
let {inherits}=require('util');

function Girl(){

}
inherits(Girl,EventEmitter);//继承公有属性
let girl=new Girl();

girl.once('wei',function(param){//订阅
  console.log('mei')
})
girl.on('wei',function(param){//订阅
  console.log('hh',param)
})
girl.emit('wei','我');//发布
girl.emit('wei','我');//发布