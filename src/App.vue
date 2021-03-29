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
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li"><router-link to="features">Features</router-link></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li"><a href="https://shadowsnetwork.medium.com/" target="_blank">Medium</a></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li"><a>About</a></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li"><a href="https://shadows-blockchain.gitbook.io/shadows/" target="_blank">Docs</a></li>
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
        <div class="mobile-drop-button" @click="dropShow">
          <div class="dropLine"/>
          <div class="dropLine"/>
          <div class="dropLine"/>
        </div>
      </el-row>
    </nav>
    <div v-show="show" class="mobile-drop" :show="show">
      <div><router-link to="/features">Features</router-link></div>
      <div><a href="https://shadowsnetwork.medium.com/" target="_blank">Medium</a></div>
      <div><a>About</a></div>
      <div><a href="https://shadows-blockchain.gitbook.io/shadows/" target="_blank">Docs</a></div>
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
      show: false
    }
  },
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() },
  methods: {
    dropShow() {
      this.show = !this.show
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
    font-weight: bold;
  }
.header-li a:hover{
  font-size: 15px;
  display:block;
  text-decoration:none;
}
.logoImgImg {
      width: 150px;
      display: block;
    }
  .fly {
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
        position: absolute;
        top: 10px;
      }
      .dropLine {
        width: 20px;
        height: 3px;
        background: #05DAAC;
        margin-top: 5px;
      }
      .mobile-drop > div {
        display: block;
        height: 40px;
        line-height: 40px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
</style>
