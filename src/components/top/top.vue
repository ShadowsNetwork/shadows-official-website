<template>
  <div class="top">
    <img src="../../assets/image/dashboard/topBac.jpg"/>
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
    <img class="wow slideInRight" src="../../assets/image/dashboard/newDash.png">
  </div>
</template>

<script>
export default {
  name: 'Top'
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
  top: 156px;
  right: 10%;
}
.topText-title {
  position: absolute;
  bottom: 50%;
  left: 144px;
  color: #fff;
  font-size: 70px;
}
.topText-title > span {
  display: block;
}
.topText-text {
  width: 454px;
  position: absolute;
  left: 144px;
  bottom: 45%;
  font-size: 24px;
  color: #fff;
}
.topText-button {
  display: flex;
  position: absolute;
  left: 144px;
  bottom: 40%;
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
@media screen and (max-width: 900px){
  .topText-title {
    position: absolute;
    bottom: 390px;
    left: 144px;
    color: #fff;
    font-size: 50px;
  }
  .topText-title > span {
    display: block;
  }
  .topText-text {
    width: 454px;
    position: absolute;
    left: 144px;
    bottom: 293px;
    font-size: 24px;
    color: #fff;
  }
  .topText-button {
    display: flex;
    position: absolute;
    left: 144px;
    bottom: 223px;
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
}
</style>

