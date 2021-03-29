<template>
  <div class="top">
    <div class="topBac">
      <div class="top-content">
        <div class="top-text wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">
          <span>Your home to </span>
          <span>derivatives.</span>
        </div>
        <div class="top-img">
          <img class="wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/features/DashboardTilt.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'FeaturesTop',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 150vh;
  background: url("../../../assets/image/features/featuresTopBac1.png") center;
  background-size: cover;
  font-family: 'Arboria-Bold';
  position: relative;
}
.topBac {
  width: 100%;
  height: 150vh;
  background: url("../../../assets/image/features/featuresTopBac2.png") center;
  background-size: cover;
}
.top-content {
  width:90%;
  margin-left: 5%;
  display: flex;
}
.top-text {
  color: #FFFBFB;
  font-size: 60px;
  position: absolute;
  top: 35%;
  left: 7%;
}
.top-text > span {
  display: block;
}
.top-img > img {
  width: 70%;
  position: absolute;
  top: 5%;
  right: -2%;
}
@media screen and (max-width: 900px){
  .top {
    height: 500px;
  }
  .topBac {
    height: 500px;
  }
  .top-text {
    color: #FFFBFB;
    font-size: 16px;
    position: absolute;
    top: 35%;
    left: 7%;
  }
  .top-text > span {
    display: block;
  }
  .top-img > img {
    width: 70%;
    position: absolute;
    top: 20%;
    right: -2%;
  }
}
</style>

