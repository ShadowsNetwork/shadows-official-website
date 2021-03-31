<template>
  <div class="road">
    <div class="road-title wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Road Ahead 21</span>
    </div>
    <div class="roadText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Our commitment to DeFi innovation</span>
    </div>

    <div class="main">
      <div class="main-child">
        <div class="roadImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <img src="../../../assets/image/roadmap/roadImg/Group1.png">
        </div>
        <div class="mainText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="1.3s">
          <span>Token Launch</span>
          <span>In Q1, Shadows Network held a dual IDO launch and publicly listed on Uniswap. Soon after, we strategically positioned our offering by building onto Binance Smart Chain and rebranded our platform.</span>
        </div>
      </div>
    </div>
    <div class="line wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s" />
    <div class="main">
      <div class="main-child">
        <div class="roadImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <img src="../../../assets/image/roadmap/roadImg/Group2.png">
        </div>
        <div class="mainText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="1.3s">
          <span>Binance Testnet</span>
          <span>Targeted early Q2, we will release our app on BSC testnet to a private user group and then to the general public. During this period we will also launch LP pool mining and begin circulation of DOWS BEP-20 tokens.</span>
        </div>
      </div>
    </div>
    <div class="line wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s" />
    <div class="main">
      <div class="main-child">
        <div class="roadImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <img src="../../../assets/image/roadmap/roadImg/Group3.png">
        </div>
        <div class="mainText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <span>V1 App Launch</span>
          <span>Targeted mid Q2, we will release our application on Binance Smart Chain.  Our app will support trading of core derivatives, staking rewards, and dashboard tools.</span>
        </div>
      </div>
    </div>
    <div class="line wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s" />
    <div class="main">
      <div class="main-child">
        <div class="roadImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <img src="../../../assets/image/roadmap/roadImg/Group4.png">
        </div>
        <div class="mainText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <span>Polkadot Integration</span>
          <span>Next, we will integrate onto Polkadot ecosystem and start parachain deployment.</span>
        </div>
      </div>
    </div>
    <div class="line wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s" />
    <div class="main">
      <div class="main-child">
        <div class="roadImg wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <img src="../../../assets/image/roadmap/roadImg/Group5.png">
        </div>
        <div class="mainText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
          <span>V2 App Launch</span>
          <span>Next, we will launch V2 of our app to offer cross-chain interoperability in addition to a variety of other financial derivatives including indices.</span>
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
.road {
  width: 100%;
  padding-bottom: 300px;
  padding-top: 150px;
  background: url("../../../assets/image/roadmap/roadmap_bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.road-title {
  width: 100%;
  font-size: 60px;
  text-align: center;
  font-family: 'Arboria-Bold';
  color: #FFFBFB;
}
.roadText {
  width: 100%;
  font-size: 24px;
  text-align: center;
  font-family: 'Arboria';
  color: #fffbfb;
  margin-bottom: 100px;
}
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex:1;
}
.main-child {
  display: flex;
  width: 802px;
  margin-left: calc((100% - 802px) / 2);
  align-items: center;
  position: relative;
}
.roadImg {
  width: 380px;
  border: 2px solid #2DCBA9;
  filter: drop-shadow(0px 0px 50px rgba(214, 214, 214, 0.5));
  border-radius: 50px;
}
.roadImg > img {
  width: 382px;
}
.mainText > span {
  display: block;
  text-align: left;
  width: 349px;
  margin-left: 71px;
}
.mainText > span:nth-of-type(1) {
  font-family: Arboria-Bold;
  font-size: 26px;
  color: #2DCBA9;
}
.mainText > span:nth-of-type(2) {
  font-family: Arboria;
  font-size: 16px;
  color: #fff;
  letter-spacing: 0.25px;
  line-height: 1.3;
  margin-top: 5px;
}
.line {
  width: 0;
  height: 120px;
  border: 2px dashed #2DCBA9;
  margin-left: calc(((100% - 802px) / 2) + 190px);
}

@media screen and (max-width: 900px) {
  .road {
    margin-top: 0px;
    padding-bottom: 102px;
  }
  .road-title {
    font-size: 24px;
  }
  .roadText {
    font-size: 16px;
    padding-left: 15%;
    padding-right: 15%;
    line-height: 1.3;
    margin-bottom: 60px;
  }
  .main {
    display: flex;
    flex-direction: row;
    width: 100%;
    flex:1;
  }
  .main-child {
    display: flex;
    width: 350px;
    margin-left: calc((100% - 350px) / 2);
    align-items: center;
    position: relative;
  }
  .roadImg {
    width: 180px;
    border: 1px solid #2DCBA9;
    filter: drop-shadow(0px 0px 50px rgba(214, 214, 214, 0.5));
    border-radius: 10px;
  }
  .roadImg > img {
    width: 180px;
  }
  .mainText > span {
    display: block;
    text-align: left;
    width: 160px;
    margin-left: 10px;
  }
  .mainText > span:nth-of-type(1) {
    font-family: Arboria-Bold;
    font-size: 16px;
    color: #2DCBA9;
  }
  .mainText > span:nth-of-type(2) {
    font-family: Arboria;
    font-size: 12px;
    color: #fff;
    letter-spacing: 0.25px;
    margin-top: 5px;
    line-height: 1.1;
  }
  .line {
    width: 0;
    height: 30px;
    border: 1px dashed #2DCBA9;
    margin-left: calc(((100% - 350px) / 2) + 90px);
  }
}
</style>

