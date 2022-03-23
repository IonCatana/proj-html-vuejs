<template>
  <div id="start_baking">
    <div class="container">
      <div class="cards">
        <div class="card">
          <div class="thumb_nail">
            <div class="flex">
              <h1>We Start Baking</h1>
              <span>02</span>
            </div>
            <div class="description">
              <span class="manatee"> Sweet & Delicious</span>
              <p>
                Cras consequat lectus vestibulum tortor pulvinar, quis eusmod
                nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam
                quis sagittis nibh. Morbi consectetur ultricies ante ac conque.
                Donec lorem erat, finibus in velit placerat.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="description_bakery">
            <span class="manatee">Don't Just Take Our Word For It</span>
            <p class="daisy_bush">
              "Finally found an alternative to the mass produced products.
              Something that incorporates real organic ingredients, nutrient
              dense wellness while promoting sustainability and activity."
            </p>
            <span class="manatee no_uppercase">Rachel Cooper, Founder</span>
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
#start_baking {
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
}
.cards {
  display: flex;
  gap: 20px;
  width: 100%;
  .card {
    width: 50%;
    height: 100%;
  }
  .thumb_nail {
    background-image: url("../../assets/img/bakery-process-2.jpg");
    background-repeat: no-repeat;
    background-size: 100% 450px;
    background-color: rgba(5, 5, 5, 0.4);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 450px;
    padding: 30px;
    .description {
      width: 50%;
      span {
        font-size: 9px;
      }
      p {
        padding-top: 10px;
        font-size: 12.7px;
        line-height: 20px;
        color: #ffffff;
        padding-bottom: 20px;
      }
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        color: #ffffff;
        font-size: 32px;
      }
      span {
        font-size: 60px;
        color: #ffffff;
      }
    }
  }
}
.manatee {
  text-transform: uppercase;
  font-size: 9px;
}
.no_uppercase {
  text-transform: capitalize;
}
.description_bakery {
  background-color: #f0ecf1;
  padding: 50px 80px 50px 50px;
  height: 450px;
  p {
    padding: 10px 0;
    font-size: 30px;
    font-weight: 600;
  }
}
</style>