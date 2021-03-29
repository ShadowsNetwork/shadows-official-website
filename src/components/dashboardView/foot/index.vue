<template>
  <div class="foot">
    <div class="foot-content">
      <div class="general">
        <ul>
          <li class="title">General</li>
          <li class="childText"><router-link to="/">Home</router-link></li>
          <li class="childText"><router-link to="/features">Features</router-link></li>
          <li class="childText"><a href="https://shadowsnetwork.medium.com/" target="_blank">Medium</a></li>
          <li class="childText"><a>About</a></li>
          <li class="childText"><a href="https://shadows-blockchain.gitbook.io/shadows/" target="_blank">Docs</a></li>
        </ul>
      </div>
      <div class="learn">
        <ul>
          <li class="title">Learn</li>
          <li class="childText"><a href="https://github.com/ShadowsNetwork/whitepaper/blob/main/ShadowsNetworkWhitePaper_EN.pdf" target="_blank">Whitepaper</a></li>
          <li class="childText"><a href="https://etherscan.io/token/0x661ab0ed68000491d98c796146bcf28c20d7c559" target="_blank">Tokenomics</a></li>
        </ul>
      </div>
      <div class="contact">
        <div class="contactImg">
          <a href="https://t.me/Shadows_defi" target="_blank"><img src="../../../assets/image/dashboard/fly.png"/></a>
          <a href="https://twitter.com/shadows_defi" target="_blank"><img src="../../../assets/image/dashboard/twitter.png"/></a>
        </div>
        <div class="contact-text">
          <span>Subscribe to our newsletter</span>
          <span> to hear about our updates.</span>
        </div>
        <div class="contactButton">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
    <div class="footBottom">
      <img class="footBottom-img" src="../../../assets/image/dashboard/footLogo.png"/>
      <span>© 2021 Shadows - Terms of Use | Privacy Policy | Cookie Settings</span>
    </div>
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'Foot',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.foot {
  width: 100%;
  padding-bottom: 30px;
  background: #000;
  font-family: Arboria;
}
.foot-content {
  display: flex;
  position: relative;
  margin-left: 20%;
  margin-right: 20%;
}
.general {
  color: #fff;
  margin-top: 30px;
  margin-left: 12%;
}
ul{
  padding: 0;
}
li {
  list-style: none;
  margin-top: 30px;
}
.title {
  font-size: 24px;
}
.childText {
  font-size: 18px;
}
.learn {
  color: #fff;
  margin-top: 30px;
  margin-left: 10%;
}
.contact {
  position: absolute;
  width: 320px;
  top: 50px;
  right: 12%;
}
.contactImg {
  width: 100%;
  display: flex;
  position: relative;
}
.contactImg > a > img {
  width: 33px;
  position: absolute;
}
.contactImg > a:nth-of-type(1) > img {
  right: 61px;
}
.contactImg > a:nth-of-type(2) > img {
  right: 0;
}
.contact-text {
  font-family: Arboria-Bold;
  width: 100%;
  text-align: right;
  color: #fff;
  position: absolute;
  top: 70px;
}
.contact-text > span {
  display: block;
  font-size: 24px;
  color: #FFFDFD;
}
.contactButton {
  width: 100%;
  position: absolute;
  top: 160px;
}
.contactButton > button {
  font-family: Arboria-Bold;
  width: 170px;
  height: 43px;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  color: #FFFEFE;
  background: #05DAAC;
  border-radius: 100px;
  border: 0;
  position: absolute;
  right: 0;
  justify-content: center;
  outline: none;
}
.footBottom {
  width: 100%;
  text-align: center;
  margin-top: 80px;
  height: 24px;
  line-height: 24px;
}
.footBottom-img {
  width: 196px;
}
.footBottom > span {
  margin-left: 20px;
  font-size: 12px;
  color: #FFFFFF;
}

@media screen and (max-width: 3000px) {
  .foot-content {
    margin-left: 20%;
    margin-right: 20%;
  }
  .footBottom {
    
    margin-top: 80px;
  }
}

@media screen and (max-width: 2000px) {
  .foot-content {
    margin-left: 10%;
    margin-right: 10%;
  }
  .footBottom {
    
    margin-top: 80px;
  }
}

@media screen and (max-width: 1600px) {
  .foot-content {
    margin-left: 0%;
    margin-right: 0%;
  }
  .footBottom {
    
    margin-top: 80px;
  }
}

@media screen and (max-width: 1000px) {
  .foot-content {
    margin-left: 0%;
    margin-right: 0%;
  }
  .title {
  font-size: 18px;
}
.childText {
  font-size: 16px;
}
  .contact-text {
    font-family: Arboria-Bold;
    width: 100%;
    text-align: right;
    color: #fff;
    position: absolute;
    top: 70px;
  }
  .contact-text > span {
    display: block;
    font-size: 16px;
    color: #FFFDFD;
  }
  .contactButton {
    width: 100%;
    position: absolute;
    top: 160px;
  }
  .contactButton > button {
      width: 170px;
      height: 43px;
      font-size: 15px;
      line-height: 18px;
    }
  .footBottom {
    
    margin-top: 80px;
  }
}

@media screen and (max-width: 600px) {
  .foot {
    position: relative;
    height: 700px;
  }
  .general {
    color: #fff;
    margin-top: 30px;
    margin-left: 8%;
  }
  li {
    list-style: none;
    margin-top: 30px;
  }
  .title {
    font-family: Arboria-Bold;
    font-size: 18px;
  }
  .childText {
    font-size: 14px;
  }
  .learn {
    color: #fff;
    margin-top: 30px;
    margin-left: 10%;
  }
  .contact {
    width: 100%;
    top: 400px;
    left: 0;
  }

  .contactImg {
    width: 100%;
    display: flex;
    position: relative;
  }
  .contactImg > a > img {
    width: 33px;
    height: 33px;
    position: relative;
  }
  .contactImg > a:nth-of-type(1) > img {
    left: 40px;
  }
  .contactImg > a:nth-of-type(2) > img {
    left: 60px;
  }
  .contact-text {
    width: 100%;
    text-align: left;
    color: #fff;
    position: relative;
    top: 10px;
  }
  .contact-text > span {
    left: 40px;
    position: relative;
    font-size: 14px;
    color: #FFFDFD;
  }
  .contactButton {
    width: 100px;
    position: relative;
    left: 80px;
    top: 30px;
  }
    .contactButton > button {
      font-family: Arboria-Bold;
      width: 140px;
      height: 34px;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #FFFEFE;
      background: #05DAAC;
      border-radius: 100px;
      border: 0;
      position: absolute;
      right: 0;
      justify-content: center;
      outline: none;
    }
  .footBottom {
    margin-left: 0;
    height: 24px;
    line-height: 24px;
    position: absolute;
    bottom: 40px;
    display: block;
  }
  .footBottom-img {
    width: 147px;
    margin-left: 20px;
  }
  .footBottom > span {
    display: block;
    margin-left: 20px;
    font-size: 12px;
    color: #FFFFFF;
  }
}
</style>

