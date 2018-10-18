function fbnq(n) {
    // console.log(n)
    var arr=[1,1];
    if (n===1){
        return [1]
    }
    if (n===2){
        return arr
    }
    else {
        for (let i=2;i<n;i++){
            arr.push(arr[i-2]+arr[i-1])
        }
    }
   return arr
}
function Fibonacci(n)
{
   var g=1,f=0;
   while (n-->0){
       g=g+f;
       f=g-f
   }
   return f

}

console.log(fbnq(10))
console.log(Fibonacci(10))
