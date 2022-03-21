<template>
  <div id="app">
    <MyHeader />
    <MyMain />
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/Header/MyHeader.vue";
import MyMain from "./components/Main/MyMain.vue";
import MyFooter from "./components/Footer/MyFooter.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyMain,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
@import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
@import "./assets/scss/variables.scss";
@import "./assets/scss/common.scss";
</style>
