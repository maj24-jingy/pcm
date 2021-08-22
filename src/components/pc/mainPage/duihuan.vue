<template>
  <div>
    <div class="base-info">
    <el-card shadow="always" :body-style="{ padding: '0px' }" >
        <div class="head">
          <p class="phone">Total Assets</p>
          <p class="usdt">321 USDT</p>
          <div class="headToken">
            <p>Token</p>
            <p>Price</p>
            <p>Change</p>
        </div>
        </div>
        
      <el-tabs tab-position="left" >
        <!-- hahah   style="height: 200px;margin-top:80px;"-->
        <el-tab-pane>
          <span slot="label" class="elTabSpan">
              <p>BTC/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          1      </el-tab-pane>
        <el-tab-pane>
          <span slot="label" class="elTabSpan">
              <p>ETM/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          2     </el-tab-pane>
        <el-tab-pane>
          <span slot="label" class="elTabSpan">
              <p>AMC/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          3     </el-tab-pane>

      </el-tabs>
  </el-card>

  </div>
  </div>
</template>

<script>

export default {
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
    margin: 0 auto;
    padding: 0;
    width: 100%;
    min-height: 800px;
    
    .elTabSpan {
        display: flex;
        justify-content: space-between;
        }
    .head {
      position: absolute;
      // left: -30%;
      width: 13%;
      height: 22%;
      z-index: 100;
      padding: 0 1.5%;
      .headToken {
        // display: block;
        position: absolute;
        bottom: 2.5%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        >p {
            font-size: 18px;
            color: #a1a5b3;
        }
        }
      .phone {
        margin-top: 65px;
        font-size: 19px;
        font-weight: 600;
        color: gray;
        text-align: left;
      }
      .usdt {
        text-align: left;
        margin-top: 20px;
        font-size: 35px;
        color: #0a0a0a;
      }
    }
    /deep/.el-tabs__nav-wrap {
      width: 100%;

    }
    /deep/.el-tabs__nav-scroll {
      margin-top: 230px;
    }
    /deep/.el-tabs__header {
      height: 1000px;
      position: relative;
      top: 5%;
      // background-color: blue;
    }
    /deep/.el-tabs__content {
    //   padding: 50px 30px;
    margin-left: 300px;
      min-height: 1000px;
      text-align: left;
    }
    /deep/.el-tabs__item {
      font-size: 18px;
      text-align: left;
      font-weight: bolder;
      margin-bottom: 20px;
    }
    /deep/.el-tabs__nav {
        width: 300px;
    }
    }
}
 
</style>
<style>
  
</style>
