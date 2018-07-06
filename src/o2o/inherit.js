// class Point {
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }

//   toString() {
//     return '(' + this.x + ', ' + this.y + ')'
//   }
// }

// function Point(x, y) {
//   this.x = x
//   this.y = y
// }

// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')'
// }

// let p = new Point(1, 2)
// console.log(p)

// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal'
  // 实例方法
  this.sleep = function() {
    console.log(this.name + '正在睡觉！')
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food)
}

// function Cat() {
// }
// Cat.prototype = new Animal()
// Cat.prototype.name = 'cat'

// 这种方法我用起来比较喜欢，跟处理data一样的感觉，但是这个是不行的
// function Cat(name) {
//   Animal.call(this)
//   this.name = name || 'Tom'
// }

function Cat(name) {
  Animal.call(this)
  this.name = name || 'Tom'
}
Cat.prototype = new Animal()

// function Cat(name) {
//   Animal.call(this)
//   this.name = name || 'Tom'
// }
// (function() {
//   // 创建一个没有实例方法的类
//   var Super = function() {}
//   Super.prototype = Animal.prototype
//   Cat.prototype = new Super()
// })()

let cat = new Cat('')
console.log(cat)
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
