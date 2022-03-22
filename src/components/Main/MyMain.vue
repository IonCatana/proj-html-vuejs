<template>
  <div id="my_main">
    <StartShoping />
    <SpecialMoments />
    <AllProducts />
    <HavingMind />
    <StartBaking />
    <DeliveringHome />
    <OurBakeries />
    <FollowUs />
    <ShopNow />
  </div>
</template>

<script>
import StartShoping from "./StartShoping.vue";
import SpecialMoments from "./SpecialMoments.vue";
import AllProducts from "./AllProducts.vue";
import HavingMind from "./HavingMind.vue";
import StartBaking from "./StartBaking.vue";
import DeliveringHome from "./DeliveringHome.vue";
import OurBakeries from "./OurBakeries.vue";
import FollowUs from "./FolowUs.vue";
import ShopNow from "./ShopNow.vue";
export default {
  name: "MyMain",
  components: {
    StartShoping,
    SpecialMoments,
    AllProducts,
    HavingMind,
    StartBaking,
    DeliveringHome,
    OurBakeries,
    FollowUs,
    ShopNow,
  },
};
</script>

<style lang="scss" scoped>
</style>