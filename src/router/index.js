import Vue from 'vue'
import Router from 'vue-router'
import pushCase from '@/pushCase'
import map from '@/map'
import resume from '@/resume'
import content from '@/content'
import vueStudy from '@/vueStudy'
import sort from '@/sort'
import inherit from '@/o2o/inherit'
import maze from '@/module/games/maze'
import draw from '@/module/draw'
import latern from '@/module/latern'
import danmu from '@/module/danmu'

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
    },
    {
      path: '/games/maze',
      name: 'maze',
      component: maze
    },
    {
      path: '/draw',
      name: 'draw',
      component: draw
    },
    {
      path: '/latern',
      name: 'latern',
      component: latern
    },
    {
      path: '/danmu',
      name: 'danmu',
      component: danmu
    }
  ]
})
