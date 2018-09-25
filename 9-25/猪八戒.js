function solve(d, w, all, N) {
    var  sum=0;
 for (var i=1;i<N;i++){
     sum+=i;
 }
 var val=w*sum;
 var result=parseInt(val-all)/d
 return result

}
var _d=8,_w=25,_all=1109,_N=10
console.log(solve(_d, _w, _all, _N))