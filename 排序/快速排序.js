const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

/*function quickSort (arr, left, right) {
  if (left < right) {
    let pivot = arr[left] // 选出基准
    let centerPoint = left + 1
    for (let j = left + 1; j <= right; j++) {
      if (arr[j] <= pivot) {
        let temp = arr[j]
        arr[j] = arr[centerPoint]
        arr[centerPoint] = temp
        centerPoint++
      }
    }
    let temp = arr[centerPoint - 1]
    arr[centerPoint - 1] = arr[left]
    arr[left] = temp
    quickSort(arr, left, centerPoint - 1)
    quickSort(arr, centerPoint, right)
  }
  return arr
}*/
function quickSort(arr){
    //如果数组<=1,则直接返回
    if(arr.length<=1){return arr;}
    var pivotIndex=Math.floor(arr.length/2);
    //找基准，并把基准从原数组删除
    var pivot=arr.splice(pivotIndex,1)[0];
    //定义左右数组
    var left=[];
    var right=[];

    //比基准小的放在left，比基准大的放在right
    for(var i=0;i<arr.length;i++){
        if(arr[i]<=pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    //递归
    return quickSort(left).concat([pivot],quickSort(right));
}
/*function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, left ,right) {     // 分区操作
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function paritition2(arr, low, high){
    let pivot = arr[low];
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];
        while (low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low
}

function quickSort2(arr, low, high) {
    if (low < high) {
        let pivot = paritition2(arr, low, high);
        quickSort2(arr, low, pivot - 1);
        quickSort2(arr, pivot + 1, high);
    }
    return arr;
}*/

console.log(arr)
console.time('快速排序耗时')
console.log(quickSort([...arr]))
// console.log(quickSort([...arr], 0, arr.length - 1))
console.timeEnd('快速排序耗时')
