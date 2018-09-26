function test(N, M) {
    if (N<M){
        return false
    }
    var t=1;
    var arr=[];
    while (N/t>=M){
        if (N%t===0){
            arr.push(t);
        }
        t++
    }
    return arr;
}
test(30,14)