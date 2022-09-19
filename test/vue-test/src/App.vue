<template>
  <div id="app">
    <h1> {{ name }} </h1>
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
      firstName: 'chris',
      lastName: 'wong',
      useless: 0
    };
  },
  methods: {
    change() {
      this.useless++
    },
    changeLast() {
      this.lastName = 'hang'
    },
  },
  computed: {
    name() {
      if (this.useless > 0) {
        return this.firstName + ' ' + this.lastName
      }
      return 'please click change button'
    }
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
