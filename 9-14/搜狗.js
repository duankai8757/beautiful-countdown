
var uniqarr = []

function uniq(arr) {
    if (arr instanceof Array) {
        for (var i = 0; i < n; i++) {
            if (uniqarr.indexOf(arr[i]) === -1) {
                uniqarr.push(arr[i])
            }
        }
        uniqarr.sort(function (a, b) {
            return a - b
        })
    }

}

function pipei(arr) {
    if (arr.length < m) {
        return false
    }
    arr.sort(function (a, b) {
        return a - b
    })
    console.log(arr)
    for (var i = 0; i < m;) {
        if (arr[0] !== uniqarr[0]) {
            return false
            console.log("出")
        }
        for (var j = 0; j < arr.length;) {
            if (arr[j] !== uniqarr[i]) {
                j++
            } else {
                i++;
                j++
            }
        }

    }
    console.log("true")
    return true
}

var n = 10;
var array = [1, 1, 3, 4, 6, 6, 5, 1, 3, 3];
var result = []
/*for(var i=0;i<n;i++){
    array.push(parseInt(readline()))
}*/
uniq(array);
console.log(array);
console.log(uniqarr);
var m = uniqarr.length
for (var i = 0; i < n; i++) {
    for (var j = m; m < n; m++) {
        var newarr = array.slice(i, j)
        console.log("----"+pipei(newarr))
        if (pipei(newarr) === true) {
            console.log('pipei'+pipei(newarr));
            result.push([i + 1, j + 1])
        }

    }
}
//console.log(result[0]-result[0][0]+1+" "+result.length)
console.log(result)

