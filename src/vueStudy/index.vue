<template>
  <div @click="test">123</div>
</template>

<script>
export default {
  data () {
    return {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: {
        f: {
          g: 5
        }
      }
    }
  },
  computed: {
    aDouble() {
      return this.a * 2
    },
    aPlus: {
      get() {
        return this.a + 1
      },
      set (v) {
        this.a = v - 1
      }
    }
  },
  watch: {
    a(m, n) {
      console.log(m, n)
    }
  },
  methods: {
    test() {
      // this.a = 6
      console.log(this.aDouble)
    }
  }

}
</script>

<style>

</style>
