/* eslint-disable import/first */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

import '@/assets/vendors/linearicons/linearicons.scss'
import '@/assets/vendors/font-awesome/font-awesome.min.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
