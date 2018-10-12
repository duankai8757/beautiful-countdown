const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function selectSort (arr) {
  let minIndex
  // let count = 0
  console.time('选择排序')
  for (let i = 0; i < arr.length; i++) {
    minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      // count++
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  // console.log('计算次数', count)
  // console.timeEnd('选择排序')
  return arr
}
// console.log(arr)
console.log(selectSort([...arr]))
