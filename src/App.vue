<template>
  <div id="app">
    <nav class="header">
      <el-row type="flex" style="background-color: rgba(0,0,0,0);margin: 0;z-index: 1;padding: 0;">
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="6">
          <ul class="nav">
            <li class="logoImg"><router-link class="logoLinkImg" to="/"><img class="logoImgImg" src="./assets/image/dashboard/logo.png"></router-link></li>
          </ul>
        </el-col>
        <el-col :xl="12" :lg="12" :md="12" :sm="12" :xs="12">
          <ul class="nav">
            <el-row>
              <el-col :xl="5" :lg="5" :md="5">
                <li class="header-li"><router-link to="features">Features</router-link></li>
              </el-col>
              <el-col :xl="4" :lg="5" :md="4">
                <li class="header-li"><router-link to="roadmap">Roadmap</router-link></li>
              </el-col>
              <el-col :xl="4" :lg="5" :md="4">
                <li class="header-li"><a href="https://shadowsnetwork.medium.com/" target="_blank">Medium</a></li>
              </el-col>
              <el-col :xl="4" :lg="4" :md="4">
                <li class="header-li"><a href="https://shadows-blockchain.gitbook.io/shadows/" target="_blank">Docs</a></li>
              </el-col>
              <el-col :xl="4" :lg="4" :md="4">
                <li class="header-li"><a href="https://github.com/ShadowsNetwork/whitepaper/blob/main/ShadowsWhitepaperV2.0General.pdf" target="_blank">Whitepaper</a></li>
              </el-col>
            </el-row>
          </ul>
        </el-col>
        <el-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2" />
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1">
          <a href="https://t.me/Shadows_defi" target="_blank"><img class="fly" src="./assets/image/dashboard/fly.png"></a>
        </el-col>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1" style="text-align:right;">
          <a href="https://twitter.com/shadows_defi" target="_blank"><img class="twitter" src="./assets/image/dashboard/twitter.png"></a>
        </el-col>
        <div v-show="showTrue" class="mobile-drop-button" :showTrue="showTrue" @click="dropShowTrue">
          <div class="dropLine" />
          <div class="dropLine" />
          <div class="dropLine" />
        </div>
        <div v-show="showErr" class="mobile-drop-button" :showErr="showErr" @click="dropShowFalse">
          <div class="error" />
        </div>
      </el-row>
    </nav>
    <div v-show="show" class="mobile-drop" :show="show">
      <div @click="dropShow"><router-link to="/features">Features</router-link></div>
      <div @click="dropShow"><router-link to="/roadmap">Roadmap</router-link></div>
      <div @click="dropShow"><a href="https://shadowsnetwork.medium.com/" target="_blank">Medium</a></div>
      <div @click="dropShow"><a href="https://shadows-blockchain.gitbook.io/shadows/" target="_blank">Docs</a></div>
      <div @click="dropShow"><a href="http://app.shadows.link/" target="_blank">Staking</a></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'App',
  data() {
    return {
      show: false,
      showErr: false,
      showTrue: true
    }
  },
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() },
  methods: {
    dropShow() {
      this.show = !this.show
      this.showTrue = true
      this.showErr = false
    },
    dropShowTrue() {
      this.show = true
      this.showTrue = false
      this.showErr = true
    },
    dropShowFalse() {
      this.show = false
      this.showTrue = true
      this.showErr = false
    }
  }
}
</script>
<style scoped>
  nav {
    z-index: 1;
  }
  .header {
    text-align: center;
    max-width: 1200px;
    margin: auto;
    background: rgba(0,0,0,0);
    line-height: 50px;
    display: block;
    font-family: 'Arboria-Bold';
  }
  li {
    display: inline-block;
    flex: 1;
  }
  .header-li{
    color: white;
    list-style: none;
    font-size: 14px;
  }
.header-li a:hover{
  font-size: 15px;
}
.logoImgImg {
      width: 150px;
      display: block;
    }
  .fly {
    margin-left: 20px;
    width: 30px;
    margin-top: 28px;
  }
  .twitter {
    width: 30px;
    margin-top: 28px;
  }
  .contact {
    width: 128px;
    height: 33px;
    line-height: 16.5px;
    color: #fff;
    font-size: 14px;
    background: #D02467;
    border: none;
    border-radius: 30px;
    font-weight: 700;
    margin-top: 25px;
    margin-left: 15px;
  }
  .mobile-drop-button {
    display: none;
  }
  .el-icon-s-operation {
    color: #fff;
    font-size: 25px;
  }
  .mobile-drop {
    position: absolute;
    top: 50px;
    width: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 999;
  }
  @media screen and (max-width: 992px) {
    .header{
      height: 50px;
    }
    li {
      display: none;
    }
    .mobile-drop-button {
      display: block;
      position: absolute;
      right: 10px;
      top: 10px;
    }
    .logoImg {
      width: 150px;
      display: block;
    }
    .logoImgImg {
      width: 150px;
      display: block;
    }
    .fly {
      width: 20px;
      margin-top: 20px;
    }
    .twitter {
      width: 20px;
      margin-left: 30%;
      margin-top: 20px;
    }
    .contact {
      width: 100px;
      height: 28px;
      font-size: 14px;
      margin-left: 15px;
      margin-top: 20px;
    }
    .mobile-drop > div {
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      color: #fff;
      cursor: pointer;
    }
    .mobile-drop > div:active {
      background: rgba(0,0,0,0.7);
    }
    @media screen and (max-width: 600px) {
      .logoImg {
        display: block;
        position: absolute;
        top: 16px;
        left: 16px;
      }
      .fly {
        display: none;
      }
      .twitter {
        display: none;
      }
      .contact {
        display: none;
      }
      .mobile-drop-button {
        font-family: 'Arboria-Bold';
        position: absolute;
        top: 10px;
      }
      .dropLine {
        font-family: 'Arboria-Bold';
        width: 20px;
        height: 3px;
        background: #05DAAC;
        margin-top: 5px;
      }
      .mobile-drop > div {
        font-family: 'Arboria-Bold';
        display: block;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        cursor: pointer;
      }
      .error::before,
      .error::after {
        content: "";
        position: absolute;
        height: 25px;
        width: 3px;
        top: 0px;
        right: 8px;
        background: #05DAAC;
      }
      .error::before {
        transform: rotate(45deg);
      }
      .error::after {
        transform: rotate(-45deg);
      }
    }
  }
</style>
