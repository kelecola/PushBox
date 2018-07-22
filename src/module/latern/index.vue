<template>
  <div class="lantern__wrapper">
    <div class="lantern__nav">
      <div class="nav__banner"
        v-show="isNormal"
        @click="changeNav">
        <div class="nav__wrapper">pic</div>
        <div class="nav__name">蓝灯</div>
      </div>
      <div class="nav__banner--side"
        v-show="!isNormal">
        <div class="nav__banner--side-first"
          @click="changeNav">
          <div class="nav__wrapper">pic</div>
          <div class="nav__name">红灯</div>
        </div>
        <div class="nav__banner--side-others"
          v-for="navItem in navData"
          :key="navItem.id">
          <div class="nav__svg">svg</div>
          <div class="nav__func">func</div>
        </div>
      </div>
      <div class="nav__data">
        <div class="data__pic">条形图</div>
        <div class="data__restinfo">{{staticInfo.rest}}</div>
        <div class="data__upinfo">{{staticInfo.up}}</div>
      </div>
    </div>
    <div class="lantern__body">
      <div class="body__info">
        <div class="body__serve"
          v-for="item in serveList"
          :key="item.id">
          <i class="serve__svg">svg</i>
          <div class="serve__data">data</div>
          <div class="serve__word">文字</div>
        </div>
      </div>
      <div class="body__discript"
        v-for="(obj,index) in discriptList"
        :key="obj.id"
        :class="getStyle(index)">{{obj}}</div>
      <!-- 比较简单的实现v-for样式绑定,这种是我比较喜欢的一种方式 -->
      <!-- button可以用div写,v-for我觉得就是以p和div为主体循环在转换为其他标签 -->
    </div>
  </div>
</template>

<script>
// 在v-for中显示不同的图片,字体和样式
// hover显示不同样式
// 图表的循环
export default {
  mounted() {
    this.getStyle()
    console.log('1112', this.getStyle())
  },
  methods: {
    getStyle(id) {
      // 根据id进行多样式筛选
      switch (id) {
        case 'discript1':
          return 'discript1'
        case 'discript2':
          return 'discript2'
        case 'discript3':
          return 'discript3'
        case 'discript4':
          return 'discript4'
      }
    },
    changeNav() {
      this.isNormal = !this.isNormal
    }
  },
  data() {
    return {
      staticInfo: {
        rest: '您本月的免费高速流量还有',
        up: '升级到专业版来享受无线高速流量'
      },
      isNormal: true,
      serveList: [1, 2, 3, 4],
      discriptList: {
        discript1: '蓝灯专业版',
        discript2: '更快速，更强大，无限流量，安全',
        discript3: '现在升级',
        discript4: '已经有专业版账户？请登录'
      },
      navData: {
        data1: '1',
        data2: '2',
        data3: '3',
        data4: '4'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.lantern__wrapper {
  display: flex;
  flex-direction: column;
}

.nav__banner--side {
  display: flex;
  flex-direction: column;
  padding: 8px 0 0 8px;
  height: 300px;
  &-first {
    display: flex;
    margin-bottom: 20px;
  }
  &-others {
    display: flex;
  }
}
.nav__banner {
  display: flex;
  padding: 8px 0 0 8px;
}
.nav__wrapper,
.nav__name,
.nav__svg,
.nav__func {
  padding: 0 0 10px 8px;
}
.nav__data {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 8px 8px 0 0;
  .data__upinfo{
    padding-bottom: 5px;
    border-bottom: 1px solid #999
  }
}

.lantern__nav {
  display: flex;
  justify-content: space-between;
  height: 36px;
  border-top: black solid 5px;
  box-shadow: 1px 1px #999;
}

.lantern__body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.body__serve {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 100px 50px 0 50px;
  height: 150px;
  width: 150px;
  border: 1px solid #999;
  .serve__svg {
    margin-top: 15px;
  }
  .serve__data {
    font-size: 24px;
  }
  .serve__word {
    margin-bottom: 15px;
  }
}

.body__discript {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px 0 10px;
}

.body__info {
  display: flex;
}

.discript1 {
  font-size: 20px;
  color: chocolate;
}
.discript2 {
  font-size: 16px;
}
.discript2 :hover{
  background-color: #999
}
.discript3 {
  font-size: 20px;
}
.discript4 {
  font-size: 12px;
}
</style>
