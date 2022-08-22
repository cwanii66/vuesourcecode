import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // render: h => h(App),

  render: function(createElement) {
    return createElement('div', {
      attrs: {
        id: 'app',
      },
    }, this.msg)
  },

  data: {
    msg: 'vueeeeee'
  }
})
