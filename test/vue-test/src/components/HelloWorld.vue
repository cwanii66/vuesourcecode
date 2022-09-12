<template>
  <div id="hello-world">
    <h2> {{ nested.msg }} </h2>
  </div>
</template>

<script>
export default {
    name: 'hello-world',
    components: {},
    data() {
        return {
            nested: {
              msg: 'welcome to our vue.js app'
            }
        }
    }
}
</script>

<style>

</style>