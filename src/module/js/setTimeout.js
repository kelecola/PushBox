setTimeout(function() {
  console.log('hello')
}, 2000)
// =>一般情况这个不去管的话会内存泄漏

let timeoutId = setTimeout(() => {
  console.log('yu')
}, 3000)
console.log(timeoutId)
// clearTimeout(timeoutId)
// console.log(timeoutId)
