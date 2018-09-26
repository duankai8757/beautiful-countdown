function livedates(arr,n,m) {
    if (m<n){
        return 0
    }
    else if (m===n){
        return 1
    } else {
        var maxdays=Math.floor(m/n);
        for (var i=0;i<maxdays;i++){
            var falg=0;
            for (var i in arr) {
                if ( arr[i]>=maxdays){
                    falg++
                }
                while (arr[i]-maxdays>=maxdays){
                    falg++;
                    arr[i]=arr[i]-maxdays;
                }
            }
            if (falg>=n){
                return maxdays;
            }else {
                maxdays--;
            }

        }
    }
}
function arrayUnique(target) {
   var result={};
    for (var i = 0, targetLen = target.length; i < targetLen; i++) {
        if (typeof result[target[i]] === 'undefined') {
            result[target[i]]=1;
        }else {
            result[target[i]]++;
        }
    }
    return result;
}
// var line1 = readline().split(" ");
var line1 = '4 10'.split(" ");
var n=parseInt(line1[0]);
var m=parseInt(line1[1]);
// var arr = readline().split(" ");
var arr = '1 5 2 1 1 1 2 5 7 2'.split(" ");
arr.sort(function (a, b) {
    return a-b;
});
var kindsarr=arrayUnique(arr);
console.log(kindsarr)
console.log(livedates(kindsarr,n,m));