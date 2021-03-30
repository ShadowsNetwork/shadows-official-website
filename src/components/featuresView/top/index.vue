<template>
  <div class="top">
    <div class="topBac">

      <div class="left"></div>
      <div class="center">
          <div class="top-content">
        <div class="top-text wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.3s">
          <span>Your home</span>
          <span>to derivatives.</span>
        </div>
        <div class="top-img">
          <img class="wow fadeInRight" data-wow-duration="3.5s" data-wow-delay="1.0s" src="../../../assets/image/features/DashboardTilt_1.png"/>
        </div>
        <div class="top-img">
          <img class="wow fadeIn" data-wow-duration="3.5s" data-wow-delay="4.0s" src="../../../assets/image/features/DashboardTilt_2.png"/>
        </div>
        <div class="top-img">
          <img class="wow fadeIn" data-wow-duration="3.5s" data-wow-delay="8.0s" src="../../../assets/image/features/DashboardTilt_1.png"/>
        </div>
      </div>

      </div>
      <div class="right"></div>
      
    </div>
  </div>
</template>

<div class="left"></div>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'FeaturesTop',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.left {
  flex:1
}
.right {
  flex:1;
  
}
.center {
  flex:4;
  max-width: 1200px;
  width: 1200px;
}
.top {
  display: flex;
  flex-direction: row;
  height: 100vh;
  max-height: 900px;
  position: relative;
  font-family: 'Arboria-Bold';
  background: url("../../../assets/image/features/featuresTopBac.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;

/*   
  width: 100%;
  height: 150vh;
  background: url("../../../assets/image/features/featuresTopBac.jpg") center;
  background-size: cover;
  font-family: 'Arboria-Bold';
  position: relative; */
}
.topBac {
  width: 100%;
  display: flex;
  flex-direction: row;
  
  
  /* width: 100%;
  height: 150vh;
  background: url("../../../assets/image/features/featuresTopBac2.png") center;
  background-size: cover; */
}
.top-content {
  width:100%;
  margin-left: 0%;
  display: flex;
}
.top-text {
  color: #FFFBFB;
  font-size: 60px;
  text-align: left;
  position: absolute;
  width: 100%;
  top: 280px;
  left:
  /* position: absolute;
  
  left: 20%; */
}
.top-text > span {
  display: block;
}
.top-img > img {
  width: 1000px;
  text-align: center;
  position: absolute;
  right: 0px;
  top: 100px;
  
}
@media screen and (max-width: 4000px){
  .top-img > img {
    width: 1000px;
    position: absolute;
    right: 800px;
    top: 100px;
  }
}
@media screen and (max-width: 3500px){
  .top-img > img {
    width: 1000px;
    position: absolute;
    right: 600px;
    top: 100px;
  }
}
@media screen and (max-width: 3000px){
  .top-img > img {
    width: 1000px;
    position: absolute;
    right: 400px;
    top: 100px;
  }
}
@media screen and (max-width: 2500px){
  .top-img > img {
    width: 1000px;
    position: absolute;
    right: 350px;
    top: 100px;
  }
}
@media screen and (max-width: 2200px){
  .top-img > img {
    width: 1000px;
    position: absolute;
    right: 100px;
    top: 100px;
  }
}
@media screen and (max-width: 1650px){
  .top-img > img {
    width: 800px;
    position: absolute;
    right: 100px;
    top: 100px;
  }
}
@media screen and (max-width: 1450px){
  .top-img > img {
    width: 600px;
    position: absolute;
    right: 50px;
    top: 100px;
  }
}

@media screen and (max-width: 1200px){
  .top-text {
    color: #FFFBFB;
    text-align: left;
    position: absolute;
    width: 100%;
    top: 280px;
    left: 10%;
  }
  .top-img > img {
    width: 600px;
    position: absolute;
    right: 50px;
    top: 100px;
  }
}
@media screen and (max-width: 1100px){
  .top-text {
    top: 280px;
    left: 10%;
    font-size: 46px;
  }
  .top-img > img {
    width: 600px;
    position: absolute;
    right: 50px;
    top: 100px;
  }
}
@media screen and (max-width: 1000px){
  .top-text {
    top: 280px;
    left: 5%;
    font-size: 44px;
  }
  .top-img > img {
    width: 600px;
    position: absolute;
    right: 20px;
    top: 100px;
  }
}
@media screen and (max-width: 900px){
  .top {
    height: 700px;
  }
  .topBac {
    height: 700px;
  }
  .top-text {
    width: 80%;
    color: #FFFBFB;
    font-size: 36px;
    position: relative;
    text-align: center;
    top: 180px;
    
  }
  .top-text > span {
    display: block;
  }
  .top-img > img {
    padding-left: 10%;
    padding-right: 10%;
    width: 100%;
    position: absolute;
    top: 240px;
    
  }
}
@media screen and (max-width: 450px){
  .top {
    height: 500px;
  }
  .topBac {
    height: 500px;
  }
  .top-text {
    width: 100%;
    color: #FFFBFB;
    font-size: 36px;
    position: relative;
    text-align: center;
    top: 180px;
    
  }
  .top-text > span {
    display: block;
  }
  .top-img > img {
    width: 100%;
    position: absolute;
    top: 250px;
    right: -2%;
  }
}
</style>

