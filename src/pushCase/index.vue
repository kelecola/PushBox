<template>
  <div class="game__wrapper">
    <table class="game__map">
      <tr v-for="(row) in gameMap"
        :key="row.id">
        <td v-for="(col) in row"
          :key="col.id">
          <div :class="getColor(col)"></div>
        </td>
        <!-- key id i index @click="test(index,id)"-->
      </tr>
      <!-- ,{'box':isBox.`box${index}${id}`},{'person':isPerson.`person${index}${id}`} -->
    </table>
  </div>
</template>

<script>
import { BOX_STATE, PERSON_STATE } from './const.js'
export default {
  created() {
    this.reGameMap()
    this.initPersonPosition()
    this.getColor()
    // 控制盒子的数量
    this.initBoxPosition(6)
  },
  methods: {
    movePerson(e) {
      switch (e.keyCode) {
        case 37:
          break
        case 38:
          break
        case 39:
          break
        case 40:
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
    reGameMap() {
      for (let i = 0; i < this.arr.length; i++) {
        const arr = JSON.parse(JSON.stringify(this.arr))
        this.gameMap.push(arr)
      }
    },
    ReFindPostion(x, y, state) {
      // 这个循环有点bug
      // boxes的地方有问题
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
        Math.floor(Math.random() * 5),
        Math.floor(Math.random() * 5)
      ]
      this.ReFindPostion(this.person[0], this.person[1], PERSON_STATE)
      this.holder.push(JSON.parse(JSON.stringify(this.person)))
    },
    // 可能会重复地方
    initBoxPosition(boxNum) {
      for (let i = 0; i < boxNum; i++) {
        let box = []
        ;[box[0], box[1]] = [
          Math.floor(Math.random() * 5),
          Math.floor(Math.random() * 5)
        ]
        this.ReFindPostion(box[0], box[1], BOX_STATE)
        // 判断不重复
        // 算法有点问题
        if (box !== this.holder[this.holder.length - 1]) {
          this.holder.push(JSON.parse(JSON.stringify(box)))
          this.boxes.push(JSON.parse(JSON.stringify(box)))
          // console.log('54587', boxNum, this.holder)
        } else {
          boxNum++
        }
      }
    }
  },
  data() {
    return {
      arr: [0, 0, 0, 0, 0],
      state: Number,
      boxes: [],
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
