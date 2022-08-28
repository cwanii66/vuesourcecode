<template>
  <div id="app">
    <h1>{{ message }}</h1> 
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
  mounted() {
    console.log(this.message);
  }
}
</script>

<style>

</style>
