<template>
  <div id="having_mind">
    <div class="container">
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
            Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl
            varius. Ut eu Laoreet ex. Aliquam erat volutpat. Nullam quis
            sagittis nibh. Morbi consectetur ultricies ante ac conque. Donec
            lorem erat, finibus in velit placerat, rutrum augue.
          </p>
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
  background-size: 100% 450px;
  height: 600px;
  margin: 0 auto;
  padding-top: 120px;
}
.thumb_nail {
  display: flex;
  align-items: center;
  justify-content: space-between;  
  h1 {
    color: #ffffff;
    font-weight: 600;
  }
  span {
    color: #ffffff;
    font-size: 70px;
  }
}
.description{
  width: 420px;
}
.flex{  
  height: 280px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  span{
    font-size: 10px;
    text-transform: uppercase;
  }
  p{
    padding: 15px 0px;
    color: #ffffff;
    font-weight: 600;
  }
}
</style>