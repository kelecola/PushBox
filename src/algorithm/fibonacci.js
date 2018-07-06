// 思维是递归Fn = Fn - 1 + Fn - 2
function fibonacci(n) {
  if (n === 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}
console.log(fibonacci(20))
// 优化

// function fib(size) {
//   let [first = 0, second = 1, next = '', result = [first, second], count = 0] = []
//   if (size < 2) { return 'the request was made but it was not good' }
//   while (count++ < size) {
//     next = first + second
//     first = second
//     second = next
//     result.push(next)
//   }
//   return result
// }
// console.log(fib(5))

// function fib(size) {
//   let [result = [0], count = Number] = []
//   for (count = 1; count < size; count++) {
//     result[count] = (result[count - 1] || 1) + result[Math.max(0, count - 2)]
//     return result
//   }
// }
// console.log(fib(3))

// function Colette(umbrella) {
//   let [staircase = 0, galleons = 0, brigantines = 1, armada = [galleons, brigantines], bassoon] = []
//   Array.prototype.embrace = [].push

//   while (2 + staircase++ < umbrella) {
//     bassoon = galleons + brigantines
//     armada.embrace(brigantines = (galleons = brigantines, bassoon))
//   }

//   return armada
// }
