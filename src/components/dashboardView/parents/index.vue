<template>
  <div class="cooperation">
    <div class="divLine">
      <div class="line" />
    </div>
    <div class="cooperation-title wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s" >
      <span>Partners</span>
    </div>
    <div class="partners">
      <div class="partnersOne">
        <a href="https://poly.network/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/poly.svg"/></a>
        <a href="https://www.bridgemutual.io" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/bridge.png"/></a>
        <a href="https://diadata.org/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/DIA.png"/></a>
        <a href="https://kylin.network/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/kylin.png"/></a>
        <a href="https://linear.finance/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/Linear.png"/></a>
      </div>
      <div class="partnersTwo">
        <a href="https://yop.finance/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/YOP.png"/></a>
        <!-- <a href="https://www.basics.vip/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/Basics.png"/></a> -->
        <a href="https://tokeninsight.com/" target="_blank"><img class="wow pulse" data-wow-duration="1.5s" data-wow-delay="0.3s" src="../../../assets/image/dashboard/parents/Tokeninsight.png"/></a>
      </div>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Parents',
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
  font-family: Arboria-Bold;
  display: block;
  width: 100%;
  font-size: 54px;
  line-height: 65px;
  text-align: center;
  color: #FFFBFB;
}
.cooperation-title > span:nth-of-type(2) {
  display: block;
  font-family: Arboria;
  width: 100%;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #FFFBFB;
  margin-top: 15px;
}
.partners {
  width: 1085px;
  margin-left: calc((100% - 1085px) / 2);
  margin-top: 112px;
}
.partnersOne {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.partnersOne > a:nth-of-type(1) > img {
  width: 162px;
}
.partnersOne > a:nth-of-type(2) > img {
  width: 130px;
}
.partnersOne > a:nth-of-type(3) > img {
  width: 150px;
}
.partnersOne > a:nth-of-type(4) > img {
  width: 152px;
}
.partnersOne > a:nth-of-type(5) > img {
  width: 152px;
}
.partnersTwo {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}
.partnersTwo > a:nth-of-type(1) > img {
  width: 162px;
}
.partnersTwo > a:nth-of-type(2) > img {
  width: 130px;
  margin-left: 140px;
}
.partnersTwo > a:nth-of-type(3) > img {
  width: 150px;
  margin-left: 140px;
}
.partnersTwo > a:nth-of-type(4) > img {
  width: 152px;
}

@media screen and (max-width: 1220px) {
  .divLine {
    width: 100%;
    height: 80px;
  }

  .cooperation {
    padding-bottom: 100px;
  }

  .cooperation-title > span:nth-of-type(1) {
    font-size: 24px;
  }

  .cooperation-title > span:nth-of-type(2) {
    display: block;
    width: 100%;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    line-height: 20px;
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
    justify-content: space-between;
  }

  .partnersOne > a:nth-of-type(1) > img {
    width: 50px;
  }

  .partnersOne > a:nth-of-type(2) > img {
    width: 43px;
  }

  .partnersOne > a:nth-of-type(3) > img {
    width: 52px;
  }

  .partnersOne > a:nth-of-type(4) > img {
    width: 35px;
  }

  .partnersOne > a:nth-of-type(5) > img {
    width: 50px;
  }

  .partnersTwo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .partnersTwo > a:nth-of-type(1) > img {
    width: 50px;
  }

  .partnersTwo > a:nth-of-type(2) > img {
    width: 50px;
    margin-left: 60px;
  }

  .partnersTwo > a:nth-of-type(3) > img {
    width: 50px;
    margin-left: 60px;
  }
}

@media screen and (max-width: 600px) {

  .cooperation {
    padding-bottom: 100px;
  }
  .cooperation-title > span:nth-of-type(1) {
    font-size: 24px;
    line-height: 35px;
  }
  .cooperation-title > span:nth-of-type(2) {
    display: block;
    width: 100%;
    text-align: center;
    padding-left: 20%;
    padding-right: 20%;
    line-height: 18px;
    font-size: 16px;
    margin-top: 0;
  }
  .partners {
    width: 360px;
    margin-left: calc((100% - 360px) / 2);
    margin-top: 60px;
  }
  .partnersOne {
    height: 35px;
    display: flex;
    align-items: center;
  }
}
</style>

