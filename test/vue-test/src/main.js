import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('App', App)

new Vue({
  el: '#app',
  render: h => h('App', null, null)
})
