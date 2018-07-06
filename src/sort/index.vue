<template>
  <div>
    <label>Search</label>
    <input type="text" v-model="capitalize">
    <div class="title">
      <div @click="orderByName">{{infoCol[0]}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
      <div @click="orderByPower">{{infoCol[1]}}</div>
    </div>
    <div v-for="item in info"
      :key="item.id">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.power}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choose: '',
      infoCol: ['name', 'power'],
      info: [
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 },
        { name: 'Chuck Norris', power: Infinity }
      ]
    }
  },
  computed: {
    capitalize: {
      get: function () {
        return this.infoCol[0]
      },
      set: function (value) {
        console.log(value)
        this.infoCol = value.toUpperCase()
      }
    }
  },
  methods: {
    sortByKey(arr, key) {
      // sort是提供比较函数a，b如果想按照其他标准进行排序，就需要提供比较函数，该函数要比较两个值，然后返回一个用于说明这两个值的相对顺序的数字。比较函数应该具有两个参数 a 和 b，其返回值如下：
      // 若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
      // 若 a 等于 b，则返回 0。
      // 若 a 大于 b，则返回一个大于 0 的值
      // 若 a 大于 b，则返回一个大于 0 的值
      // 若 a 大于 b，则返回一个大于 0 的值
      let order = 1
      return arr.sort((a, b) => ((a[key] < b[key]) ? (-1) : (a[key] > b[key] ? 1 : 0)) * order)
      // const [x, y] = [JSON.parse(JSON.stringify(a[key])), JSON.parse(JSON.stringify(b[key]))]
      // let [x, y] = [a[key], b[key]]
      // return ((a < b) ? (-1) : (a > b) ? 1 : 0)
    },
    orderByPower() {
      this.sortByKey(this.info, 'power')
    },
    orderByName() {
      this.sortByKey(this.info, 'name')
    }
  },
  filters: {
    // conditions: function(items) {
    //   let searchRegex = new RegExp(this.choose, 'i')
    //   let arr = []
    //   for (let i = 0, j = items.length; i < j; i++) {
    //     arr[i] = {}
    //     arr[i].contacters = []
    //     for (let item = 0, len = items[i].contacters.length; item < len; item++) {
    //       if (searchRegex.test(items[i].contacters[item].name) || searchRegex.test(items[i].contacters[item].enterpriseName) || searchRegex.test(items[i].contacters[item].phoneNumber) || searchRegex.test(items[i].contacters[item].uniqueID)) {
    //         arr[i].firstLetter = items[i].firstLetter
    //         arr[i].contacters.push(items[i].contacters[item])
    //       }
    //     }
    //   }
    //   return arr
    // }
    // capitalize: function (value) {
    //   if (!value) return ''
    //   value = value.toString()
    //   // 提取出value第一个值之后的部分
    //   return value.charAt(0).toUpperCase() + value.slice(1)
    // }
  }
  // watch: {
  //   choose() {
  //     this.fetchData()
  //   }
  // }

}
</script>

<style>
.title{
  display: flex;
  flex-direction: row;
}
</style>
