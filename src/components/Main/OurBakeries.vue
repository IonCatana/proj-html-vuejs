<template>
  <div id="our_bakeries">
    <div class="container">
      <div class="location">
        <div>
          <p class="manatee">Locations</p>
          <h2 class="daisy_bush">Visit our Bakeries</h2>
        </div>
      </div>
      <div class="bakeri_img">
        <div class="card">
          <img src="../../assets/img/new-york-bk.jpg" alt="" />
        </div>
        <div class="card">
          <img src="../../assets/img/london-bk.jpg" alt="" />
        </div>
      </div>
      <div class="bakeri_info">
        <div class="card">
          <div class="city">
            <h1 class="daisy_bush">New York</h1>
          </div>
          <div class="info">
            <div>
              <p class="manatee call">Call Us</p>
              <p class="manatee">1.800.458.556</p>
            </div>
            <div>
              <p class="manatee call">Open All Week</p>
              <p class="manatee">9:00 Am - 6:00 Pm</p>
            </div>
            <div>
              <button class="daisy_bush">View Map</button>
            </div>
          </div>
        </div>
        <div class="card2">
          <div class="city">
            <h1 class="daisy_bush">London</h1>
          </div>
          <div class="info">
            <div>
              <p class="manatee call">Call Us</p>
              <p class="manatee">1.800.458.556</p>
            </div>
            <div>
              <p class="manatee call">Open All Week</p>
              <p class="manatee">9:00 Am - 6:00 Pm</p>
            </div>
            <div>
              <button class="daisy_bush">View Map</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#our_bakeries {
  width: 1200px;
  margin: 0 auto;
  .container {
    .location {
      padding-top: 100px;
      display: flex;
      justify-content: center;
      p {
        font-size: 10px;
        text-align: center;
        text-transform: uppercase;
      }
      h2 {
        padding-top: 20px;
        padding-bottom: 40px;
        font-weight: 700;
        font-size: 30px;
      }
    }
  }
}
.bakeri_img {
  width: 100%;
  display: flex;
  .card {
    width: 50%;
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.bakeri_info {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  .card {
    background-color: #f1f9fb;
    height: 100%;
    width: 50%;
    .city {
      display: flex;
      justify-content: center;
      h1 {
        padding: 10px 0px;
        font-size: 20px;
      }
    }
    .info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .call {
        font-size: 10px;
        padding-bottom: 5px;
      }
      p {
        text-align: center;
        text-transform: uppercase;
      }
      button {
        padding: 5px 20px;
        border: none;
        background-color: #ffffff;
        border-radius: 5px;
      }
    }
  }
}
.bakeri_info {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  .card2 {
    background-color: #faf3e3;
    height: 100%;
    width: 50%;
    .city {
      display: flex;
      justify-content: center;
      h1 {
        padding: 10px 0px;
        font-size: 20px;
      }
    }
    .info {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .call {
        font-size: 10px;
        padding-bottom: 5px;
      }
      p {
        text-align: center;
        text-transform: uppercase;
      }
      button {
        padding: 5px 20px;
        border: none;
        background-color: #ffffff;
        border-radius: 5px;
      }
    }
  }
}
</style>