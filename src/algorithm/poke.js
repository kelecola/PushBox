const POOL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'w', 'W']
const TYPE = ['黑桃', '红心', '梅花', '方片']

function getCards(pools, types, num) {
  // 新建卡组
  // 正常思维新建卡组
  // 代码怎么就这么美妙呢
  const deck = []
  for (let i = 0; i < num; i++) {
    let pool = pools[Math.floor(Math.random() * pools.length)]
    let type = types[Math.floor(Math.random() * types.length)]
    let poker = pool === 'w' || pool === 'W' ? pool : type + pool
    deck.indexOf(poker) === -1 ? deck.push(poker) : i--
  }
  return deck
}

getCards(POOL, TYPE, 8)
console.log(getCards(POOL, TYPE, 54))
