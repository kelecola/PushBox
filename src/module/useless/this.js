// let name = 'the window'
// let obj = {
//   name: 'my obj',
//   getNameFunc: function () {
//     return this.name
//     // console.log(this.name)
//   }
// }
// console.log(obj.getNameFunc(), name)

function a() {
  let el = document.getElementById('someElement')
  el.onclick = function () {
    console.log(el.id)
  }
}
console.log(process.memoryUsage(), a)
