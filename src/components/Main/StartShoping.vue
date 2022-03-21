<template>
  <div id="start_shoping">
    <div class="container">
      <div class="row">
        <div class="col-4 ">
          <span class="manatee">Our Products</span>
          <p class="daisy_bush">
            All our delectable pastries are backed fresh in our Kitchen very
            morning, and are made width all-natural, all organic ingredients.
          </p>
          <button class="btn">Start Shopping</button>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <i class="fa-solid fa-chevron-left"></i>
              <div class="info text-center">
                <div>
                  <h2>Choco Chips Cookies</h2>
                  <p>Coockies, Pastries</p>
                  <span>$19.00 $39.00</span>
                </div>
              </div>
              <img
                src="../../assets/img/choco-chip-cookies-400x510.jpg"
                alt=""
              />
            </div>
            <div class="col-6">
              <i class="fa-solid fa-chevron-right"></i>
              <div class="info text-center">
                <div>
                  <h2>Strawberry Jam Cookies</h2>
                  <p>Coockies, Pastries</p>
                  <span>$24.00 $62.00</span>
                </div>
              </div>
              <img
                src="../../assets/img/strawberry-jam-cookies-400x510.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartShoping",
};
</script>

<style lang="scss" scoped>
#start_shoping {
  padding-top: 80px;
  width: 1200px;
  margin: 0 auto;
}

.col-4 {
  padding: 0;
  padding-right: 50px;
  span {
    font-size: 10px;
    text-transform: uppercase;
  }
  p {
    font-size: 23px;
    font-weight: 700;
  }
  .btn {
    font-size: 12px;
    margin-top: 20px;
    color: #ffffff;
    background-color: #5b2ca2;
    padding: 5px 15px;
    &:hover {
      background-color: #ffffff;
      color: #5b2ca2;
    }
  }
}
.col-6 {
  position: relative;
  width: 370px;
  padding: 0;
  img {
    width: 100%;
  }
}
.col-6:hover .info {
  visibility: visible;  
  cursor: pointer;
}
.row {
  display: flex;
  justify-content: space-between;
}
.fa-chevron-left {
  z-index: 9;
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
.info {
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  color: #ffffff;
  overflow: auto;
  background-color: rgba($color: #000000, $alpha: 0.2);
}
h2 {
  font-size: 21px;
  font-weight: 600;
}
p {
  font-size: 13px;
}
span {
  font-size: 20px;
  font-weight: 600;
}
</style>