function f(){
    var cnt=0;
    return function(){ return ++cnt;}
}
var fa=f();//将函数f的的返回值给变量fn
console.log(fa());//1
console.log(fa());//2
console.log(fa());//3
