<template>
  <div id="my_main">
    <StartShoping />
    <SpecialMoments />
    <AllProducts />
    <HavingMind />
  </div>
</template>

<script>
import StartShoping from "./StartShoping.vue";
import SpecialMoments from "./SpecialMoments.vue";
import AllProducts from "./AllProducts.vue";
import HavingMind from './HavingMind.vue'
export default {
  name: "MyMain",
  components: {
    StartShoping,
    SpecialMoments,
    AllProducts,
    HavingMind,
  },
};
</script>

<style lang="scss" scoped>
</style>