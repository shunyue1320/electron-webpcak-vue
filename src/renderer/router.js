import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Foo from './views/Foo.vue'
import Bar from './views/Bar.vue'

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

export default new VueRouter({
  routes
})