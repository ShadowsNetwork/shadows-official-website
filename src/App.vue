<template>
  <div id="app">
    <nav class="header">
      <el-row type="flex" style="background-color: rgba(0,0,0,0);margin: 0;z-index: 1;padding: 0;">
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1" />
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="6">
          <ul class="nav">
            <li class="logoImg" @click="toggle('0')"><router-link class="logoLinkImg" to="/dashboard"><img src="./assets/image/dashboard/logo.png" style="width: 100%"></router-link></li>
          </ul>
        </el-col>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1" />
        <el-col :xl="7" :lg="7" :md="7" :sm="7" :xs="7">
          <ul class="nav">
            <el-row>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li" @click="toggle('0')"><router-link to="">Features</router-link></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li" @click="toggle(1)"><router-link to="">Medium</router-link></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li" @click="toggle(2)"><router-link to="">About</router-link></li>
              </el-col>
              <el-col :xl="6" :lg="6" :md="6">
                <li class="header-li" @click="toggle(3)"><router-link to="">Docs</router-link></li>
              </el-col>
            </el-row>
          </ul>
        </el-col>
        <el-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2" />
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1">
          <ul>
            <li><img src="./assets/image/dashboard/fly.png"></li>
          </ul>
        </el-col>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1">
          <ul>
            <li><img src="./assets/image/dashboard/twiter.png"></li>
          </ul>
        </el-col>
        <el-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2">
          <ul>
            <li>
              <button class="contact">Contact Us</button>
            </li>
          </ul>
        </el-col>
        <div class="mobile-drop-button">
          <i class="el-icon-s-operation" @click="dropShow" />
        </div>
      </el-row>
    </nav>
    <div v-show="show" class="mobile-drop" :show="show">
      <div>Features</div>
      <div>Medium</div>
      <div>About</div>
      <div>Docs</div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      show: false
    }
  },
  methods: {
    dropShow() {
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
  html {
    font-size: 62.5%;
  }
  nav {
    z-index: 1;
  }
  .header {
    width: 100%;
    background: rgba(0,0,0,0);
    line-height: 50px;
    display: block;
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
  .contact {
    width: 128px;
    height: 33px;
    line-height: 16.5px;
    color: #fff;
    font-size: 14px;
    background: #D02467;
    border: none;
    border-radius: 30px;
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
    background: rgba(0,0,0,0.4);
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
      width: 80%;
      display: block;
    }
    .mobile-drop > div {
      width: 100%;
      text-align: center;
      height: 30px;
      line-height: 30px;
      color: #fff;
      cursor: pointer;
      margin-top: 10px;
    }
    .mobile-drop > div:active {
      background: rgba(0,0,0,0.7);
    }
    @media screen and (max-width: 450px) {
      .el-icon-s-operation {
        color: #fff;
        font-size: 15px;
      }
      .logoImg {
        width: 20%;
        display: block;
        position: absolute;
        top: 0;
        left: 7%;
      }
      .mobile-drop-button {
        position: absolute;
        top: 0;
      }
      .mobile-drop > div {
        display: block;
        height: 20px;
        line-height: 20px;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
</style>
