<template>
  <div class="foot">
    <div class="foot-content">
      <div class="general">
        <ul>
          <li class="title"><a>General</a></li>
          <li class="childText"><a>Home</a></li>
          <li class="childText"><a>Features</a></li>
          <li class="childText"><a>Medium</a></li>
          <li class="childText"><a>About</a></li>
          <li class="childText"><a>Docs</a></li>
        </ul>
      </div>
      <div class="learn">
        <ul>
          <li class="title"><a>Learn</a></li>
          <li class="childText"><a>Whitepaper</a></li>
          <li class="childText"><a>Tokenomics</a></li>
        </ul>
      </div>
      <div class="contact">
        <div class="contactImg">
          <img src="../../assets/image/dashboard/fly.png"/>
          <img src="../../assets/image/dashboard/twiter.png"/>
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
      <img class="footBottom-img" src="../../assets/image/dashboard/footLogo.png"/>
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
  padding-bottom: 30px;
  background: #000;
  font-family: Arboria;
}
.foot-content {
  display: flex;
}
.general {
  color: #fff;
  margin-top: 30px;
  margin-left: 10%;
}
li {
  list-style: none;
  margin-top: 30px;
}
.title {
  font-weight: bold;
  font-size: 22px;
}
.childText {
  font-weight: 200;
  font-size: 18px;
}
.learn {
  color: #fff;
  margin-top: 30px;
  margin-left: 10%;
}
.contact {
  width: 320px;
  margin-left: 35%;
  margin-top: 50px;
  position: relative;
}
.contactImg {
  width: 100%;
  display: flex;
  position: relative;
}
.contactImg > img {
  width: 33px;
  position: absolute;
}
.contactImg > img:nth-of-type(1) {
  right: 61px;
}
.contactImg > img:nth-of-type(2) {
  right: 0;
}
.contact-text {
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
  width: 163.64px;
  height: 43px;
  font-weight: bold;
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
  margin-left: 12%;
  margin-top: 80px;
  display: flex;
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
</style>

