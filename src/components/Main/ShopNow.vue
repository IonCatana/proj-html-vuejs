<template>
  <div id="shop_now">
    <div class="container">
      <div class="thumb_nail">
        <div>
          <p class="manatee">Try Our Seasonal Products</p>
          <h1>
            Order for pick-up or delivery to <br />
            your home
          </h1>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#shop_now {  
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  background-image: url("../../assets/img/call-to-action-bg.jpg");
  background-size: 100% 100%;
}
.container{
  margin-top: 100px;
  height: 100%;
}
.thumb_nail {
  width: 55%;
  height: 100%;
  display: flex;
  
  align-items: flex-end;
  p {
    text-transform: uppercase;
    font-size: 8px;
  }
  h1 {
    padding: 20px 0;
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
  }
  button {
    margin: 40px 0;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: #5b2ca2;
  }
}
</style>