<template>
  <div id="app">
    {{ message }}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
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
