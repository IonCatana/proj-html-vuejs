<template>
  <div id="delivering_home">
    <div class="container">
      <div class="bg_rgba">
        <div class="thumb_nail">
          <div>
            <h1>Delivered to your home</h1>
          </div>
          <div>
            <span>03</span>
          </div>
        </div>
        <div class="thumb_nail flex">
          <div class="description">
            <span class="manatee">Baked to Order & Gift Wrapped</span>
            <p>
              Cras consequat lectus vestibulum tortor pulvinar, quis euismod
              nisl varius. Ut eu Laoreet ex. Aliquam erat volutpat. Nullam quis
              sagittis nibh. Morbi consectetur ultricies ante ac conque. Donec
              lorem erat, finibus in velit placerat, rutrum augue.
            </p>
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
#delivering_home {
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
}
.container {
  background-image: url("../../assets/img/bakery-process-3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 450px;
  margin: 0 auto;
  height: 450px;
}
.thumb_nail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    padding-top: 30px;
    padding-bottom: 60px;
    color: #dfdede;
    font-weight: 600;
  }
  span {
    color: #dfdede;
    font-size: 60px;
  }
}
.description {
  width: 320px;
}
.flex {
  padding-top: 60px;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  span {
    font-size: 7px;
    text-transform: uppercase;
    color: rgb(161, 161, 161);
  }
  p {
    padding: 15px 0px;
    color: #f0f0f0;
    font-size: 12px;
  }
}
</style>