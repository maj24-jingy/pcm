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
        
      <el-tabs tab-position="left" @tab-click='handleClick' v-model="activeName">
        <!-- hahah   style="height: 200px;margin-top:80px;"-->
        <el-tab-pane name="first">
          <span slot="label" class="elTabSpan">
              <p>BTC/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          <btc v-if="pageOne"></btc>
        </el-tab-pane>
        <el-tab-pane name="second">
          <span slot="label" class="elTabSpan">
              <p>ETH/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          <eth v-if="pageTwo"></eth>
        </el-tab-pane>
        <el-tab-pane name="third">
          <span slot="label" class="elTabSpan">
              <p>AMC/USDT</p>
              <p>44478.01</p>
              <p>-2.36%</p>
          </span>
          <amc v-if="pageThree"></amc>
         </el-tab-pane>

      </el-tabs>
  </el-card>

  </div>
  </div>
</template>

<script>
import amc from '../shiChang/amc.vue';
import Btc from '../shiChang/btc.vue';
import Eth from '../shiChang/eth.vue';

export default {
  components: { amc, Btc, Eth },
  name: 'zichan',
  data () {
   return {
     activeName:'first',
     pageOne: true,
     pageTwo: false,
     pageThree: false
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
    handleClick(tab) {
      switch (tab.name) {
        case "first":
          this.pageOne = true;
          this.pageTwo = false;
          this.pageThree = false;
          break;
        case "second":
          this.pageOne = false;
          this.pageTwo = true;
          this.pageThree = false;
          break;
        case "third":
          this.pageOne = false;
          this.pageTwo = false;
          this.pageThree = true;
          break;

        default:
          break;
      }
  }}
}
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
      margin-right: 0px;

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
    /deep/.el-tabs--left {
      margin-right: 0px;
    }
    }
}
 
</style>
<style>
  
</style>
