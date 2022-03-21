<template>
  <div id="special_moments">
    <div class="container">
      <div class="titolo text-center">
        <span class="manatee">Corporate & Weddings</span>
        <h1 class="daisy_bush">Baking Special Moments</h1>
      </div>
      <div class="cards">
        <div class="card">
          <img src="../../assets/img/corporate-bg.jpg" alt="" />
        </div>
        <div class="card">
          <img src="../../assets/img/wedding-bg.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecialMoments",
};
</script>

<style lang="scss" scoped>
#special_moments {
  padding-top: 100px;
  width: 1200px;
  margin: 0 auto;
}
.titolo {
  span {
    text-transform: uppercase;
    font-size: 10px;
  }
  h1 {
    margin-top: 15px;
    font-size: 30px;
    font-weight: 600;
  }
}
.cards {
  padding-top: 40px;
  display: flex;
  gap: 50px;
  width: 100%;
  .card {
    width: 50%;
    object-fit: contain;
  }
}
img {
  width: 100%;
}
</style>