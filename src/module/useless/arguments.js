// 函数内部，有两个特殊的对象：argument&this
// arguments的主要功能是保存函数参数
// 这个对象还有一个名为callee的属性，该属性是一个指针,指向拥有这个arguments
// 对象的函数
function factorial(num) {
  if (num <= 1) {
    return 1
  } else {
    // return num * factorial(num - 1)
    // return num * arguments.callee(num - 1)
    // 这个arguments.callee被放弃了，感觉是说有潜在的安全性问题
    // arguments是一个很昂贵的操作,是一个很大的对象，每次递归调用的时候都需要重新创建。影响浏览器的性能还会影响闭包
  }
}
console.log(factorial(5))

// function show(n) {
//   var arr = []
//   return (function () {
//     arr.unshift(n)
//     n--
//     if (n !== 0) {
//       arguments.callee()
//     }
//     return arr
//   })()
// }

function show(n) {
  var arr = []
  return (function fn() {
    arr.unshift(n)
    n--
    if (n !== 0) {
      fn()
    }
    return arr
  })()
}
show(5) // [1,2,3,4,5]
// 给内部函数去个名字就好了
