import Vue from 'vue'

// Components
//import './components'

// Plugins 
import './plugins'

//vue-i18n
import i18n from './lang'
//js-cookie
import Cookies from 'js-cookie'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'


Vue.config.productionTip = false
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
