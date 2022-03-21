<template>
  <div id="start_shoping">
    <div class="container">
      <div class="row">
        <div class="col-4">
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
              <img
                src="../../assets/img/choco-chip-cookies-400x510.jpg"
                alt=""
              />
            </div>
            <div class="col-6">
              <i class="fa-solid fa-chevron-right"></i>
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
  img {
    width: 100%;
  }
}
.row {
  display: flex;
  justify-content: space-between;
}
.fa-chevron-left {
  position: absolute;
  top: 50%;
  left: 21px;
  transform: translate(-50%, -50%);
  background-color: #bda2f3;
  color: #ffffff;
  font-size: 9px;
  padding: 15px 6px;
}
.fa-chevron-right {
  position: absolute;
  top: 50%;
  right: 3px;
  transform: translate(-50%, -50%);
  background-color: #bda2f3;
  color: #ffffff;
  font-size: 9px;
  padding: 15px 6px;
}
</style>