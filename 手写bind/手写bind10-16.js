// if(Function.prototype.bind === undefined){
    Function.prototype.bind=function(obj) {

        var arg1=Array.prototype.slice.call(arguments,1);
        var fun=this

        return function () {
            fun.apply(obj,arg1.concat([].slice.call(arguments,1)))
        }
    }
// }
obj = { name : 'Tom' };
obj2 = { name : 'Tom' };
function fun(){
    console.log(this.name);
}
fun.bind(obj)();