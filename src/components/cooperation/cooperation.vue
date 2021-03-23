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
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 3.png" style="width: 80px;margin-left: 70px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 4.png" style="width: 167px;margin-left: 95px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 5.png" style="width: 198px;margin-left: 56px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 6.png" style="width: 62px;margin-left: 93px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 7.png" style="width: 162px;margin-left: 98px"/>
      </div>
      <div class="partnersTwo">
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 8.png" style="width: 158px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 9.png" style="width: 137px;margin-left: 91px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 10.png" style="width: 82px;margin-left: 149px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 11.png" style="width: 161px;margin-left: 101px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 12.png" style="width: 160px;margin-left: 50px"/>
      </div>
      <div class="partnersThree">
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 13.png" style="width: 126px;margin-left: 20px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 14.png" style="width: 156px;margin-left: 91px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 15.png" style="width: 100px;margin-left: 110px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 16.png" style="width: 130px;margin-left: 108px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 17.png" style="width: 119px;margin-left: 85px"/>
      </div>
      <div class="partnersFour">
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 18.png" style="width: 50px;margin-left: 70px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 19.png" style="width: 120px;margin-left: 134px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 20.png" style="width: 156px;margin-left: 100px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 21.png" style="width: 106px;margin-left: 92px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 22.png" style="width: 114px;margin-left: 100px"/>
      </div>
      <div class="partnersFive">
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 23.png" style="width: 161px;margin-left: 130px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 24.png" style="width: 148px;margin-left: 73px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 25.png" style="width: 161px;margin-left: 82px"/>
        <img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../assets/image/dashboard/partners/image 26.png" style="width: 153px;margin-left: 73px"/>
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
.partnersTwo {
  height: 71px;
  display: flex;
  align-items: center;
  margin-top: 37px;
}
.partnersThree {
  height: 119px;
  display: flex;
  align-items: center;
  margin-top: 26px;
}
.partnersFour {
  height: 89px;
  display: flex;
  align-items: center;
  margin-top: 40px;
}
.partnersFive {
  height: 66px;
  display: flex;
  align-items: center;
  margin-top: 66px;
}
</style>

