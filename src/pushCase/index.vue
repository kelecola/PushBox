<template>
  <div class="game__wrapper">
    <table class="game__map">
      <tr v-for="row in gameMap"
        :key="row.id">
        <td v-for="col in row"
          :key="col.id"
          @click="keep"
          @keydown="movePerson($event)"
          tabindex=1>
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
    this.initBoxPosition(20)
  },
  methods: {
    // 有时间在抽方法。。。
    // 是否需要，抽取上下左右四个方法为一个方法
    // move(direction, distance) {
    //   let [a, b] = this.person
    //   let temp = this.gameMap[a][b]
    //   this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b + distance])
    //   this.$set(this.gameMap[`${a}`], `${b + distance}`, temp)
    //   this.person = [a, b + distance]
    // },
    right() {
      let [a, b] = this.person
      let temp1 = this.gameMap[a][b]
      let temp2 = this.gameMap[a][b + 1]
      if (this.gameMap[a][b + 1] === 1) {
        if (this.gameMap[a][b + 2] === 1 || b + 2 === this.arr.length) {
          this.keep()
        } else {
          this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b + 2])
          this.$set(this.gameMap[`${a}`], `${b + 1}`, temp1)
          this.$set(this.gameMap[`${a}`], `${b + 2}`, temp2)
          this.person = [a, b + 1]
        }
      } else {
        this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b + 1])
        this.$set(this.gameMap[`${a}`], `${b + 1}`, temp1)
        this.person = [a, b + 1]
      }
    },
    left() {
      let [a, b] = this.person
      let temp1 = this.gameMap[a][b]
      let temp2 = this.gameMap[a][b - 1]
      if (this.gameMap[a][b - 1] === 1) {
        if (this.gameMap[a][b - 2] === 1 || b === 1) {
          this.keep()
        } else {
          this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b - 2])
          this.$set(this.gameMap[`${a}`], `${b - 1}`, temp1)
          this.$set(this.gameMap[`${a}`], `${b - 2}`, temp2)
          this.person = [a, b - 1]
        }
      } else {
        this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b - 1])
        this.$set(this.gameMap[`${a}`], `${b - 1}`, temp1)
        this.person = [a, b - 1]
      }
    },
    up() {
      let [a, b] = this.person
      let temp1 = this.gameMap[a][b]
      let temp2 = this.gameMap[a - 1][b]
      if (this.gameMap[a - 1][b] === 1) {
        if (a === 1 || this.gameMap[a - 2][b] === 1) {
          console.log('4545')
          this.keep()
          console.log('4545')
        } else {
          this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a - 2][b])
          this.$set(this.gameMap[`${a - 1}`], `${b}`, temp1)
          this.$set(this.gameMap[`${a - 2}`], `${b}`, temp2)
          this.person = [a - 1, b]
        }
      } else {
        this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a - 1][b])
        this.$set(this.gameMap[`${a - 1}`], `${b}`, temp1)
        this.person = [a - 1, b]
      }
    },
    down() {
      let [a, b] = this.person
      let temp1 = this.gameMap[a][b]
      let temp2 = this.gameMap[a + 1][b]
      if (this.gameMap[a + 1][b] === 1) {
        if (a + 2 === this.gameMap.length || this.gameMap[a + 2][b] === 1) {
        } else {
          this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a + 2][b])
          this.$set(this.gameMap[`${a + 1}`], `${b}`, temp1)
          this.$set(this.gameMap[`${a + 2}`], `${b}`, temp2)
          this.person = [a + 1, b]
        }
      } else {
        this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a + 1][b])
        this.$set(this.gameMap[`${a + 1}`], `${b}`, temp1)
        this.person = [a + 1, b]
      }
    },
    keep() {
      let [a, b] = this.person
      let temp = this.gameMap[a][b]
      this.$set(this.gameMap[`${a}`], `${b}`, this.gameMap[a][b])
      this.$set(this.gameMap[`${a}`], `${b}`, temp)
      this.person = [a, b]
    },
    movePerson() {
      let [a, b] = this.person
      console.log(a, b)
      switch (event.keyCode) {
        case 37:
          if (b === 0) {
            this.keep()
          } else {
            this.left()
          }
          break
        case 38:
          if (a === 0) {
            this.keep()
          } else {
            this.up()
          }
          break
        case 39:
          if (b + 1 === this.arr.length) {
            this.keep()
          } else {
            this.right()
          }
          break
        case 40:
          if (a + 1 === this.gameMap.length) {
            this.keep()
          } else {
            this.down()
          }
          break
      }
      // 加上tabindex获取到了焦点
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
      this.$set(this.gameMap[`${x}`], `${y}`, state)
    },
    initPersonPosition() {
      ;[this.person[0], this.person[1]] = [
        Math.floor(Math.random() * this.arr.length),
        Math.floor(Math.random() * this.arr.length)
      ]
      this.ReFindPostion(this.person[0], this.person[1], PERSON_STATE)
      // this.holder.push(JSON.parse(JSON.stringify(this.person)))
    },
    // 可能会重复地方
    initBoxPosition(boxNum) {
      for (let i = 0; i < boxNum; i++) {
        let box = []
        ;[box[0], box[1]] = [
          Math.floor(Math.random() * this.arr.length),
          Math.floor(Math.random() * this.arr.length)
        ]
        if (
          (box[0] !== this.person[0] || box[1] !== this.person[1]) &&
          (this.boxes[this.boxes.length - 1][0] !== box[0] ||
            this.boxes[this.boxes.length - 1][1] !== box[1])
        ) {
          this.ReFindPostion(box[0], box[1], BOX_STATE)
          // console.log(box, this.boxes[this.boxes.length - 1])
          this.boxes.push(JSON.parse(JSON.stringify(box)))
          // 应该判断所有，这样是无法判断所有的
          // 箱子数有bug
          // 先处理上下左右的逻辑，回来再处理bug
        } else {
          boxNum++
        }
      }
    }
  },
  data() {
    return {
      temp: '',
      obj: {},
      arr: [0, 0, 0, 0, 0, 0, 0],
      state: Number,
      boxes: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
      person: [],
      isFailly: false,
      gameMap: [],
      holder: []
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
