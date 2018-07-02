<template>
    <div class="login__wrapper">
        <div class="username__wrapper">
            <div class="username">用户名</div>
            <el-input v-model="name" style=" width: 200px"></el-input>
        </div>
        <div class="password__wrapper">
            <div class="password">密码</div>
            <el-input v-model="password" style=" width: 200px"></el-input>
        </div>
        <div>
            <el-button type="submit" @click="check">登录</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    check() {
      if (this.name === '') {
        alert('账号不能为空')
      } else {
        this.$router.push({path: '/content', query: {name: this.name, password: this.password}})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login__wrapper{
    display: flex;
    flex-direction: column;
    justify-content: flex-end
}
.username__wrapper,.password__wrapper{
    display: flex;
    align-items: center;
    margin: 20px;
}
.username,.password{
    margin-right: 20px;
}
</style>
