<template>
  <div id="app">
    <!-- <h1> {{ msg }} </h1> -->
    <div> {{ msg1 }} </div>
    <div> {{ msg1WithTail }} </div>
    <button @click="change"> change </button>
    <!-- <button @click="toggle">toggle</button> -->
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: "App",
  components: {
    // HelloWorld,
  },

  data() {
    return {
      msg: {
        a: "hello",
      },
      flag: true,
      msg1: "message-01",
    };
  },
  methods: {
    change() {
      this.msg1 = "message changed";
    },
    toggle() {
      this.flag = !this.flag;
    },
  },
  watch: {

  },
  computed: {
    msg1WithTail() { return this.msg1 + '--tail' }
  }
};
</script>

<style>
h1:active {
  color: crimson;
}
h1:hover {
  cursor: pointer;
}
</style>
