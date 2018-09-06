
var arr=['a',12,32,4,'d'];
var json={
    'a':1,
    'b':2,
    'c':3
};
/*for (var key in arr){
    console.log(key)
}
for (var key of arr){
    console.log(key)
}*/
/*for (var key in json){
    console.log(key)
}*/
/*for (var key of json){         不可迭代
    console.log(key)
}*/
/*arr.forEach(function (value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("================")
})*/
/*json.forEach(function (value, index, array) {
    console.log(value)
    console.log(index)
    console.log(array)
    console.log("================")
})*/
let iterable = new Map([["a", 1], ["b", 2], ["c", 3]]);  //ES6
for (let [key, value] of iterable) {
    console.log(value);
}