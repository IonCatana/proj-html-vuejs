<template>
  <div id="my_header">
    <HeaderNavBar />
    <PerfectBread />
  </div>
</template>

<script>
import HeaderNavBar from "./HeaderNavBar.vue";
import PerfectBread from "./PerfectBread.vue";
export default {
  name: "MyHeader",
  components: {
    HeaderNavBar,
    PerfectBread,
  },
};
</script>

<style lang="scss" scoped>
#my_header {
  background-image: url("../../assets/img/hero-header-bakery.jpg");
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: 1200px 600px;     
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  img {
    width: 100%;
  }
}
</style>