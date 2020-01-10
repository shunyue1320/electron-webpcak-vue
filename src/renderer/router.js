import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouterLayout } from 'vue-router-layout'
import routes from 'vue-auto-routing'

Vue.use(VueRouter)

const RouterLayout = createRouterLayout(layout => {
  return import('./layouts/' + layout + '.vue')
})

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
})