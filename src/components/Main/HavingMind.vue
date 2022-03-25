<template>
  <div id="having_mind">
    <div class="container">
      <div class="bg_rgba">
        <div class="thumb_nail">
          <div>
            <h1>
              Tell us what have in <br />
              mind
            </h1>
          </div>
          <div>
            <span>01</span>
          </div>
        </div>
        <div class="thumb_nail flex">
          <div class="description">
            <span class="manatee">Manual Ingredients Selection</span>
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
#having_mind {
  width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}
.container {
  background-image: url("../../assets/img/bakery-process-1.jpg");
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
    color: #ffffff;
    font-weight: 600;
    font-size: 36px;
  }
  span {
    color: #ffffff;
    font-size: 60px;
  }
}
.description {
  width: 420px;
}
.flex {
  height: 280px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  span {
    color: #9e9e9e;
    font-size: 9px;
    text-transform: uppercase;
  }
  p {
    padding: 10px 0px;
    color: #c0bfbf;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    padding-bottom: 60px;
  }
}
</style>