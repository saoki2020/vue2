<template>
  <div id="app">

    <myForm1 v-if="formNum === 1"/>
    <myForm2 v-if="formNum === 2"/>
    <myForm3 v-if="formNum === 3"/>
    <div class="has-text-centered">
      <button class="button is-primary m-3" @click="backForm" v-show="formNum != 1">前へ戻る</button>
      <button class="button is-primary m-3" @click="nextForm">次へ進む</button>
    </div>
  </div>
</template>

<script>
import myForm1 from './components/myForm1.vue'
import myForm2 from './components/myForm2.vue'
import myForm3 from './components/myForm3.vue'

export default {
  name: 'App',
  data: function() {
    return {
      formNum:1
    }
  },
  components: {
    myForm1,
    myForm2,
    myForm3,
  },
  methods: {
    backForm: function() {
      this.formNum--;
    },
    nextForm: function() {
      this.formNum++;
    },
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

</style>
