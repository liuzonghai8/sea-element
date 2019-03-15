import Vue from 'vue'

// Components
import './components'

// Plugins 
import './plugins'

// Application imports
import App from './App'
import store from '@/store'
import router from '@/router'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
