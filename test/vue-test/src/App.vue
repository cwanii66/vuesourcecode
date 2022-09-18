<template>
  <div id="app">
    <!-- <h1> {{ msg }} </h1> -->
    <div>
      {{ msg }}
    </div>
    <div>
      {{ items }}
    </div>
    <div>
      {{ msg1 }}
    </div>
    <ul>
      <li v-for="(item, index) in items" :key="index">number: {{ item }}</li>
    </ul>
    <!-- <div v-else> {{ msg1 }} </div> -->
    <button @click="change">change</button>
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
      items: [1, 2, 3],
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
    msg1(value, oldValue) {
      console.log(value, oldValue);
    },
  },
  computed: {
    msg1WithTail: () => this.msg1 += '---tail'
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
