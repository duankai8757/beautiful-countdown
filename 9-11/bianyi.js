
var res = 1;
function search(m){
    if (m == null || m[0] == null) {
        return 0;
    }
    var N = m.length;
    var M = m[0].length;

    infect(m , curry,currx, N, M);
    return res;
}
function infect( m,  i,  j,  N,  M) {
    if (i < 0 || i >= N || j < 0 || j >= M || m[i][j] !== '.') {
        return;
    }
    res++;
    m[i][j] = 2;
    infect(m, i + 1, j, N, M);
    infect(m, i - 1, j, N, M);
    infect(m, i, j + 1, N, M);
    infect(m, i, j - 1, N, M);
}
var n=parseInt()readInt() //N行
var m=readInt() //M列
var arr=[];
var currx=0;
var curry=0;
for(var i=0;i<n;i++){
    arr.push(read_line().split(''))
    var indexof=read_line().split('').indexOf('@');
    if ( indexof!==-1){
        currx=indexof+1;
        curry=i;
    }
}
printsth(search(arr))