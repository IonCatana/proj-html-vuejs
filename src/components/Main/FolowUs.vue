<template>
  <div id="follow_us">
    <div class="container">
      <div class="cards">
        <div class="card1">
          <img src="../../assets/img/social-1.jpg" alt="" />
        </div>
        <div class="card2">
          <div class="share">
            <p class="manatee">Made For Sharing</p>
            <h1 class="daisy_bush">Let's stay in touch</h1>
            <button><i class="fab fa-instagram" i />Follow Us</button>
          </div>
        </div>
        <div class="card3">
          <img src="../../assets/img/social-2.jpg" alt="" />
        </div>
      </div>
      <div class="cards">
        <div class="card1">
          <img src="../../assets/img/social-3.jpg" alt="" />
        </div>
        <div class="card2">
          <div class="share share2">
            <div class="card4">
              <img src="../../assets/img/social-5.jpg" alt="">
            </div>
            <div class="card5">
              <img src="../../assets/img/social-4.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="card3">
          <img src="../../assets/img/social-6.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#follow_us {
  padding-top: 80px;
  width: 1200px;
  margin: 0 auto;
  .container {
    .cards {
      padding-top: 20px;
      display: flex;
      gap: 20px;
      width: 100%;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
      }
      .card1 {
        width: 25%;
        height: 100%;
      }
      .card2 {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f0ecf1;
        width: 50%;
        height: 100%;
        .share {
          text-align: center;
          p {
            font-size: 10px;
            text-transform: uppercase;
          }
          h1 {
            padding: 20px 0;
            font-size: 25px;
          }
        }
        .share2{
          background-color: white;
          width: 100%;
          height: 100%;          
          display: flex;
          gap: 20px;
          img{
            width: 100%;
            height: 100%;
          }
          .card4{
            width: 50%;
            height: 100%;            
          }
          .card5{
            width: 50%;
            height: 100%;             
          }
        }
        button {
          border: none;
          border-radius: 5px;
          font-size: 12px;
          font-weight: 600;
          color: #ffffff;
          background-color: #5b2ca2;
          padding: 10px 20px;
          .fa-instagram {
            margin-right: 8px;
          }
        }
      }
      .card3 {
        width: 25%;
        height: 100%;
      }
    }
  }
}
</style>