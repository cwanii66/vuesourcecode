<template>
  <div></div>
</template>

<script>

export default {
  name: 'App',
  components: {
  
  },
  render: function(createElement) {
    return createElement('div', {
      attr: {
        id: 'app'
      },
    }, this.message)
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
