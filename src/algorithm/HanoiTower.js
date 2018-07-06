function hanoi(n, towerA, towerB, towerC) {
  if (n === 1) {
    console.log('move sheet', n, 'form', towerA, 'to', towerC)
  } else {
    hanoi(n - 1, towerA, towerC, towerB)
    console.log('move sheet', n, 'form', towerA, 'to', towerC)
    hanoi(n - 1, towerB, towerA, towerC)
  }
}
let [towerA, towerB, towerC] = ['a', 'b', 'c']
hanoi(4, towerA, towerB, towerC)
// 太多的sheet电脑容易炸
