const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function mergeSort (arr) {
  if (arr.length < 2) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge (left, right) {
  let result = []
  console.time('归并排序耗时')
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  while (left.length) {
    result.push(left.shift())
  }

  while (right.length) {
    result.push(right.shift())
  }

  return result
}

console.log(arr)
console.time('归并排序耗时:')
console.log(mergeSort([...arr]))
console.timeEnd('归并排序耗时:')
