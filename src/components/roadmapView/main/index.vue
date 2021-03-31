<template>
  <div class="road">
    <div class="road-title wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Road Ahead 21</span>
    </div>
    <div class="roadText wow fadeIn" data-wow-duration="3.5s" data-wow-delay="0.3s">
      <span>Our commitment to DeFi innovation</span>
    </div>
 

    <div class="main">
      <div class="left">&nbsp;</div>
      <div class="center">

        <el-row justify="space-around">
              
            </el-row>

       

        
      </div>
    
      <div class="right">&nbsp;</div>
    </div>



  </div>
</template>

<script>
import { WOW } from 'wowjs'
export default {
  name: 'PowerFul',
  mounted() { new WOW({ offset: 0, mobile: true, live: true }).init() }
}
</script>

<style scoped>
.road {
  width: 100%;
  padding-bottom: 300px;
  padding-top: 150px;
  background: url("../../../assets/image/roadmap/roadmap_bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.road-title {
  width: 100%;
  font-size: 60px;
  text-align: center;
  font-family: 'Arboria-Bold';
  color: #FFFBFB;
}
.roadText {
  width: 100%;
  font-size: 24px;
  text-align: center;
  font-family: 'Arboria';
  color: #fffbfb;
}
.main {
  display: flex;
  flex-direction: row;
  width: 100%;
  flex:1;
  padding-top: 100px;
}
.left {
  flex:1;
}
.center {
  flex:5;
  max-width: 1200px;
  max-width: 1200px;
}
.right {
  flex:1;
}

.col1 {
  flex:1;
}
.col2 {
  flex:2;
  
}
.col3 {
  flex:1;
}
.boxImg img{
  width: 500px;
}




@media screen and (max-width: 900px) {
  .road {
    margin-top: 0px;
    padding-bottom: 102px;
  }
  .road-title {
    font-size: 24px;
  }
  .roadText {
    font-size: 16px;
    padding-left: 15%;
    padding-right: 15%;
    line-height: 1.3;
  }
  .road-content {
    width: 100%;
    margin-left: 0px;
    margin-top: 80px;
  }
  .content-row {
    display: block;
    text-align: center;
    align-items:center;
    width: 100%;
    margin-left: 0%;
    margin-right: 0%;
  }
  
  .content-row:nth-of-type(2) {
    text-align: center;
    margin-top: 60px;
  }
  .content-row:nth-of-type(3) {
    text-align: center;
    margin-top: 60px;
  }
  .content-row > .content-child:nth-of-type(2) {
    text-align: center;
    margin-left: 0px;
    margin-top: 60px;
  }
  .childImg {
    opacity: 1;
    text-align: center;
    margin-left: 15%;
    width:70%;
    border: 1px solid #A386F5;
    box-sizing: border-box;
    box-shadow: 0px 0px 50px 10px #34274D;
    border-radius: 20px;
    overflow: hidden;
  }
  .childText {
    text-align:center;
    width: 100%;
    margin-top: 20px;
    padding-left: 20%;
    padding-right: 20%;
    margin-left: 0px;
    margin-right: 0px;
  }
  .childText > span:nth-of-type(1) {
    font-size: 20px;
  }
  .childText > span:nth-of-type(2) {
    font-size: 13px;
    margin-top: 5px;
    line-height:  1.4;
  }
}
</style>

