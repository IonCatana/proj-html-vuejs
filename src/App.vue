<template>
  <div id="app">
    <MyHeader />
    <MyMain />
  </div>
</template>

<script>
import MyHeader from "./components/Header/MyHeader.vue";
import MyMain from "./components/Main/MyMain.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyMain,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "./assets/scss/variables.scss";
@import "./assets/scss/common.scss";
</style>
