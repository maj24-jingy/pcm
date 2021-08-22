<template>
  <div>
    <div class="banner">
      <div>
        <p>Digital Assets Custody</p>
        <p class="secondP">To Provide Professional and Safe Custody Services in the Digital Assets</p>
        <el-button type="primary">Submit Custody Receipt</el-button>
      </div>
    </div>
    <div class="mainContent">
      <div class="info">
        <p class="title">Professional Assets Custody</p>
        <p class="text">Accept the entrustment of customer service, check its management items including assets custody and funds liquidation. Provide professional and safe assets protection for the quantitative chain and customers in the field of digital assets</p>
      </div>
      <img src="../../../assets/img/page1.png" alt="">
      <img src="../../../assets/img/page2.png" alt="">
      <img src="../../../assets/img/page3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'zichan',
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
//--------------maincontent
.mainContent {
  width: 1222px;
  margin: 0 auto;
  min-height: 1000px;
  overflow: hidden;
  // background-color: red;
  //---------------------info
  .info {
    width: 1000px;
    margin: 0 auto;
    margin-top: 60px;
    margin-bottom: 53px;
    .title {
      font-size: 30px;
      padding-bottom: 20px;
      font-weight: bold;
      color: #000000;
    }
    .text {
      color: #1E1B1B;
      font-size: 18px;
      line-height: 1.5;
      width: 600px;
      margin: 0 auto;
    }
  }
}
  
   //-----------------banner
  .banner {
    // display: flex;
    overflow: hidden;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    min-height: 630px;
    background: url(../../../assets/img/custody-banner.png) no-repeat center center;
    div {
      margin: 178px 0 0 186px;
      width: 530px;
      p {
        display: block;
        width: 100%;
        text-align: left;
        font-size: 48px;
        font-weight: bold;
        color: #fff;
      }
      p:first-child {
        margin-bottom: 10px;
      }
      .secondP {
        margin-top: 50px;
        font-size: 30px;
        line-height: 1.2;
        font-weight: normal;
      }
      .el-button {
        margin-top: 67px;
        margin-left: -237px;
        width: 288px;
        height: 70px;
        font-size: 22px;
        background-color: #F0B90B;
        border: 0;
      }
    }
    
  }
</style>