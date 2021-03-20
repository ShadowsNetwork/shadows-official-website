<template>
  <div class="dashboard">
    <Top />
    <div class="dashboard-content">
      <div class="market">
        <div class="market-title">
          <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">*$1.2 Quadrillion Derivatives Market</span>
          <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">Bringing financial derivatives to the ever-growing DeFi space.</span>
        </div>
        <div class="market-content">
          <el-row justify="space-around">
            <el-col :xl="{span:6}" :lg="{span:6}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Play.png">
                <span>Shadows DApp</span>
                <span>Shadows DApp is our web-based derivatives platform to issue, trade, and stake derivative asset classes.</span>
              </div>
            </el-col>
            <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Shield.png">
                <span>$DOWS </span>
                <span>DOWS, the “Wall St.” token, is the value connection pipeline for real world assets to be mapped onto the chain.</span>
              </div>
            </el-col>
            <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Anchore.png">
                <span>Built on PolkaDot</span>
                <span>Unlocking scalability and interoperability by investing in Polkadot’s blockchain.</span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :xl="{span:6}" :lg="{span:6}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Persentage.png">
                <span>Asset Classes</span>
                <span>Suite of financial derivative products: fiat currency, crypto currency, stocks, market indices, and commodities (xUSD, xBTC, xGOLD, xTesla, others).</span>
              </div>
            </el-col>
            <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Calendar.png">
                <span>Issuance & Trading</span>
                <span>Smart contract issuance and trading of derivates secured by the underlying value of the DOWS. </span>
              </div>
            </el-col>
            <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
              <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                <img src="../../assets/image/dashboard/icon/Wheel.png">
                <span>Rewards </span>
                <span>Variety of DOWS rewards generation from issuance, lending, staking, and trasactions on the Shadows Network.</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { WOW } from 'wowjs'
import Top from '@/components/top/top'
export default {
  name: 'Dashboard',
  components: { Top },
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.dashboard {
  position: relative;
  top: -100px;
  background: #000;
}
.dashboard-content {
  height: 3000px;
  position: relative;
  top: -4px;
  width: 100%;
  background: radial-gradient(102.5% 144.43% at 85.56% 76.77%, rgba(40, 1, 27, 0.7) 0%, rgba(24, 57, 80, 0.7) 100%);
}
.market {
  position: relative;
  top: 126px;
  text-align: center;
}
.market-title {
  height: 207px;
}
.market-title > span:nth-of-type(1) {
  display: block;
  width: 100%;
  height: 75px;
  line-height: 75px;
  color: #fff;
  font-size: 54px;
  font-weight: 700;
}
.market-title > span:nth-of-type(2) {
  display: block;
  width: 100%;
  color: #fff;
  font-size: 24px;
}
.market-content {
  width: 60%;
  margin-left: 20%;
}
.market-contentChild {
  margin-bottom: 104px;
}
.market-contentChild > span {
  color: #fff;
  display: block;
}
.market-contentChild > span:nth-of-type(1) {
  font-size: 26px;
  margin-top: 22px;
  font-weight: 700;
}
.market-contentChild > span:nth-of-type(2) {
  margin-top: 18px;
}
@media (max-width: 1200px) {
  .market-title {
    height: 170px;
  }
  .market-title > span:nth-of-type(1) {
    display: block;
    width: 100%;
    height: 75px;
    line-height: 75px;
    color: #fff;
    font-size: 30px;
  }
  .market-title > span:nth-of-type(2) {
    display: block;
    width: 100%;
    color: #fff;
    font-size: 18px;
  }
}
@media (max-width: 450px) {
  .market-title {
    height: 170px;
  }
  .market-title > span:nth-of-type(1) {
    display: block;
    width: 100%;
    height: 75px;
    line-height: 75px;
    color: #fff;
    font-size: 20px;
  }
  .market-title > span:nth-of-type(2) {
    display: block;
    width: 100%;
    color: #fff;
    font-size: 13px;
  }
}
</style>

