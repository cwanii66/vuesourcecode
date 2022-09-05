import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.component('HelloWorld', function(resolve) {
  // require => 告诉webpack自动将编译后的代码分割成不同的块
  require(['./components/HelloWorld.vue'], function(res) {
    resolve(res)
  })
})

new Vue({
  el: '#app',
  render: h => h(App)
})
