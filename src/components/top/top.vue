<template>
  <div class="top">
    <div class="topText">
      <div class="topText-title wow bounceInUp">
        <span>Redefining investment</span>
        <span>opportunities on chain.</span>
      </div>
      <div class="topText-text wow bounceInUp">
        <span>Shadows is a hub for issuing, trading, lending and borrowing synthetic assets.</span>
      </div>
      <div class="topText-button wow bounceInUp">
        <button><a href="https://github.com/ShadowsNetwork/whitepaper/blob/main/ShadowsNetworkWhitePaper_EN.pdf" target="_blank">Whitepaper</a></button>
        <button><a href="https://etherscan.io/token/0x661ab0ed68000491d98c796146bcf28c20d7c559" target="_blank">Tokenomics</a></button>
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
  font-family: 'Arboria';
  background: url("../../assets/image/dashboard/topBac.png") center;
  background-size: cover;
  display: flex;
  align-items: center;
}
.topText {
  width: 100%;
  text-align: center;
  position: absolute;
}
.topText-title {
  color: #fff;
  font-size: 70px;
  font-weight: 700;
}
.topText-title > span {
  display: block;
}
.topText-title > span:nth-of-type(2) {
  margin-top: 10px;
}
.topText-text {
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
  font-weight: 700;
}
.topText-button > button {
  width: 170px;
  height: 43px;
  line-height: 43px;
  color: white;
  font-size: 15px;
  font-weight: bold;
  background: #05DAAC;
  font-family: 'Arboria';
  border: none;
  border-radius: 100px;
  outline: none;
}
.topText-button > button:nth-of-type(2) {
  margin-left: 13px;
}
@media screen and (max-width: 450px) {
  .top {
    height: 480px;
    background: url("../../assets/image/dashboard/topBac.png") center;
    background-size: cover;
  }
  .topText {
    width: 100%;
    text-align: center;
  }
  .topText-title {
    color: #fff;
    font-size: 30px;
    font-weight: 700;
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
    color: #938D8D;
  }
  .topText-button {
    width: 100%;
    margin-top: 40px;
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
}
</style>

