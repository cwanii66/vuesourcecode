<template>
  <div id="app">
    <!-- <h1> {{ msg }} </h1> -->
    <div>
      {{ msg }}
    </div>
    <div>
      {{ items }}
    </div>
    <!-- <div v-else> {{ msg1 }} </div> -->
    <button @click="change">change</button>
    <!-- <button @click="toggle">toggle</button> -->
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
      msg: {
        a: 'hello',
      },
      flag: true,
      msg1: 'message-01',
      items: [1, 2, 3]
    }
  },
  methods: {
    change() {
      this.$set(this.msg, 'b', 'jack')
      this.items.splice(this.items.length, 0, 4)
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
