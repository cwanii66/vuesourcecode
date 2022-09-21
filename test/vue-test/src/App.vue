<template>
  <div id="app">
    <h1> {{ name }} </h1>
    <button @click="change"> change </button>
    <!-- <button @click="toggle">toggle</button> -->
    <!-- <HelloWorld /> -->
    <div> Ask a yes/no question: 
      <input type="text" v-model="question">
    </div>
    <div> {{ answer }} </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import { debounce, capitalize } from 'lodash-es'

export default {
  name: "App",
  components: {
    // HelloWorld,
  },

  data() {
    return {
      firstName: 'chris',
      lastName: 'wong',
      useless: 0,
      nested: {
        a: {
          b: 1
        }
      },

      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    };
  },
  methods: {
    change() {
      this.useless++
      this.nested.a.b++
    },
    changeLast() {
      this.lastName = 'hang'
    },
    getAnswer() {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Question usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      const vm = this
      fetch('https://yesno.wtf/api')
        .then(res => vm.answer = capitalize(res.data.answer))
        .catch(err => vm.answer = 'Error! Could not reach the API. ' + err)
    }
  },
  created() {
    this.debouncedGetAnswer = debounce(this.getAnswer, 500)
  },
  computed: {
    name() {
      if (this.useless > 0) {
        return this.firstName + ' ' + this.lastName
      }
      return 'please click change button'
    }
  },
  watch: {
    question() {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    },
    nested: {
      deep: true,
      handler(newVal) {
        console.log('nested: ', newVal.a.b)
      }
    },
    answer: {
      immediate: true,
      handler(value, oldValue = 'initial render') {
        console.log(this.answer, value, oldValue)
      }
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
