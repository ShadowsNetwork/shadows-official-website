<template>
  <div class="top">
    <div class="topText">
      <div class="topText-title wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
        <span>Redefining investment opportunities on chain. </span>
      </div>
      <div class="topText-text wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
        <span>Shadows is a hub for issuing, trading, lending and borrowing derivative assets</span>
      </div>
      <div class="topText-button wow fadeIn" data-wow-duration="2.5s" data-wow-delay="1.0s">
        <a class="topText-buttonlink" href="https://app.shadows.link/" target="_blank">App</a>
        <a class="topText-buttonlink" style="margin-left:10px" href="https://github.com/ShadowsNetwork/whitepaper/blob/main/DOWSTokenomics.pdf" target="_blank">Tokenomics</a>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Top',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.top {
  
  height: 100vh;
  max-height: 900px;
  position: relative;
  font-family: 'Arboria-Bold';
  background: url("../../../assets/image/dashboard/topBac.jpg") center;
  background-size: cover;
  display: flex;
  align-items: center;
}
.topText {
  width: 100%;
  margin-top: 40px;
  text-align: center;
  position: absolute;
}
.topText-title {
  padding-left: 0%;
  padding-right: 0%;
  color: #fff;
  font-size: 73px;
  line-height: 1.0;
  
}
.topText-title > span {
  display: block;
}
.topText-title > span:nth-of-type(2) {
  margin-top: 10px;
}
.topText-text {
  font-family: 'Arboria';
  margin-top: 30px;
  font-size: 20px;
  color: #fff;
}
.topText-button {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  display: flex;
}

.topText-button > button {
  width: 170px;
  height: 43px;
  line-height: 43px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: #05DAAC;
  font-family: 'Arboria-Bold';
  border: none;
  border-radius: 100px;
  outline: none;
}

.topText-buttonlink {
  width: 170px;
  height: 43px;
  line-height: 43px;
  color: white;
  font-size: 15px;
  background: #05DAAC;
  
  border: none;
  border-radius: 100px;
  outline: none;
}
.topText-buttonlink:hover{
  background: #00F4C0;
}

.topText-button > button:nth-of-type(2) {
  margin-left: 13px;
}


@media screen and (max-width: 4000px){
  
  .topText-title {
    padding-left: 35%;
    padding-right: 35%;
}
  
}

@media screen and (max-width: 2800px){
  
  .topText-title {
    padding-left: 30%;
    padding-right: 30%;
  }
  
}

@media screen and (max-width: 2200px){
  
  .topText-title {
    padding-left: 22%;
    padding-right: 22%;
  }
  
}

@media screen and (max-width: 1600px){
  
   .topText-title {
    padding-left: 18%;
    padding-right: 18%;
  }
  
}

@media screen and (max-width: 1250px){
  
  .topText-title {
    padding-left: 10%;
    padding-right: 10%;
  }
  
}

@media screen and (max-width: 1100px){
  
  .topText-title {
    padding-left: 3%;
    padding-right: 3%;
  }
}

  @media screen and (max-width: 900px){
  
  .topText-title {
    padding-left: 3%;
    padding-right: 3%;

    font-size: 53px;
    line-height: 0.9;
  }
  
}

@media screen and (max-width: 600px) {
  .top {
    position: relative;
    max-height: 600px;
    height: 600px;
    background: url("../../../assets/image/dashboard/topBacMobile.png") center;
    background-size: cover;
  }
  .topText {
    text-align: center;
  }
  .topText-title {
    width: 100%;
    padding-left: 21%;
    padding-right: 21%;
    margin-top: 45px;
    color: #fff;
    font-family: 'Arboria-Bold';
    font-size: 34px;
    line-height: 1;
  }
  .topText-title > span {
    display: block;
  }
  .topText-title > span:nth-of-type(2) {
    margin-top: 10px;
  }
  .topText-text {
    display: block;
    width: 312px;
    margin-top: 30px;
    margin-left: calc((100% - 312px) / 2);
    font-size: 16px;
    color: #fff;
  }
  .topText-button {
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    display: flex;
    font-weight: 700;
  }
  .topText-button > button {
    width: 133.88px;
    height: 33.86px;
    line-height: 33.86px;
    color: white;
    font-size: 15px;
    background: #05DAAC;
    border: none;
    border-radius: 100px;
    outline: none;
  }
  .topText-button > button:nth-of-type(2) {
    margin-left: 13px;
  }
  .topText-buttonlink {
    width: 120px;
    height: 36px;
    line-height: 36px;
    color: white;
    font-size: 14px;
    background: #05DAAC;
    font-family: 'Arboria-Bold';
    border: none;
    border-radius: 100px;
    outline: none;
  }
}
</style>

