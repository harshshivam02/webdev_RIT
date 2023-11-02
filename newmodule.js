function dosomething(){
console.log("****** do something -----> module.js *********")
}
function koochtoker(){
    console.log("****** koochtoker -----> module.js *********")
    }
    let arr=[];
    function createfun(element){
        arr.push(element);
        return arr;
    }
    function readfun(element){
        
        return arr;
    }
    function updatefun(index,element){
       arr[index]=element;
       return arr;
    }
    function deletefun(index){
        arr.splice(index,1);
       return arr;
    }
module.exports = {dosomething , koochtoker,createfun,readfun,updatefun,deletefun};
