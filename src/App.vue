<template>
  <div id="app">
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  mounted() {
      this.$router.push('myForm1');
    },
}

</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

</style>
