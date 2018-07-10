// let data = []
// for (let i = 0; i < 3; i++) {
//   // 闭包
//   data[i] = (function (i) {
//     return function () {
//       console.log(i)
//     }
//   })(i)
// }

// console.log(data[0](), data[1](), data[2]())

// let data2 = []
// for (var i = 0; i < 3; i++) {
//   // 非闭包
//   data2[i] = function () {
//     console.log(i)
//   }
// }

// console.log(data2[0](), data2[1](), data2[2]())

// let num = 12
// function showNum() {
//   console.log(num)
// }
// showNum()

// function showNum() {
//   let num = 12
// }
// console.log(num)
// 真的吐血
// 函数内部可以直接访问外部变量，但在函数外部无法访问函数内部变量
// JavaScript语言特有的“链式作用域(chain scope)”
// 将创建的变量的值始终保持在内存中，以供本地环境使用
// 一般情况下在函数调用完后不再被引用，该函数都会被垃圾回收机制，但是上述代码
// 函数howNum2被myNum引用,而howNum2又依赖于showNum，因此函数shouNum不会被垃圾回收机制回收.

function showNum() {
  let num = 12
  function showNum2() {
    console.log(num)
  };
  return showNum2
}
let myNum = showNum()
myNum()
