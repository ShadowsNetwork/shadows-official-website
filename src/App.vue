<template>
  <div id="app">
    <nav class="header">
      <el-row type="flex" style="background-color: rgba(0,0,0,0);margin: 0;z-index: 1;padding: 0;">
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1"/>
        <el-col :xl="6" :lg="6" :md="6" :sm="6" :xs="6">
          <ul class="nav">
            <li class="logoImg" @click="toggle('0')"><router-link class="logoLinkImg" to="/dashboard"><img src="./assets/image/dashboard/logo.png" style="width: 100%"></router-link></li>
          </ul>
        </el-col>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1"/>
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
        <el-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2"/>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1">
          <ul>
            <li><img src="./assets/image/dashboard/fly.png" style="width: 100%"></li>
          </ul>
        </el-col>
        <el-col :xl="1" :lg="1" :md="1" :sm="1" :xs="1">
          <ul>
            <li><img src="./assets/image/dashboard/twiter.png" style="width: 100%"></li>
          </ul>
        </el-col>
        <el-col :xl="2" :lg="2" :md="2" :sm="2" :xs="2">
          <ul>
            <li>
              <button class="contact">Contact Us</button>
            </li>
          </ul>
        </el-col>
      </el-row>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
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
    height: 100px;
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
  @media screen and (max-width: 992px) {
    .header {
      width: 100%;
      height: 100px;
      background: rgba(0,0,0,0);
      line-height: 50px;
      display: none;
    }
  }
</style>
