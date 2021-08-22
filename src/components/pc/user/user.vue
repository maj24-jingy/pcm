<template>
  <div>
    <div class="banner">
      <p>Personal Information</p>
    </div>
    <div class="base-info">
    <el-card shadow="always" :body-style="{ padding: '0px' }" >
        <div class="head">
          <img src="../../../assets/img/Avatar.png" alt="">
          <p class="phone">17765501818</p>
          <p><i class="el-icon-success"></i> Not Verified</p>
        </div>

      <el-tabs tab-position="left" >
        <!-- hahah   style="height: 200px;margin-top:80px;"-->
        <el-tab-pane style="margin-top:20px;">
          <span slot="label" ><i class="el-icon-notebook-1"></i> User Assets</span>
          <user-assets></user-assets>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-box"></i> User Deposit and Withdrawal</span>
          <user-inout></user-inout>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-notebook-2"></i> Purchased Products</span>
          <user-product></user-product>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-office-building"></i> AMC Certification</span>
          <user-share></user-share>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label"><i class="el-icon-setting"></i> Account Settings</span>
          <user-safe></user-safe>
        </el-tab-pane>
      </el-tabs>
  </el-card>

  </div>
  </div>
</template>

<script>
import userAssets from './userAssets.vue';
import UserInout from './userInout.vue';
import UserProduct from './userProduct.vue';
import UserShare from './userShare.vue';
import UserSafe from './userSafe.vue';
export default {
  components: { userAssets, UserInout, UserSafe, UserProduct, UserShare },
  name: 'zichan',
  data () {
   return {
     api_key: 'DMIHCUVOSGNLELQTTMCYWL4E84ZKFJU2MYNJERV4'
   }
  },

  async created() {
    // var a = [1,3,3]
    // var b=a
    // for(let i =3; i > 0; i--) {
    //   b[i]+=1
    // }
    // console.log(a);
    // console.log(b);
    const res = await this.$http.get(`/api/markets?api_key=${this.api_key}`)
    console.log(res);
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
.base-info {
  width: 100%;
  .el-card {
    position: relative;
    margin: -40px auto 60px;
    padding: 0;
    width: 90%;
    min-height: 800px;
    .head {
      position: absolute;
      // left: -30%;
      width: 20.15%;
      height: 25%;
      background-color:#f2f2f2;
      z-index: 100;
      img {
        width: 100px;
        margin-top: 19%;
      }
      .phone {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 600;
      }
      p:last-child {
        margin: 20px auto;
        width: 38%;
        height: 9%;
        line-height: 142%;
        background-color: #bab9b9;
        border-radius: 12px;
        font-size: 15px;
        
      }
    }
    /deep/.el-tabs__nav-wrap {
      width: 98%;

    }
    /deep/.el-tabs__nav-scroll {
      margin-top: 300px;
    }
    /deep/.el-tabs__header {
      height: 1000px;
      position: relative;
      top: 5%;
      // background-color: blue;
    }
    /deep/.el-tabs__content {
      padding: 50px 30px;
      text-align: left;
    }
    /deep/.el-tabs__item {
      font-size: 18px;
      text-align: left;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    }
}
  //-----------------banner
  .banner {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1920px;
    min-height: 300px;
    background: url(../../../assets/img/product-banner.png) no-repeat center center;
    p {
      display: block;
      width: 100%;
      text-align: center;
      font-size: 48px;
      font-weight: bold;
      color: #fff;
    }
  }
</style>
<style>
  
</style>
