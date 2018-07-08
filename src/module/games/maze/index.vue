<template>
  <div>
    <div>maze</div>
    <div class="maze__wrapper">
      <table class="maze__map">
        <tr v-for="row in mazeMap"
          :key="row.id">
          <td v-for="col in row"
            :key="col.id">
            <div :class="getColor(col)"></div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.initMaze(9)
  },
  mounted() {
    this.move()
  },
  methods: {
    // 初始化地图假设是9x9
    initMaze(size) {
      for (let i = 0; i < size; i++) {
        this.arr.push(0)
      }
      for (let i = 0; i < size; i++) {
        // 这个地方特别注意
        const arr = JSON.parse(JSON.stringify(this.arr))
        this.mazeMap.push(arr)
      }
      this.initPerson(size)
      this.initBarrier(size, 16)
    },
    initPerson(size) {
      const PERSON = 1
      this.person = [
        Math.floor(Math.random() * size),
        Math.floor(Math.random() * size)
      ]
      this.$set(this.mazeMap[this.person[0]], this.person[1], PERSON)
    },
    initBarrier(size, num) {
      const Barrier = 2
      for (let i = 0; i < num; i++) {
        const tempBarrier = [
          Math.floor(Math.random() * size),
          Math.floor(Math.random() * size)
        ]
        if (tempBarrier !== this.person && tempBarrier !== this.barriers[i]) {
          this.barriers.push(tempBarrier)
          this.$set(this.mazeMap[tempBarrier[0]], tempBarrier[1], Barrier)
        } else {
          num++
        }
      }
      console.log(this.mazeMap)
    },
    getColor(state) {
      switch (state) {
        case 2:
          return 'barrier'
        case 1:
          return 'person'
        default:
          return 'plain'
      }
    },
    // 移动行为怎么执行(为终点)
    move() {},
    // 判斷是否是出口,随机生成终点是否相等判断
    isExit() {}
  },
  data() {
    return {
      arr: [],
      mazeMap: [],
      person: [0, 0],
      barriers: []
    }
  }
}
</script>

<style lang="scss" scoped>
.maze__wrapper {
  display: flex;
  justify-content: center;
  padding: 100px 0;
}

.maze__map {
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

.barrier {
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
