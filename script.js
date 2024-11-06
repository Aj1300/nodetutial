const EventEmitter=require("events");
const emitter=new EventEmitter();
emitter.on(`${message}`,(data)=>{
    console.log(data)
});
emitter.on(`${logout}`,(data)=>{
    console.log(data)
});
emitter.emit(message="User logged in");
emitter.emit(logout="User logged out");