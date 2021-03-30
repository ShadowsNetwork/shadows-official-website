<template>
  <div class="powerFul">
    <div class="powerFul-title wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Powerful Features</span>
    </div>
    <div class="powerFulText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Every detail considered to enrich the trading experience</span>
    </div>
    <div class="powerFul-content">
      <div class="content-row">
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle1.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>Your Wallet</span>
            <span>Track your wallet’s current and historical balance, positions, and performance</span>
          </div>
        </div>
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle2.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>Market Watch</span>
            <span>Explore various asset class offerings in the derivatives ecosystem</span>
          </div>
        </div>
      </div>
      <div class="content-row">
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle3.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>Trade</span>
            <span>Buy and sell derivatives with the familiar trading experience of traditional exchanges</span>
          </div>
        </div>
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle4.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>Rewards</span>
            <span>Earn rewards in DOWS for participating in the derivatives market</span>
          </div>
        </div>
      </div>
      <div class="content-row">
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle5.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>Collateral</span>
            <span>Easy to use and safe collateral management.</span>
          </div>
        </div>
        <div class="content-child">
          <div class="childImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <img src="../../../assets/image/features/featuresPowerful/Rectangle6.png">
          </div>
          <div class="childText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
            <span>LP Staking</span>
            <span>Earn for being a liquidity provider on decentralized exchanges</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'PowerFul',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.powerFul {
  width: 100%;
  padding-bottom: 300px;
  padding-top: 150px;
}
.powerFul-title {
  width: 100%;
  font-size: 60px;
  text-align: center;
  font-family: 'Arboria-Bold';
  color: #FFFBFB;
}
.powerFulText {
  width: 100%;
  font-size: 24px;
  text-align: center;
  font-family: 'Arboria';
  color: #fffbfb;
}
.powerFul-content {
  width: 1105px;
  margin-left: calc((100% - 1105px) / 2);
  margin-top: 128px;
}
.content-row {
  display: flex;
}
.content-row:nth-of-type(2) {
  margin-top: 140px;
}
.content-row:nth-of-type(3) {
  margin-top: 140px;
}
.content-row > .content-child:nth-of-type(2) {
  margin-left: 105px;
}
.childImg {
  opacity: 0.8;
  width: 500px;
  border: 2px solid #A386F5;
  box-sizing: border-box;
  box-shadow: 0px 0px 50px 10px #34274D;
  border-radius: 50px;
  overflow: hidden;
  transition: all 1s;
}
.childImg:hover {
  opacity: 1;
}
.childImg > img {
  display: block;
  height: 100%;
  width: 100%;
  transition: all 1s;
}
.childImg > img:hover {
  transform: scale(1.3);
}
.childImg > img:hover {
  width: 110%;
}
.childText {
  width: 96%;
  text-align: left;
  margin-left: 4%;
  margin-top: 45px;
}
.childText > span:nth-of-type(1) {
  display: block;
  color: #fff;
  font-size: 35px;
  font-family: Arboria-Bold;
}
.childText > span:nth-of-type(2) {
  display: block;
  color: #fff;
  font-size: 20px;
  line-height: 1.3;
  font-family: Arboria;
  margin-top: 15px;
}
@media screen and (max-width: 900px) {
  .powerFul {
    margin-top: 0px;
    padding-bottom: 102px;
  }
  .powerFul-title {
    font-size: 24px;
  }
  .powerFulText {
    font-size: 16px;
    padding-left: 15%;
    padding-right: 15%;
    line-height: 1.3;
  }
  .powerFul-content {
    width: 100%;
    margin-left: 0px;
    margin-top: 80px;
  }
  .content-row {
    display: block;
    text-align: center;
    align-items:center;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
  
  .content-row:nth-of-type(2) {
    text-align: center;
    margin-top: 60px;
  }
  .content-row:nth-of-type(3) {
    text-align: center;
    margin-top: 60px;
  }
  .content-row > .content-child:nth-of-type(2) {
    text-align: center;
    margin-left: 0px;
    margin-top: 60px;
  }
  .childImg {
    opacity: 1;
    text-align: center;
    margin-left: 15%;
    width:70%;
    border: 1px solid #A386F5;
    box-sizing: border-box;
    box-shadow: 0px 0px 50px 10px #34274D;
    border-radius: 20px;
    overflow: hidden;
  }
  .childText {
    text-align:center;
    width: 100%;
    margin-top: 20px;
    padding-left: 20%;
    padding-right: 20%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .childText > span:nth-of-type(1) {
    font-size: 20px;
  }
  .childText > span:nth-of-type(2) {
    font-size: 13px;
    margin-top: 5px;
    line-height:  1.4;
  }
}
</style>

