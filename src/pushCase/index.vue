<template>
  <div class="game__wrapper">
    <table class="game__map">
      <tr v-for="(row) in gameMap"
        :key="row.id">
        <td v-for="(col) in row"
          :key="col.id">
          <div :class="getColor(col)"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { BOX_STATE, PERSON_STATE } from './const.js'
export default {
  created() {
    this.initGameMap()
    this.initPersonPosition()
    this.getColor()
    // 控制盒子的数量
    this.initBoxPosition(5)
    this.test()
  },
  methods: {
    test() {
      this.obj = Object.assign({}, this.gameMap)
      console.log('4545454', this.obj)
    },
    movePerson() {
      switch (event.keyCode) {
        case 37:
          this.person[0]--
          break
        case 38:
          this.person[1]++
          break
        case 39:
          this.person[0]++
          break
        case 40:
          this.person[1]--
          break
      }
    },
    getColor(state) {
      switch (state) {
        case BOX_STATE:
          return 'box'
        case PERSON_STATE:
          return 'person'
        default:
          return 'plain'
      }
    },
    initGameMap() {
      for (let i = 0; i < this.arr.length; i++) {
        const arr = JSON.parse(JSON.stringify(this.arr))
        this.gameMap.push(arr)
      }
    },
    ReFindPostion(x, y, state) {
      const postion = [x, y]
      const length = this.arr.length
      for (let i = 0; i < length; i++) {
        if (i === postion[0]) {
          for (let j = 0; j < length; j++) {
            if (j === postion[1]) {
              this.gameMap[i][j] = state
            }
          }
        }
      }
      return state
    },
    initPersonPosition() {
      ;[this.person[0], this.person[1]] = [
        Math.floor(Math.random() * this.arr.length),
        Math.floor(Math.random() * this.arr.length)
      ]
      this.ReFindPostion(this.person[0], this.person[1], PERSON_STATE)
      this.holder.push(JSON.parse(JSON.stringify(this.person)))
    },
    // 可能会重复地方
    initBoxPosition(boxNum) {
      for (let i = 0; i < boxNum; i++) {
        let box = []
        ;[box[0], box[1]] = [
          Math.floor(Math.random() * this.arr.length),
          Math.floor(Math.random() * this.arr.length)
        ]
        this.ReFindPostion(box[0], box[1], BOX_STATE)
        // 判断不重复
        // 算法有点问题
        if (box !== this.holder[this.holder.length - 1]) {
          this.holder.push(JSON.parse(JSON.stringify(box)))
          this.boxes.push(JSON.parse(JSON.stringify(box)))
        } else {
          boxNum++
        }
      }
    }
  },
  data() {
    return {
      obj: {},
      arr: [0, 0, 0, 0, 0],
      state: Number,
      boxes: [],
      person: [],
      isFailly: false,
      gameMap: [],
      holder: []
    }
  },
  watch: {
    person([x, y]) {
      switch ([x, y]) {
        case x++:
          // 执行右移操作，简单来说右边变成2，自己变成0，想用解构赋值
          // 或者是无法执行
          // 或者是右边变成2，自己变成0，在右边变成1
          break
        case x--:
          // 执行左移操作
          break
        case y++:
          // 执行上移操作
          break
        case y--:
          // 执行下移操作
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.game__wrapper {
  display: flex;
  justify-content: center;
  padding: 100px 0;
}

.game__map {
  border-collapse: collapse;
  td {
    border: 1px solid gray;
  }
}

.plain {
  background-color: aquamarine;
  width: 100px;
  height: 100px;
}

.box {
  background-color: black;
  width: 100px;
  height: 100px;
}

.person {
  background-color: red;
  width: 100px;
  height: 100px;
}
</style>
