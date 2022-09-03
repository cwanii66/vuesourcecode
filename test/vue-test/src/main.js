import Vue from 'vue'
// import App from './App.vue'

Vue.config.productionTip = false

const childComp = { // merge后为子类构造器的options
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
} // 实例化子组件之前，在子组件的构造器内完成组件实例继承关系以及选项合并

Vue.mixin({
  created() {
    console.log('parent created');
  }
}) // 合并我们全局的options

new Vue({
  el: '#app',
  render: h => h(childComp),
})
