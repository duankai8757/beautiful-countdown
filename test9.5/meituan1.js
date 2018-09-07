function f(N,M) {
    var group=parseInt((N+M)/3);
    if (N>=group&&M>=group){
        return N>M?M:N;
    } else {
        return group
    }
}
var lines = '4 6'.split(" ");
var N=lines[0];
var M=lines[0];
var result=f(N,M);
console.log(result);