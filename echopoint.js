const EventEmitter=require("events");
const shoutEvent=new EventEmitter();
shoutEvent.on('echoPoint', function(data){
    console.log("Custom event received : ", data);
})

shoutEvent.emit("echoPoint", {message: "Shouting name on echo point"})