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
  h1 {
    padding-top: 10px;
    font-size: 38px;
    font-weight: 900;
  }
  p {
    padding: 20px 0px;
    font-size: 11.5px;
    line-height: 20px;
  }
  span {
    font-size: 9px;
    text-transform: uppercase;
  }
}
.btn {
  font-size: 10px;
  color: #5b2ca2;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: #5b2ca2;
    color: #ffffff;
  }
}
</style>