import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component(
  'HelloWorld',
  // import() returns a promise
  () => import('./components/HelloWorld.vue')
)

new Vue({
  el: '#app',
  render: h => h(App)
})
