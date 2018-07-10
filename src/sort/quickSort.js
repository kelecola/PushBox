let quickSort = function (arr) {
  if (arr.length <= 1) { return arr }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]
  console.log(pivotIndex)
  let [left, right] = [[], []]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), ...[pivot], ...quickSort(right)] || quickSort(left).concat([pivot], quickSort(right))
  // es6和es6以前的版本
}
console.log(quickSort([4, 5, 47, 8, 5, 6, 8, 5, 8889, 444, 54]))
