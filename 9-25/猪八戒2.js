function test(arr,n,m){
    // var arr2=JSON.parse(JSON.stringify(arr));
    var arr2=arr.slice();
    arr.sort(function (a,b) {
        return a-b;
    });
    console.log(arr)
    console.log(arr2)
}
var arr=[1,2,2,3];
test(arr,4,1);