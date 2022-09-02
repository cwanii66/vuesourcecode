import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

const childComp = {
  render: h => h('div', { id: 'child' }, 'child component'),
  created() {
    console.log('child created');
  },
  mounted() {
    console.log('child mounted');
  },
  data() {
    return {
      msg: 'hello vue...'
    }
  }
}

Vue.mixin({
  created() {
    console.log('parent created');
  }
})
.mixin({
  beforeCreate() {
    console.log('before created')
  }
})

new Vue({
  el: '#app',
  render: h => h(childComp),
})
