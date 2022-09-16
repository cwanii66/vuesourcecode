<template>
  <div id="app">
    <h1> {{ msg }} </h1>
    <div v-if="flag">
      {{ msg }}
    </div>
    <div v-else> {{ msg1 }} </div>
    <button @click="change">change</button>
    <button @click="toggle">toggle</button>
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },

  data() {
    return {
      msg: 'hello vue',
      flag: true,
      msg1: 'message-01',
    }
  },
  methods: {
    change() {
      this.msg = Math.random()
    },
    toggle() {
      this.flag = !this.flag
    }
  },
}
</script>

<style>
h1:active {
  color: crimson;
}
h1:hover {
  cursor: pointer;
}
</style>
