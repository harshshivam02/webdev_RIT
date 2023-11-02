const http =require('http');
const{createfun,readfun,updatefun,deletefun} =require('./newmodule.js');
const server=http.createServer(function(req,res) {
    console.log(req.method,req.url);
 if(req.url == '/create'&& req.method == 'POST'){
    res.write(JSON.stringify(createfun(10)))
    }
else if(req.url=='/read' && req.method == 'GET')
{
    res.write(JSON.stringify(readfun()))
} 
 else if(req.url=='/update' && req.method == 'PUT'){
    res.write(JSON.stringify(updatefun(0,12)))
}
else if(req.url=='/delete' && req.method == 'DELETE'){
    res.write(JSON.stringify(deletefun(0)))
}
res.end();
})
server.listen(5000,function(){
    console.log("server is running on port 5000!")
});