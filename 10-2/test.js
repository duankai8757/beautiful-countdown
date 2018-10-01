/*let arr=[1,2,3,4,55];
console.log(arr.includes(2));*/
/*function a(b) {
    return function (c) {
        return b+c;
    }
}*/
// 箭头函数

let a = b => c => b+c;//高阶函数（大于等于2箭头）
console.log(a(3)(4))