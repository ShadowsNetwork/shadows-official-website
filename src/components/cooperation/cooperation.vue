<template>
  <div class="cooperation">
    <div class="divLine">
      <div class="line" />
    </div>
    <div class="cooperation-title wow bounceInUp">
      <span>Partners</span>
      <span>Proudly powered by an extensive network of industry leaders.</span>
    </div>
    <div class="partners">
      <div class="partnersOne">
        <a href="https://www.a195.capital/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 3.png"/></a>
        <a><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 4.png"/></a>
        <a href="https://www.alphabit.fund/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 5.png"/></a>
        <a href="https://au21.capital/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 6.png"/></a>
        <a href="https://www.bitcoin.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 7.png"/></a>
      </div>
      <div class="partnersTwo">
        <a href="https://www.blocksync.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 8.png"/></a>
        <a href="http://candaq.com/#/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 9.png"/></a>
        <a href="https://www.chaincapital.group/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 10.png"/></a>
        <a href="http://consensus-lab.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 11.png"/></a>
        <a href="https://cryptomeriacapital.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 12.png"/></a>
      </div>
      <div class="partnersThree">
        <a href="https://dfg.group/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 13.png"/></a>
        <a href="https://duckdao.io/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 14.png"/></a>
        <a href="https://gbv.capital/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 15.png"/></a>
        <a href="https://innovion.co/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 16.png"/></a>
        <a href="http://jrr.group/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 17.png"/></a>
      </div>
      <div class="partnersFour">
        <a><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 18.png"/></a>
        <a href="https://master.ventures/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 19.png"/></a>
        <a><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 20.png"/></a>
        <a href="https://lichanglc.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 21.png"/></a>
        <a href="https://www.ngc.fund/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 22.png"/></a>
      </div>
      <div class="partnersFive">
        <a href="https://www.polka.fund/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 23.png"/></a>
        <a href="http://waterdrip.io/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 24.png"/></a>
        <a><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 25.png"/></a>
        <a href="https://3commas.io/zh" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 26.png"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Cooperation',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.cooperation {
  font-family: Arboria;
  padding-bottom: 450px;
}
.divLine {
  width: 100%;
  height: 320px;
}
.line {
  width: 80%;
  height: 2px;
  position: relative;
  margin-left: 10%;
  background: linear-gradient(90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
}
.cooperation-title > span:nth-of-type(1) {
  font-family: Arboria;
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #FFFBFB;
}
.cooperation-title > span:nth-of-type(2) {
  display: block;
  width: 100%;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFBFB;
  margin-top: 15px;
}
.partners {
  width: 1185px;
  margin-left: calc((100% - 1185px) / 2);
  margin-top: 112px;
}
.partnersOne > a:nth-of-type(1) > img {
  width: 80px;
  margin-left: 70px;
}
.partnersOne > a:nth-of-type(2) > img {
  width: 167px;
  margin-left: 95px;
}
.partnersOne > a:nth-of-type(3) > img {
  width: 198px;
  margin-left: 56px;
}
.partnersOne > a:nth-of-type(4) > img {
  width: 62px;
  margin-left: 93px;
}
.partnersOne > a:nth-of-type(5) > img {
  width: 162px;
  margin-left: 98px;
}
.partnersTwo {
  height: 71px;
  display: flex;
  align-items: center;
  margin-top: 37px;
}
.partnersTwo > a:nth-of-type(1) > img {
  width: 158px;
}
.partnersTwo > a:nth-of-type(2) > img {
  width: 137px;
  margin-left: 91px;
}
.partnersTwo > a:nth-of-type(3) > img {
  width: 82px;
  margin-left: 149px;
}
.partnersTwo > a:nth-of-type(4) > img {
  width: 161px;
  margin-left: 101px;
}
.partnersTwo > a:nth-of-type(5) > img {
  width: 160px;
  margin-left: 50px;
}
.partnersThree {
  height: 119px;
  display: flex;
  align-items: center;
  margin-top: 26px;
}
.partnersThree > a:nth-of-type(1) > img {
  width: 126px;
  margin-left: 20px;
}
.partnersThree > a:nth-of-type(2) > img {
  width: 156px;
  margin-left: 91px;
}
.partnersThree > a:nth-of-type(3) > img {
  width: 100px;
  margin-left: 110px;
}
.partnersThree > a:nth-of-type(4) > img {
  width: 130px;
  margin-left: 108px;
}
.partnersThree > a:nth-of-type(5) > img {
  width: 119px;
  margin-left: 85px;
}
.partnersFour {
  height: 89px;
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.partnersFour > a:nth-of-type(1) > img {
  width: 50px;
  margin-left: 70px;
}
.partnersFour > a:nth-of-type(2) > img {
  width: 120px;
  margin-left: 134px;
}
.partnersFour > a:nth-of-type(3) > img {
  width: 156px;
  margin-left: 100px;
}
.partnersFour > a:nth-of-type(4) > img {
  width: 106px;
  margin-left: 92px;
}
.partnersFour > a:nth-of-type(5) > img {
  width: 114px;
  margin-left: 100px;
}
.partnersFive {
  height: 66px;
  display: flex;
  align-items: center;
  margin-top: 66px;
}
.partnersFive > a:nth-of-type(1) > img {
  width: 161px;
  margin-left: 130px;
}
.partnersFive > a:nth-of-type(2) > img {
  width: 148px;
  margin-left: 73px;
}
.partnersFive > a:nth-of-type(3) > img {
  width: 161px;
  margin-left: 82px;
}
.partnersFive > a:nth-of-type(4) > img {
  width: 153px;
  margin-left: 73px;
}
@media screen and (max-width: 1220px) {
  .divLine {
    width: 100%;
    height: 50px;
  }
  .cooperation {
    padding-bottom: 100px;
  }
  .cooperation-title > span:nth-of-type(1) {
    font-size: 24px;
  }
  .cooperation-title > span:nth-of-type(2) {
    font-size: 16px;
    margin-top: 0;
  }
  .partners {
    width: 360px;
    margin-left: calc((100% - 360px) / 2);
    margin-top: 40px;
  }
  .partnersOne {
    height: 35px;
    display: flex;
    align-items: center;
  }
  .partnersOne > a:nth-of-type(1) > img {
    width: 30px;
    margin-left: 25px;
  }
  .partnersOne > a:nth-of-type(2) > img {
    width: 43px;
    margin-left: 30px;
  }
  .partnersOne > a:nth-of-type(3) > img {
    width: 52px;
    margin-left: 20px;
  }
  .partnersOne > a:nth-of-type(4) > img {
    width: 35px;
    margin-left: 20px;
  }
  .partnersOne > a:nth-of-type(5) > img {
    width: 50px;
    margin-left: 30px;
  }
  .partnersTwo {
    height: 45px;
    display: flex;
    align-items: center;
    margin-top: 37px;
  }
  .partnersTwo > a:nth-of-type(1) > img {
    width: 41px;
    margin-left: 30px;
  }
  .partnersTwo > a:nth-of-type(2) > img {
    width: 40px;
    margin-left: 20px;
  }
  .partnersTwo > a:nth-of-type(3) > img {
    width: 40px;
    margin-left: 20px;
  }
  .partnersTwo > a:nth-of-type(4) > img {
    width: 45px;
    margin-left: 30px;
  }
  .partnersTwo > a:nth-of-type(5) > img {
    width: 42px;
    margin-left: 30px;
  }
  .partnersThree {
    height: 45px;
    display: flex;
    align-items: center;
    margin-top: 26px;
  }
  .partnersThree > a:nth-of-type(1) > img {
    width: 40px;
    margin-left: 30px;
  }
  .partnersThree > a:nth-of-type(2) > img {
    width: 40px;
    margin-left: 20px;
  }
  .partnersThree > a:nth-of-type(3) > img {
    width: 45px;
    margin-left: 25px;
  }
  .partnersThree > a:nth-of-type(4) > img {
    width: 40px;
    margin-left: 30px;
  }
  .partnersThree > a:nth-of-type(5) > img {
    width: 40px;
    margin-left: 20px;
  }
  .partnersFour {
    height: 45px;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .partnersFour > a:nth-of-type(1) > img {
    width: 25px;
    margin-left: 30px;
  }
  .partnersFour > a:nth-of-type(2) > img {
    width: 40px;
    margin-left: 40px;
  }
  .partnersFour > a:nth-of-type(3) > img {
    width: 40px;
    margin-left: 30px;
  }
  .partnersFour > a:nth-of-type(4) > img{
    width: 40px;
    margin-left: 20px;
  }
  .partnersFour > a:nth-of-type(5) > img {
    width: 42px;
    margin-left: 30px;
  }
  .partnersFive {
    height: 30px;
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .partnersFive > a:nth-of-type(1) > img {
    width: 45px;
    margin-left: 50px;
  }
  .partnersFive > a:nth-of-type(2) > img {
    width: 45px;
    margin-left: 30px;
  }
  .partnersFive > a:nth-of-type(3) > img {
    width: 45px;
    margin-left: 20px;
  }
  .partnersFive > a:nth-of-type(4) > img {
    width: 45px;
    margin-left: 30px;
  }
}
</style>

