<template>
  <div class="description">
    <div class="line"/>
    <div class="description-content wow fadeIn" data-wow-duration="4.5s" data-wow-delay="0.3s">
      <span>“Collateralizing renBTC on Shadows bolsters Ren’s mission of cross-chain interoperability by providing greater utility for digital assets regardless of blockchain.”</span>
      <span>Michael Burgess</span>
      <span>COO, Ren Protocol</span>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Description',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.description {
  width: 100%;
  color: #fff;
  padding-bottom: 183px;
  font-family: Arboria;
  font-style: normal;
}
.line {
  width: 80%;
  height: 2px;
  position: relative;
  margin-left: 10%;
  background: linear-gradient(90deg, #E20D60 0%, #1D4964 60.94%);
  opacity: 0.5;
}
.description-content > span:nth-of-type(1) {
  font-weight: normal;
  display: block;
  width: 60%;
  margin-left: 20%;
  font-size: 35px;
  letter-spacing: 0.1em;
  /* text-transform: uppercase; */
  margin-top: 249px;
}
.description-content > span:nth-of-type(2) {
  display: block;
  font-weight: bold;
  width: 60%;
  margin-top: 30px;
  margin-left: 20%;
  font-size: 18px;
  text-align: right;
  letter-spacing: 0.15em;
  /* text-transform: uppercase; */
}
.description-content > span:nth-of-type(3) {
  display: block;
  width: 60%;
  margin-top: 5px;
  margin-left: 20%;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  letter-spacing: 0.02em;
}
@media screen and (max-width: 600px) {
  .description {
    padding-bottom: 50px;
  }
  .description-content > span:nth-of-type(1) {
    width: 100%;
    margin: 0%;
    padding-left: 15%;
    padding-right: 15%;
    font-size: 18px;
    margin-top: 100px;
  }
  .description-content > span:nth-of-type(2) {
    width: 90%;
    margin-left: 0%;
    font-size: 16px;
    margin-top: 30px;
    text-align: right;
  }
  .description-content > span:nth-of-type(3) {
    font-size: 14px;
    width: 90%;
    margin-top: 3px;
    margin-left: 0%;
  }
}
</style>

