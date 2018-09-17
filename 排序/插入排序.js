const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function insertSort (arr) {
  let count = 0
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > key) {
      count++
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  console.log('计算次数', count)
  console.timeEnd('插入排序')
  return arr
}

console.log(arr)
console.log(typeof [...arr])
console.log([...arr] instanceof Array)
console.log([...arr].constructor)
console.log("===============")
console.log([...arr].hasOwnProperty(toString))
console.log(arr.constructor)
console.log(Object.prototype)
console.log(Object.prototype.toString.call([...arr]))
console.log(insertSort([...arr]))
