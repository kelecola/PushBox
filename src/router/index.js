import Vue from 'vue'
import Router from 'vue-router'
import pushCase from '@/pushCase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pushCase',
      component: pushCase
    }
  ]
})
