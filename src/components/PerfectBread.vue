<template>
  <div id="perfect_bread">
    <div class="container">
      <div class="header_container">
        <span class="manatee"> Fresh & Tasty Bakery Every Day </span>
        <h1 class="daisy_bush">The Perfect Fresh Bread</h1>
        <p class="manatee">
          Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl
          varius. Aliquam erat volutpat. Nullam quis sagittis nabh ac nulla id
          orci tempor.
        </p>
        <button class="btn">Explore our products</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerfectBeard",
};
</script>

<style lang="scss" scoped>
.header_container {
  padding-top: 10rem;
  width: 290px;
  h1{
    font-size: 38px;
    font-weight: 900;
  }
  p{
    font-size: 10.9px;
  }
  span {
    font-size: 10px;
    text-transform: uppercase;
  }
}
.btn {
  color: #5b2ca2;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
}
</style>