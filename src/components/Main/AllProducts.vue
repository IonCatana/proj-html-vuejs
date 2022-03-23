<template>
  <div id="all_products">
    <div class="container">
      <div class="shop_all_products">
        <div class="description">
          <div>
            <h1 class="daisy_bush">
              Find a freshly baked product perfect for you
            </h1>
            <p class="manatee">
              Integer a nabh vitae ex porttitor rutrum et ut velit. Etiam ac
              felis at leo feugiat placerat. Sed ac nulla id orci tempor
              convallis sed.
            </p>
            <button class="btn">Shop All Products</button>
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <i class="fa-solid fa-chevron-left"></i>
          <img src="../../assets/img/choco-chip-cookies-400x510.jpg" alt="" />
          <h2 class="daisy_bush">Choco Chips Cookies</h2>
          <p class="prezzo daisy_bush">$19.00 - $39.00</p>
        </div>
        <div class="card">
          <img
            src="../../assets/img/strawberry-jam-cookies-400x510.jpg"
            alt=""
          />
          <h2 class="daisy_bush">Strawberry Jam Cookies</h2>
          <p class="prezzo daisy_bush">$24.00 - $62.00</p>
        </div>
        <div class="card">
          <img src="../../assets/img/strawberry-donut-400x510.jpg" alt="" />
          <h2 class="daisy_bush">Strawberry Donut</h2>
          <p class="prezzo daisy_bush">$24.00 - $42.00</p>
        </div>
        <div class="card">
          <i class="fa-solid fa-chevron-right"></i>
          <img src="../../assets/img/perfect-macarons-400x510.jpg" alt="" />
          <h2 class="daisy_bush">Perfect Macarons</h2>
          <p class="prezzo daisy_bush">$18.00 - $52.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cards {
  width: 70%;
  display: flex;
  gap: 10px;
  .card {
    position: relative;
    width: calc(100% / 4);

    h2 {
      text-align: center;
      font-size: 16px;
      padding: 10px 0px;
    }
    p {
      text-align: center;
      font-size: 12px;
    }
    img {
      width: 100%;
    }
  }
}
#all_products {
  width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
}
.container {
  display: flex;
  .shop_all_products {
    width: 30%;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    .description {
      display: flex;
      align-items: center;
      padding-bottom: 40px;
      height: 100%;
      margin-right: 40px;
      h1 {
        text-align: center;
        font-size: 26px;
      }
      p {
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        padding: 20px 0px;
      }
    }
  }
  .btn {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    font-size: 10px;
    margin-top: 20px;
    color: #ffffff;
    background-color: #5b2ca2;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
  }
}
.fa-chevron-left {
  position: absolute;
  top: 50%;
  left: 9px;
  transform: translate(-50%, -50%);
  background-color: #bda2f3;
  color: #ffffff;
  font-size: 9px;
  padding: 15px 6px;
}
.fa-chevron-right {
  z-index: 9;
  position: absolute;
  top: 50%;
  right: -9px;
  transform: translate(-50%, -50%);
  background-color: #bda2f3;
  color: #ffffff;
  font-size: 9px;
  padding: 15px 6px;
}
</style>