/*function test(n) {
    var i,a, c = 0;
    var regex=/1/g;
    var c=0;
    for (i = 1; i <= n; i++) {
       a=i.toString();
        var result = a.match(regex );
        c += !result ? 0 : result.length;
    }
    return c
}*/
function test(n) {
    var count = 0;
    var factor = 1;
    var lower = 0;
    var higher = 0;
    var curr = 0;
    while (n / factor != 0) {
        lower = n - n / factor * factor;//求得低位
        curr = (n / factor) % 10;//求当前位
        higher = n / (factor * 10);//求高位
        switch (curr) {
            case 0:
                count += higher * factor;
                break;
            case 1:
                count += higher * factor + lower + 1;
                break;
            default:
                count += (higher + 1) * factor;
        }
        factor *= 10;
    }

    return count;

}

console.log(test(37685531))