// 父类
class Point {
  constructor(x, y, z, type) {
    this.x = x
    this.y = y
    this.z = z
    this.type = type
  }
  toString() {
    return 666
  }
}
// Object.assign(Point, {
//   toValue() {
//     return 777
//   }
// })

class ColorPoint extends Point {
  constructor(x, y, color) {
    // 注意，super虽然代表了父类A的构造函数，但是返回的是子类B的实例，即super内部的this指的是B，因此super()在这里相当于A.prototype.constructor.call(this)。
    super(x, y)
    this.color = color
    this.z = 898
  }
  toString() {
    return this.color + ' ' + super.toString()
  }
}

class One extends Point {
  constructor(question) {
    super(question)
    this.x = 6666
  }
}

class Two extends Point {
  constructor(question) {
    super(question)
    this.y = 6666
  }
}

const createQuestion = question => {
  const { type } = question
  if (type === 1) return new One(question)
  if (type === 2) return new Two(question)
}

let two = new Two()
let cp = new ColorPoint()
console.log(two, createQuestion, cp)
