class NewArray extends Array {
  constructor() {
    super()
    this.history = [[]]
  }
  commit() {
    this.history.push(this.slice())
  }
  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1])
  }
  copy(arr) {
    this.history.push(JSON.parse(JSON.stringify(arr)))
    return this.history
  }
}
let x = new NewArray()
x.splice(1, 0, [1, 2])
console.log(x)

// 这个东西真的是无线开发思维，继承上Array的所有方法，在加上自己常用的方法，或者是把复杂的方法封装好，写成一个function这个太简单了吧，这样子，这个操作很花讲道理很花哨。
