import Vue from 'vue'
import Router from 'vue-router'
import pushCase from '@/pushCase'
import map from '@/map'
import resume from '@/resume'
import content from '@/content'
import vueStudy from '@/vueStudy'
import sort from '@/sort'
import inherit from '@/o2o/inherit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pushCase',
      name: 'pushCase',
      component: pushCase
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/content',
      name: 'content',
      component: content
    },
    {
      path: '/',
      name: 'resume',
      component: resume
    },
    {
      path: '/vueStudy',
      name: 'vueStudy',
      component: vueStudy
    },
    {
      path: '/sort',
      name: 'sort',
      component: sort
    },
    {
      path: '/o2o/inherit',
      name: 'inherit',
      component: inherit
    }
  ]
})
