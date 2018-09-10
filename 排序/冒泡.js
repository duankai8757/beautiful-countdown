const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function bubbleSort (arr) {
  let count = 0
  console.time('改进前耗时')
  for (let index = 0; index < arr.length; index++) {
    for (let j = 0; j < arr.length - index - 1; j++) {
      count++
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  console.timeEnd('改进前耗时')
  console.log('计算次数', count)
  return arr
}

function bubbleSort2 (arr) {
  let count = 0
  console.time('改进后冒泡排序耗时')
  let i = arr.length - 1 // 初始时,最后位置保持不变
  while (i > 0) {
    let pos = 0 // 每趟开始时,无记录交换
    for (let j = 0; j < i; j++) {
      count++
      if (arr[j] > arr[j + 1]) {
        pos = j // 记录交换的位置
        let tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
    i = pos // 为下一趟排序作准备
  }
  console.log('计算次数', count)
  console.timeEnd('改进后冒泡排序耗时')
  return arr
}

console.log(arr)
console.log(bubbleSort([...arr]))
console.log(bubbleSort2([...arr]))
