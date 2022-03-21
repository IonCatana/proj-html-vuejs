<template>
  <div id="my_main">
    <StartShoping />
    <SpecialMoments />
  </div>
</template>

<script>
import StartShoping from "./StartShoping.vue";
import SpecialMoments from "./SpecialMoments.vue";
export default {
  name: "MyMain",
  components: {
    StartShoping,
    SpecialMoments,
  },
};
</script>

<style lang="scss" scoped>
</style>