<template>
  <div>
    <div class="login__wrapper">
        <div class="username__wrapper">
            <div class="username">用户名</div>
            <el-input v-model="conname" style=" width: 200px"></el-input>
        </div>
        <div class="password__wrapper">
            <div class="password">密码</div>
            <el-input v-model="conpassword" style=" width: 200px"></el-input>
        </div>
    </div>
    <table>
    <tr v-for="(item,index) in userList"
        :key="item.id">
        <div>{{item[0]}}</div>
        <div>{{item[1]}}</div>
        <el-input v-model="user[`name${index+1}`]" style=" width: 200px"></el-input>
        <el-input v-model="user[`password${index+1}`]" style=" width: 200px"></el-input>
        <el-button @click="add(index)">增加</el-button>
        <el-button @click="change(index)">修改</el-button>
        <el-button @click="del(index)">删除</el-button>
        </tr>
  </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      conname: '',
      conpassword: '',
      userList: [],
      user: [{name1: '', password1: ''},
        {name2: '', password2: ''},
        {name3: '', password3: ''}]
    }
  },
  created () {
    this.conname = this.$route.query.name
    this.conpassword = this.$route.query.password
    const user = [this.conname, this.conpassword]
    this.userList.push(user)
  },
  methods: {
    add (index) {
      const user = [this.user[`name${index + 1}`], this.user[`password${index + 1}`]]
      this.userList.splice(index, 0, user)
    },
    change (index) {
      const user = [this.user[`name${index + 1}`], this.user[`password${index + 1}`]]
      this.userList.splice(index, 1, user)
    },
    del (index) {
      this.userList.splice(index, 1)
    }
  }
}
</script>

<style>

</style>
