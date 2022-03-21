<template>
  <div id="app">
    <MyHeader />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";

export default {
  name: "App",
  components: {
    MyHeader,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "./assets/scss/variables.scss";
@import "./assets/scss/common.scss";
</style>
