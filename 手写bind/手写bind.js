

/*if(Function.prototype.bind === undefined){
    console.log('您的浏览器不支持bind方法! 开始使用手写bind功能!');*/
    Function.prototype.bind = function(obj){
        var arg1 = [].slice.call(arguments,1);  // 解释一下骚操作，用arg1 保留了 当函数调用bind方法时候传  入的参数，因为arguments是类数组对象，我们借用了数组的slice方法
        var fun = this; // fun —> bind调用者(也就是某个函数)
        return function(){
            fun.apply(obj,arg1.concat([].slice.call(arguments,1)));
            //  好像又引入了apply这种骚东西，是的后面我们再分析。
            //  这里返回了一个闭包函数， 里面可以使用 obj ， arg1 ， fun 这些变量，配合起来实现了bind
            //  感兴趣的朋友可以用ie8测试 bind已经生效了
        }
    }
/*}else{
    console.log('您的浏览器支持bind方法！')
}*/
obj = { name : 'Tom' };
function fun(){
    console.log(this.name);
}
fun.bind(obj)();