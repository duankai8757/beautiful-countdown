function quickSort(arr) {
    if (arr.length<=1){
        return arr
    }

    var mid=arr[parseInt((arr.length)/2)];
    arr.splice(parseInt((arr.length)/2),1);
    var  left=[];
    var right=[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<mid){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return [].concat(quickSort(left),mid,quickSort(right))
}
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]
var a=quickSort(arr);
console.log(a)