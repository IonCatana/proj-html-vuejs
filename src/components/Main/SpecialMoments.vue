<template>
  <div id="special_moments">
    <div class="container">
      <div class="titolo text-center">
        <p class="manatee">Corporate & Weddings</p>
        <h1 class="daisy_bush">Baking Special Moments</h1>
      </div>
      <div class="cards">
        <div class="card">
          <div class="info text-center">
            <div class="hover_text">
              <div>
                <p class="manatee">Internazional Bakery</p>
                <h1>Corporate Events</h1>
                <button class="btn">Explore More</button>
              </div>
            </div>
            <img src="../../assets/img/corporate-hover-bg.jpg" alt="" />
          </div>
          <img src="../../assets/img/corporate-bg.jpg" alt="" />
        </div>
        <div class="card">
          <div class="info text-center">
            <div class="hover_text">
              <div>
                <p class="manatee">Private Dining Hall</p>
                <h1>Weddings&Parties</h1>
                <button class="btn">Explore More</button>
              </div>
            </div>
            <img src="../../assets/img/wedding-hover-bg.jpg" alt="" />
          </div>
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
  p {
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
  }
  h1 {
    margin-top: 10px;
    font-size: 30px;
    font-weight: 600;
    text-align: center;
  }
}
.cards {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
  width: 100%;
  .card {
    width: 50%;
    object-fit: contain;
    position: relative;
  }
}
img {
  width: 100%;
  height: 100%;
}
.info {
  visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  color: #ffffff;
  overflow: auto;
  background-color: rgba($color: #000000, $alpha: 0.2);
}
.hover_text {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-transform: uppercase;
    font-size: 10px;
    text-align: center;
  }
  h1 {
    padding: 10px 0px;
    margin-bottom: 10px;
    font-size: 32px;
    font-weight: 600;
    padding-bottom: 10px;
    text-align: center;
  }
  .btn {
    background-color: #5b2ca2;
    color: #ffffff;    
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    cursor: pointer;
  }
}
.card:hover .info {
  visibility: visible;
  cursor: pointer;
}
</style>