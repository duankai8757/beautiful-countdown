/*@para：处理数组 a;
@para左边界 left;
@para右边界 right
2018-9-7 14:22:56 段凯
*/
function maxSubSum3(a,left,right) {
    if (left == right) {
        if (a[left] > 0) {
            return a[left];
        } else {
            return 0;
        }
    }

    var center = parseInt((left + right) / 2);
    var maxLeftSum = arguments.callee(a, left, center);
    var maxRightSum = arguments.callee(a, center + 1, right);

    var maxLeftBorderSum = 0, leftBorderSum = 0;
    for (var i = center; i >= left; i--) {
        leftBorderSum += a[i];
        if (leftBorderSum > maxLeftBorderSum) {
            maxLeftBorderSum = leftBorderSum;
        }
    }

    var maxRightBorderSum = 0, rightBorderSum = 0;
    for (var i = center + 1; i <= right; i++) {
        rightBorderSum += a[i];
        if (rightBorderSum > maxRightBorderSum) {
            maxRightBorderSum = rightBorderSum;
        }
    }

    var maxBorderSum = maxLeftBorderSum + maxRightBorderSum;
    return maxBorderSum > maxLeftSum ? maxBorderSum > maxRightSum ? maxBorderSum : maxRightSum
        : maxLeftSum > maxRightSum ? maxLeftSum : maxRightSum;
}

var arr=[1, 2, -2, 3, -3, 1, -3, 2, 2, -2, 3, -2, 3, -2];
var result=maxSubSum3(arr,0,arr.length);
console.log(result)

function maxSubSum4(a){
    var maxSum=0,sum=0;
    for(var i=0;i<a.length;i++){
        sum+=a[i];
        if(sum>maxSum){
            maxSum=sum;
        }else if(sum<0){
            sum=0;
        }
    }
    return maxSum;}
var result2=maxSubSum4(arr);
console.log(result2)
