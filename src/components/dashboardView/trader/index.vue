<template>
  <div class="trader">
    <div class="line"/>
    <div class="trader-title wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <span>Investments for </span>
      <span>Every Trader</span>
    </div>
    <div class="traderText wow slideInRight" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <span>Asset Classes</span>
      <span>Invest in a wide variety of derivative asset classes: Fiat Currencies (USD, EUR), Crypto Currencies (BTC, ETH), Commodities (GOLD, SILVER), Equities (TSLA, AAPL), and many more.</span>
    </div>
    <img class="wow bounceIn" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/groupAssets.png">
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
  width: 20%;
  position: absolute;
  top: 48%;
  right: 15%;
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
@media screen and (max-width: 900px){
  .trader-title {
    position: relative;
    top: 40px;
  }
  .trader-title > span {
    font-size: 16px;
  }
  .traderText {
    width: 30%;
    position: absolute;
    top: 30%;
    right: 4%;
  }
  .traderText > span:nth-of-type(1) {
    font-size: 16px;
  }
  .traderText > span:nth-of-type(2) {
    font-size: 12px;
  }
}
</style>

