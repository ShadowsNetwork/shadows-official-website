<template>
  <div class="dashboard">
    <Top />
    <div class="dashboard-content">
      <div class="pc-content">
        <div class="market">
          <div class="divLine">
            <div class="line" />
          </div>
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
      <div class="mobile-content">
        <div class="market">
          <div class="divLine">
            <div class="line" />
          </div>
          <div class="market-title">
            <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">*$1.2 Quadrillion Derivatives Market</span>
            <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">Bringing financial derivatives to the ever-growing DeFi space.</span>
          </div>
          <div class="market-content">
            <el-row :gutter="24">
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Play.png">
                  <span>Shadows DApp</span>
                  <span>Shadows DApp is our web-based derivatives platform to issue, trade, and stake derivative asset classes.</span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
                <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Shield.png">
                  <span>$DOWS </span>
                  <span>DOWS, the “Wall St.” token, is the value connection pipeline for real world assets to be mapped onto the chain.</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Anchore.png">
                  <span>Built on PolkaDot</span>
                  <span>Unlocking scalability and interoperability by investing in Polkadot’s blockchain.</span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
                <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Persentage.png">
                  <span>Asset Classes</span>
                  <span>Suite of financial derivative products: fiat currency, crypto currency, stocks, market indices, and commodities (xUSD, xBTC, xGOLD, xTesla, others).</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Calendar.png">
                  <span>Issuance & Trading</span>
                  <span>Smart contract issuance and trading of derivates secured by the underlying value of the DOWS. </span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
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
    <Description />
    <Platform />
    <Cooperation />
    <Foot />
  </div>
</template>

<script>

// import { WOW } from 'wowjs'
import Top from '@/components/top/top'
import Description from '@/components/description/description'
import Platform from '@/components/platform/platform'
import Cooperation from '@/components/cooperation/cooperation'
import Foot from '@/components/foot/foot'
export default {
  name: 'Dashboard',
  components: { Foot, Cooperation, Platform, Description, Top }
  // mounted() { new WOW().init() }
}
</script>

<style scoped>
.dashboard {
  position: relative;
  top: -100px;
  font-family: Arboria;
  background: #151519;
}
.dashboard-content {
  top: -4px;
  width: 100%;
}
.pc-content {
  display: block;
}
.mobile-content {
  display: none;
}
.market {
  text-align: center;
  padding-top: 30px;
  background: url("../../assets/image/dashboard/SHADOWS_Description 2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  padding-bottom: 250px;
}
.divLine {
  width: 100%;
  height: 306px;
}
.line {
  width: 80%;
  height: 2px;
  position: relative;
  margin-left: 10%;
  background: linear-gradient(-90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
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
  width: 80%;
  margin-left: 10%;
}
.market-contentChild {
  margin-bottom: 104px;
}
.market-contentChild > img {
  width: 49px;
  height: 49px;
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
@media (max-width: 990px) {
  .market {
    padding-bottom: 70px;
  }
  .divLine {
    width: 100%;
    height: 80px;
  }
  .pc-content {
    display: none;
  }
  .mobile-content {
    display: block;
  }
  .market-title > span:nth-of-type(1) {
    display: block;
    width: 80%;
    margin-left: 10%;
    height: 50px;
    line-height: 50px;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
  }
  .market-title > span:nth-of-type(2) {
    display: block;
    width: 80%;
    margin-left: 10%;
    margin-top: 80px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
  }
  .market-content {
    width: 80%;
    margin-left: 10%;
  }
  .market-contentChild {
    margin-bottom: 104px;
  }
  .market-contentChild > img {
    width: 30px;
    height: 30px;
  }
  .market-contentChild > span {
    color: #fff;
    display: block;
  }
  .market-contentChild > span:nth-of-type(1) {
    font-size: 14px;
    margin-top: 10px;
    font-weight: 700;
  }
  .market-contentChild > span:nth-of-type(2) {
    font-size: 8px;
    margin-top: 5px;
  }
}
</style>

