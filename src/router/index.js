import Vue from 'vue'
import Router from 'vue-router'
import pushCase from '@/pushCase'
import map from '@/map'
import newMap from '@/newMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pushCase',
      name: 'pushCase',
      component: pushCase
    },
    {
      path: '/',
      name: 'map',
      component: map
    },
    {
      path: '/newMap',
      name: 'newMap',
      component: newMap
    }
  ]
})
