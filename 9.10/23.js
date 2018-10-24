/*
function Person(){
    this.sayHello = function() {
        console.log('hello');
    }
}
var p1 = new Person();
var p2 = new Person();
console.log(p1)
console.log(p2)
console.log(p1.sayHello === p2.sayHello)
*/
var a=4;
function outerFun()
{
    //没有var
    console.log(a)
    a =0;
    console.log(a)
}

outerFun();
console.log(a);