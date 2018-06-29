<template>
  <div id="js-container"
    class="map"></div>
</template>

<script>
import remoteLoad from '@/utils/remoteLoad.js'
import { MapKey, MapCityName } from '@/config/config'
export default {
  data() {
    return {}
  },
  methods: {
    initMap() {
      // 安装了高德地图的包之后相当于在window下创建了两个对象
      // 一个是window.AMapUI另一个是window.AMap
      // 然后
      // es6一行语法的事情,buy
      let { AMapUI, AMap } = window
      // let AMapUI = (this.AMapUI = window.AMapUI)
      // let AMap = (this.AMap = window.AMap)
      AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
        let mapConfig = {
          zoom: 16,
          cityName: MapCityName
        }
        if (this.lat && this.lng) {
          mapConfig.center = [this.lng, this.lat]
        }
        let map = new AMap.Map('js-container', mapConfig)
        AMap.service('AMap.PlaceSearch', () => {
          this.placeSearch = new AMap.PlaceSearch({
            pageSize: 5,
            pageIndex: 1,
            citylimit: true,
            city: MapCityName,
            map: map
          })
        })
      })
    }
  },
  async created() {
    // 已载入高德地图API，则直接初始化地图
    if (window.AMap && window.AMapUI) {
      this.initMap()
      // 未载入高德地图API，则先载入API再初始化
    } else {
      await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
      await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
      this.initMap()
    }
  }
}
</script>

<style lang="css">
.map {
  width: 600px;
  height: 400px;
}
</style>
