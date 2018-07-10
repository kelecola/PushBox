// const arr=[10,20,30,40]
// const doubledOver50=arr.reduce((finalList,num)=>{
//   num =num*2;
//   if(num>50){
//     finalList.push(num)
//   }
//   return finalList
// },[])
// console.log(doubledOver50)
// 实现遍历和筛选
// map是reduce的一种特例

// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

// let cars = ['11', '22', '22', '11', '44']
// let carsObj = cars.reduce(function (obj, item) {
//   obj[item] = obj[item] ? ++obj[item] : 1
//   return obj
// },{})
// console.log(carsObj)

// obj为目标数字,{}是初始值,name当前元素,就想到与是cars里面的所有元素,一个一个遍历,第一个和第二个的操作
let cars = ['11', '22', '22', '11', '44']
let carsObj = cars.reduce(function (obj, item) {
  obj[item] = obj[item] ? ++obj[item] : 1
  // 对有关item的数据进行一系列自己的操作
  console.log('2222', item)
  return obj
}, {})
console.log(carsObj)
// ctrl+f ctrl+h查找替换
