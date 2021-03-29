<template>
  <div class="trader">
    <div class="pc-content">
    <div class="line"/>
    <div class="trader-title wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <span>Investments for</span>
      <span>Every Trader</span>
    </div>

    <div class="traderText wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <span>Asset Classes</span>
      <span>Invest in a wide variety of derivative asset classes: Fiat Currencies (USD, EUR), Crypto Currencies (BTC, ETH), Commodities (GOLD, SILVER), Equities (TSLA, AAPL), and many more.</span>
    </div>
    
    <div class="wow bounceIn globe" data-wow-duration="1.5s" data-wow-delay="0.3s" >
      
    </div>
    
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Trader',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.trader {
  width: 100%;
  position: relative;
}
.pc-content {
  max-width: 1600px;
  margin: auto;
  display: block;
}


 .globe {
    background: url("../../../assets/image/dashboard/groupAssets.png") center;
    margin-top: 10px;
    margin-bottom:90px;
    background-repeat: no-repeat;
    height: 1000px;
    width: 80%;
  }

.line {
  width: 80%;
  height: 2px;
  position: relative;
  margin-left: 10%;
  background: linear-gradient(90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
}
.trader-title {
  position: relative;
  top: 160px;
}
.trader-title > span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 54px;
  font-family: Arboria-Bold;
  letter-spacing: 0.01em;
  color: #FFFBFB;
}
.trader > img {
  width: 70%;
  margin-left: 5%;
}
.traderText {
  width: 300px;
  position: absolute;
  top: 48%;
  right: 30%;
}
.traderText > span:nth-of-type(1) {
  display: block;
  width: 100%;
  font-family: Arboria-Bold;
  font-size: 30px;
  color: #2DCBA9;
}
.traderText > span:nth-of-type(2) {
  display: block;
  width: 100%;
  font-family: Arboria;
  font-size: 16px;
  letter-spacing: 0.25px;
  color: #fff;
  margin-top: 10px;
}

@media screen and (max-width: 3400px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 30%;
  }
  
}

@media screen and (max-width: 2800px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 30%;
  }
  
}

@media screen and (max-width: 2200px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 20%;
  }
  
}

@media screen and (max-width: 1600px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 10%;
  }
  
}

@media screen and (max-width: 1200px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 5%;
  }
  
}

@media screen and (max-width: 1100px){
  
  .traderText {
    width: 300px;
    position: absolute;
    top: 48%;
    right: 0%;
  }
  
}


@media screen and (max-width: 900px){
  .globe {
    margin-top: 10px;
    margin-bottom:90px;
    background: url("../../../assets/image/dashboard/groupAssets.png") center;
    width: 100%;
  }
  .traderText {
    width: 300px;
    position: absolute;
    top: 80%;
    right: 5%;
  }
}

@media screen and (max-width: 450px){
  .trader-title { 
    position: relative;
    top: 80px;
  }
  .globe {
    margin-top: 10px;
    margin-bottom:90px;
    background: url("../../../assets/image/dashboard/groupAssetsMobile.png") center;
    height: 600px;
    width: 100%;
  }
  .trader-title > span {
    font-family: Arboria-Bold;
    font-size: 24px;
  }
  .traderText {
    width: 100%;
    padding-left: 20%;
    padding-right: 20%;
    text-align: center;
    position: absolute;
    top: 550px;
    right: 0%;
  }
  .traderText > span:nth-of-type(1) {
    font-size: 16px;
  }
  .traderText > span:nth-of-type(2) {
    font-size: 13px;
    line-height: 16px;
  }
  .trader > img {
    width: 100%;
    margin-left: 0%;
    margin-bottom: 160px;
  }
}
</style>

