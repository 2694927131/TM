import Vue from 'vue'
import App from './App.vue'

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)


Vue.config.productionTip = false

import axios from './utils/axios'
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
