<template>
  <div id="having_mind">
    <div class="container">
      <div class="thumb_nail flex">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  background-image: url("../../assets/img/bakery-process-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 92% 500px;
  height: 600px;
  margin: 0 auto;
  padding-top: 80px;
}
.thumb_nail {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid red;
  h1 {
    color: #ffffff;
    font-weight: 600;
  }
  span {
    color: #ffffff;
    font-size: 70px;
  }
}
</style>