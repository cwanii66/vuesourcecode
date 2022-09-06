<template>
  <div id="app">
    <h1 @click="changeMsg"> {{ message }} </h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },

  data() {
    return {
      message: 'hello vue'
    }
  },
  methods: {
    changeMsg() {
      this.message = 'hello vue3'
    }
  }
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
