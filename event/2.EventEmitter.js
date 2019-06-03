class EventEmitter{
  constructor(){
    this._events={};//事件
  }
  
  //订阅
  on(eventName,callback){
    if(!this._events[eventName]){
      this._events[eventName]=[callback]
    }else{
      this._events[eventName].push(callback)
    }
  }
  
  //发布
  emit(eventName){
    if(this._events[eventName]){
      this._events[eventName].map(cb=>cb())
    }
  }

  removeListener(eventName,callback){
    if(this._events[eventName]){
      this._events[eventName]=this._events[eventName].filter(cb=>cb!=callback)
    }
  }

  once(eventName,callback){
    //执行callback 然后在解绑fn
    let fn=()=>{
      callback();
      this.removeListener(eventName,fn)
    }
    this.on(eventName,fn);
  }
}
let e=new EventEmitter();

let cry=()=>{console.log(cry)}

// e.on('click',cry);
e.once('click',cry);
// e.removeListener('click',cry)
e.emit('click')
e.emit('click')
e.emit('click')
e.emit('click')
