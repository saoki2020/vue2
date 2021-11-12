<template>
  <div id="app">
    <Form/>
  </div>
</template>


<script>
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    Form,
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

</style>
