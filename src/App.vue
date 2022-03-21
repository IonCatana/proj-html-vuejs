<template>
  <div id="app">   
    <HeaderNavBar />
  </div>
</template>

<script>
import HeaderNavBar from './components/HeaderNavBar.vue'

export default {
  name: 'App',
  components: {
    HeaderNavBar,
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
@import './assets/scss/variables.scss';
@import './assets/scss/common.scss';
</style>
