function test(num) {
    console.time('耗时:')
    var arr=num.toString().split('');
    var falg=true;
    var falg2=false;
    for (var i=0;i<arr.length;i++){
        if ( num%arr[i]!==0){
            falg=false
            if (!falg&&falg2) {
                break
            }
        }else {
            falg2=true
        }
    }

    console.log(falg?"G":!falg&&falg2?"H":!falg2?"S":'')
    console.timeEnd('耗时:')
}
test(72)
test(73)
test(123213)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)
test(1234)