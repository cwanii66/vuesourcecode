import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const LoadingComp = {
  render: h => h('h1', { color: 'green', id: 'loading' }, ['Loading...'])
};
const ErrorComp = {
  render: h => h('h1', { color: 'red', id:'error' }, ['Error Component.'])
};

const AsyncComp = () => ({
  // 需要加载的组件，Promise
  component: import('./components/HelloWorld.vue'),
  // 加载中渲染的组件,
  loading: LoadingComp,
  // 出错时渲染的组件
  error: ErrorComp,
  // 渲染加载中组件的等待时间。default：200ms
  delay: 200,
  // 最长等待时间，超出此时间则渲染错误组件
  timeout: 3000
});

Vue.component('HelloWorld', AsyncComp)

new Vue({
  el: '#app',
  render: h => h(App)
})
