<template>
  <div id="app">
    <!-- <h1> {{ msg }} </h1> -->
    <div ref="msg">
      {{ msg }}
    </div>
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
    async change() {
      this.msg = Math.random()
      console.log('sync: ', this.$refs.msg.innerText)
      this.$nextTick(() => {
        console.log('nextTick: ', this.$refs.msg.innerText)
      })
      this.$nextTick().then(() => {
        console.log('nextTick without cb: ', this.$refs.msg.innerText)
      })
      await this.$nextTick()
      console.log('nextTick async/await: ', this.$refs.msg.innerText)
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
