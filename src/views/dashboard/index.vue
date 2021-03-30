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
            <span class="wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">$1.2 Quadrillion Derivatives Market</span>
            <span class="wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">Bringing financial derivatives to the ever-growing DeFi space</span>
          </div>
          <div class="market-content">
            <el-row justify="space-around">
              <el-col :xl="{span:6}" :lg="{span:6}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Play.png">
                  <span>Shadows DApp</span>
                  <span>Shadows DApp is our web-based derivatives platform to issue, trade, and stake derivative asset classes.</span>
                </div>
              </el-col>
              <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Shield.png">
                  <span>$DOWS </span>
                  <span>DOWS, the “Wall St.” token, is the value connection pipeline for real world assets to be mapped onto the chain.</span>
                </div>
              </el-col>
              <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Anchore.png">
                  <span>Interoperable</span>
                  <span>Unlocking scalability and interoperability by investing in Binance Smart Chain and Polkadot’s blockchain.</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :xl="{span:6}" :lg="{span:6}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Persentage.png">
                  <span>Asset Classes</span>
                  <span>Suite of financial derivative products: fiat currencies, crypto currencies, stocks, market indices, and commodities (xUSD, xBTC, xGOLD, xTesla, others).</span>
                </div>
              </el-col>
              <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Calendar.png">
                  <span>Issuance & Trading</span>
                  <span>Smart contract issuance and trading of derivates secured by the underlying value of the DOWS. </span>
                </div>
              </el-col>
              <el-col :xl="{span:6,offset:3}" :lg="{span:6,offset:3}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
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
            <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">$1.2 Quadrillion Derivatives Market</span>
            <span class="wow bounceInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">Bringing financial derivatives to the ever-growing DeFi space.</span>
          </div>
          <div class="market-content">
            <el-row :gutter="24">
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Play.png">
                  <span>Shadows DApp</span>
                  <span>Shadows DApp is our web-based derivatives platform to issue, trade, and stake derivative asset classes.</span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Shield.png">
                  <span>DOWS Token</span>
                  <span>DOWS, the “Wall St.” token, is the value connection pipeline for real world assets to be mapped onto the chain.</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Anchore.png">
                  <span>Interoperable</span>
                  <span>Unlocking scalability and interoperability by investing in Binance Smart Chain & Polkadot’s blockchain.</span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Persentage.png">
                  <span>Asset Classes</span>
                  <span>Suite of financial derivative products: fiat currency, crypto currency, stocks, market indices, and commodities (xUSD, xBTC, xGOLD, xTesla, others).</span>
                </div>
              </el-col>
            </el-row>
            <el-row>
              <el-col :sm="{span:10}" :xs="{span:10}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
                  <img src="../../assets/image/dashboard/icon/Calendar.png">
                  <span>Issuance & Trading</span>
                  <span>Smart contract issuance and trading of derivates secured by the underlying value of the DOWS. </span>
                </div>
              </el-col>
              <el-col :sm="{span:10,offset:4}" :xs="{span:10,offset:4}">
                <div class="market-contentChild wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
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
    <Trader />
    <Description />
    <Platform />
    <Cooperation />
    <Foot />
  </div>
</template>

<script>

// import { WOW } from 'wowjs'
import Top from '@/components/dashboardView/top/index'
import Description from '@/components/dashboardView/description/index'
import Platform from '@/components/dashboardView/platform/index'
import Cooperation from '@/components/dashboardView/cooperation/index'
import Foot from '@/components/dashboardView/foot/index'
import Trader from '@/components/dashboardView/trader/index'
export default {
  name: 'Dashboard',
  components: { Trader, Foot, Cooperation, Platform, Description, Top }
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
  background: url("../../assets/image/dashboard/SHADOWS_Description 2.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  top: -4px;
  width: 100%;
}
.pc-content {
  max-width: 1600px;
    margin: auto;
  display: block;
}
.mobile-content {
  display: none;
}
.market {
  text-align: center;
  padding-top: 30px;

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
  position: relative;
  background: linear-gradient(-90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
}
.market-title {
  height: 207px;
}
.market-title > span:nth-of-type(1) {
  font-family: Arboria-Bold;
  display: block;
  width: 100%;
  height: 75px;
  line-height: 75px;
  color: #fff;
  font-size: 54px;
}
.market-title > span:nth-of-type(2) {
  font-family: Arboria;
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
  font-family: Arboria-Bold;
  font-size: 26px;
  margin-top: 22px;
}
.market-contentChild > span:nth-of-type(2) {
  margin-top: 18px;
  font-size: 16px;
  line-height: 1.3;
}



  @media screen and (max-width: 1000px){
  
  .market-title > span:nth-of-type(1) {
   
    width: 100%;
    padding-left: 0%;
    padding-right: 0%;
    height: 26px;
    line-height: 28px;
    font-size: 32px;
    
  }
  .market-title > span:nth-of-type(2) {
    width: 100%;
    padding-left: 0%;
    padding-right: 0%;
    font-size: 16px;
    line-height: 1.3;
  }
  .market-content {
    width: 80%;
  }
  
}




@media (max-width: 600px) {
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
    font-family: Arboria-Bold;
    font-size: 24px;
    width: 100%;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    /* margin-left: 10%; */
    height: 35px;
    line-height: 28px;
    color: #fff;
    
  }
  .market-title > span:nth-of-type(2) {
    display: block;
    width: 100%;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    margin-top: 30px;
    color: #fff;
    font-size: 16px;
  }
  .market-content {
    width: 80%;
  }
  .market-contentChild {
    text-align: left;
    margin-bottom: 50px;
  }
  .market-contentChild > img {
    text-align: left;
    width: 30px;
    height: 30px;
  }
  .market-contentChild > span {
    text-align: left;
    color: #fff;
    display: block;
  }
  .market-contentChild > span:nth-of-type(1) {
    text-align: left;
    font-size: 16px;
    margin-top: 10px;
    font-family: Arboria-Bold;
  }
  .market-contentChild > span:nth-of-type(2) {
    text-align: left;
    line-height: 16px;
    font-size: 13px;
    margin-top: 5px;
  }
}
</style>

