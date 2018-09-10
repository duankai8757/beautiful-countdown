function findmid(arr){
    var result=0;
    arr.sort(function(a,b){
        return a-b;})
    arr.length%2===1?result=arr[(arr.length+1)/2-1]:result=(arr[(arr.length)/2-1]+arr[(arr.length+2)/2-1])/2;
    return result
}
console.log(findmid(arr));
var num=readInt();
var arr1=read_line().split(" ");
function findmid(arr){
    var result=0;
    arr.sort(function(a,b){
        return a-b;})
    arr.length%2===1?result=arr[(arr.length+1)/2-1]:result=(arr[(arr.length)/2-1]+arr[(arr.length+2)/2-1])/2;
    return result
}
printsth(findmid(arr));