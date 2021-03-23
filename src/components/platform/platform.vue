<template>
  <div class="platform">
    <div class="divLine">
      <div class="line" />
    </div>
    <div class="platform-title wow bounceInUp" >
      <span>Decentralized Derivatives</span>
      <span>Trading Platform</span>
    </div>
    <div class="platform-button wow bounceInUp">
      <button>All Features</button>
    </div>
    <div class="platform-content">
      <div class="platform-img">
        <img src="../../assets/image/dashboard/platformImg.png"/>
        <div class="leftDiv"/>
        <div class="rightDiv"/>
        <div class="bottomDiv"/>
      </div>
      <div class="leftDivGo"/>
      <div class="rightDivGo"/>
      <div class="bottomDivGo"/>
      <div class="leftDivText">
        <span class="divTitle wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">Oracle market data</span>
        <span class="divTextOne wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">Utilizing best-class oracles, </span>
        <span class="divTextTwo wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">providing real-time asset data.</span>
      </div>
      <div class="rightDivText">
        <span class="divTitle wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">DOWS staking</span>
        <span class="divTextOne wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">Manage collateral percentage with </span>
        <span class="divTextTwo wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">DOWS staking.</span>
      </div>
      <div class="bottomDivText">
        <span class="divTitle wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">Synthetize derivatives</span>
        <span class="divTextOne wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">Trade derivatives as easy as </span>
        <span class="divTextTwo wow slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">traditional exchanges.</span>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Platform',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.platform {
  font-family: Arboria;
  width: 100%;
  padding-bottom: 200px;
  background: url("../../assets/image/dashboard/SHADOWS_DashboardHighlights 2.png") no-repeat;
  background-size: 100% 100%;
}
.divLine {
  width: 100%;
  height: 400px;
}
.line {
  width: 80%;
  height: 2px;
  position: relative;
  top: 75px;
  margin-left: 10%;
  background: linear-gradient(-90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
}
.platform-title {
  color: #fff;
  width: 100%;
  text-align: center;
  font-size: 54px;
  font-weight: bold;
}
.platform-title > span {
  display: block;
}
.platform-button {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.platform-button > button {
  width: 163.64px;
  height: 43px;
  line-height: 43px;
  color: white;
  font-size: 15px;
  background: #05DAAC;
  border: none;
  border-radius: 100px;
  outline: none;
}
.platform-content {
  width: 1358px;
  height: 1000px;
  margin-left: calc((100% - 1358px) / 2);
  border: 1px solid rgba(255,255,255,0);
  position: relative;
}
.platform-img {
  margin-top: 250px;
  height: 510px;
  width: 820px;
  margin-left: calc((1358px - 820px) / 2);
  position: relative;
}
.platform-img > img {
  width: 100%;
}
.leftDiv {
  width: 316px;
  height: 360px;
  border: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  top: 50px;
  left: 140px;
}
.rightDiv {
  width: 170px;
  height: 143px;
  border: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  top: 50px;
  right: 190px;
}
.bottomDiv {
  width: 351px;
  height: 96px;
  border: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.leftDivGo {
  width: 226px;
  height: 246px;
  border-left: 2px dashed #2DCBA9;
  border-bottom: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  top: 220px;
  left: 180px;
}
.rightDivGo {
  width: 230px;
  height: 160px;
  border-right: 2px dashed #2DCBA9;
  border-bottom: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  top: 200px;
  right: 220px;
}
.bottomDivGo {
  width: 230px;
  height: 100px;
  border-right: 2px dashed #2DCBA9;
  border-bottom: 2px dashed #2DCBA9;
  box-sizing: border-box;
  position: absolute;
  bottom: 140px;
  right: 450px;
}
.leftDivText {
  position: absolute;
  top: 120px;
  left: 70px;
}
.rightDivText {
  position: absolute;
  top: 105px;
  right: 70px;
}
.bottomDivText {
  position: absolute;
  bottom: 120px;
  left: 330px;
}
.divTitle {
  display: block;
  font-weight: bold;
  font-size: 26px;
  color: #2DCBA9;
}
.divTextOne {
  display: block;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.25px;
  margin-top: 10px;
}
.divTextTwo {
  display: block;
  color: #fff;
  font-size: 16px;
  letter-spacing: 0.25px;
  margin-top: 5px;
}
</style>

