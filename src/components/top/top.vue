<template>
  <div class="top">
    <img src="../../assets/image/dashboard/topBac.jpg">
    <div>
      <div class="topText-title wow slideInLeft">
        <span>Redefining</span>
        <span>investment</span>
        <span>opportunities</span>
        <span>on chain.</span>
      </div>
      <div class="topText-text wow slideInLeft">
        <span>Shadows is a hub for issuing, trading, lending and borrowing synthetic assets.</span>
      </div>
      <div class="topText-button wow slideInLeft">
        <button>Whitepaper</button>
        <button>Tokenomics</button>
      </div>
    </div>
    <img class="wow slideInRight" src="../../assets/image/dashboard/newDash.png">
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Top',
  mounted() { new WOW().init() }
}
</script>

<style scoped>
.top {
  position: relative;
}
.top > img:nth-of-type(1) {
  width: 100%;
}
.top > img:nth-of-type(2) {
  width: 40%;
  position: absolute;
  top: 20%;
  right: 10%;
}
.topText-title {
  position: absolute;
  bottom: 45%;
  left: 10%;
  color: #fff;
  font-size: 70px;
  font-weight: 700;
}
.topText-title > span {
  display: block;
}
.topText-text {
  width: 454px;
  position: absolute;
  left: 10%;
  bottom: 35%;
  font-size: 24px;
  color: #fff;
}
.topText-button {
  display: flex;
  position: absolute;
  left: 10%;
  bottom: 25%;
  font-weight: 700;
}
.topText-button > button {
  width: 170px;
  height: 43px;
  line-height: 43px;
  color: white;
  font-size: 15px;
  background: #2DCBA9;
  border: none;
  border-radius: 100px;
}
.topText-button > button:nth-of-type(2) {
  margin-left: 13px;
}
@media (max-width: 1200px) {
  .topText-title {
    position: absolute;
    bottom: 40%;
    left: 10%;
    color: #fff;
    font-size: 40px;
  }
  .topText-title > span {
    display: block;
  }
  .topText-text {
    width: 300px;
    position: absolute;
    left: 10%;
    bottom: 30%;
    font-size: 18px;
    color: #fff;
  }
  .topText-button {
    display: flex;
    position: absolute;
    left: 10%;
    bottom: 20%;
  }
  .topText-button > button {
    width: 100px;
    line-height: 30px;
    color: white;
    font-size: 13px;
    background: #2DCBA9;
    border: none;
    border-radius: 100px;
  }
  .topText-button > button:nth-of-type(2) {
    margin-left: 13px;
  }
}
@media (max-width: 800px) {
  .top > img:nth-of-type(2) {
    width: 30%;
    position: absolute;
    top: 40%;
    right: 10%;
  }
  .topText-title {
    position: absolute;
    bottom: 40%;
    left: 10%;
    color: #fff;
    font-size: 20px;
  }
  .topText-title > span {
    display: block;
  }
  .topText-text {
    width: 300px;
    position: absolute;
    left: 10%;
    bottom: 30%;
    font-size: 16px;
    color: #fff;
  }
  .topText-button {
    position: absolute;
    left: 10%;
    bottom: 20%;
  }
  .topText-button > button {
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: white;
    font-size: 13px;
    background: #2DCBA9;
    border: none;
    border-radius: 100px;
  }
  .topText-button > button:nth-of-type(2) {
    margin-left: 13px;
  }
}
@media (max-width: 450px) {
  .top > img:nth-of-type(2) {
    position: absolute;
    top: 40%;
    right: 7%;
  }
  .topText-title {
    position: absolute;
    bottom: 40%;
    left: 7%;
    color: #fff;
    font-size: 13px;
  }
  .topText-title > span {
    display: block;
  }
  .topText-text {
    width: 200px;
    position: absolute;
    left: 7%;
    bottom: 20%;
    font-size: 12px;
    color: #fff;
  }
  .topText-button {
    position: absolute;
    left: 7%;
    bottom: 10%;
  }
  .topText-button > button {
    width: 90px;
    height: 20px;
    line-height: 20px;
    color: white;
    font-size: 13px;
    background: #2DCBA9;
    border: none;
    border-radius: 100px;
  }
  .topText-button > button:nth-of-type(2) {
    margin-left: 13px;
  }
}
</style>

