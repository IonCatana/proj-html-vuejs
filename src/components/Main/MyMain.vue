<template>
  <div id="my_main">
    <StartShoping />
    <SpecialMoments />
    <AllProducts />
  </div>
</template>

<script>
import StartShoping from "./StartShoping.vue";
import SpecialMoments from "./SpecialMoments.vue";
import AllProducts from "./AllProducts.vue";
export default {
  name: "MyMain",
  components: {
    StartShoping,
    SpecialMoments,
    AllProducts,
  },
};
</script>

<style lang="scss" scoped>
</style>