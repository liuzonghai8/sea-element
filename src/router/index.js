import Vue from 'vue'
import Router from 'vue-router'
import constantRouterMap from './constRouter'

Vue.use(Router)
// Create a new router 
const router = new Router({
  //mode: 'history',
  mode: 'hash',

  routes: constantRouterMap,
  // routes: [].concat(...formatRoutes(store.state.user.menus), baseRouter),

  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})
export default router