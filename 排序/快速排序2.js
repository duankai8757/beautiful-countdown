const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function quickSort (arr, left, right) {
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
}

console.log(arr)
console.time('快速排序耗时')
console.log(quickSort([...arr], 0, arr.length - 1))
console.timeEnd('快速排序耗时')