<template>
  <div id="delivering_home">
    <div class="container">
      <div class="bg_rgba">
        <div class="thumb_nail">
        <div>
          <h1>
            Delivered to your home
          </h1>
        </div>
        <div>
          <span>03</span>
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
}
.thumb_nail {
  display: flex;
  align-items: center;
  justify-content: space-between;  
  h1 {
    padding-top: 30px;
    color: #dfdede;
    font-weight: 600;
  }
  span {
    color: #dfdede;
    font-size: 60px;
  }
}
.description{
  width: 420px;
}
.flex{  
  padding-bottom: 30px;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  span{
    font-size: 9px;
    text-transform: uppercase;
  }
  p{
    padding: 15px 0px;
    color: #dfdede;
    font-weight: 600;
    font-size: 16px;
  }
}
</style>