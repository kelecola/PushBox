// 约瑟夫问题
let players = []
let flag = 0
let game = function (pNum) {
  for (let i = 1; i <= pNum; i++) {
    players.push(i)
  }
  while (players.length > 1) {
    let outPlayerNum = 0
    for (let i = 0; i < players.length; i++) {
      flag++
      if (flag === 3) {
        flag = 0
        console.log('出局:' + players[i - outPlayerNum])
        players.splice(i - outPlayerNum, 1)
        outPlayerNum++
      }
    }
  }
  return players[0]
}
console.log(game(100))
