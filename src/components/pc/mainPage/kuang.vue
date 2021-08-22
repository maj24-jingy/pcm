<template>
  <div>
    <div class="banner">
      <p>让挖矿更轻松，赚钱更快</p>
    </div>
    <el-row class="elRow">
     <el-col :span="8">
    <el-card shadow="hover">
      To meet the needs of institutional/high-net-worth clients to improve assets utilization and expand transaction assets, we have launched related innovative products that are applicable to clients across trading platforms.
    </el-card>
  </el-col>
  </el-row>
  <div class="basePage" :data="this.dataList">
    <!-- <template slot-scope="scope"> -->
      <el-card v-for="(items, i) in this.dataList" :key="i" :body-style="{ padding: '0px' }">
        <p class="progress">
          <span v-show="verifyPar(items.statue)">Progress</span>
          <span v-show="!verifyPar(items.statue)">Expired</span>
          </p>
        <div class="info">
          <div class="name">
            <p>{{items.name}} Locked Staking</p>
          </div>
          <div class="base">
            <div class="rate">
              <p>
                <span>{{items.rate*365}}%</span>
                <span>{{items.rate}}%</span>
              </p>
              <p>
                <span>Annual Yield in Past 3 Days(Daily Return Rate)</span>
              </p>
            </div>
            <div class="time">
              <p>{{DateMinus(items.startDay,items.endDay)}}D</p>
              <p>Locked Period</p>
            </div>
          </div>
          <div class="speed">
            <div class="progress">
              <el-progress :text-inside="true" :stroke-width="22" :percentage='items.buyNumber/items.summoney' status="warning"></el-progress>
            </div>
            <div class="howMoney">
              <span>{{items.buyNumber}} {{items.name}}</span>
              <span>/ {{items.summoney}} {{items.name}}</span>
            </div>
          </div>
        </div>
        <div class="btn">
          <el-button type="primary" @click="ifGo(items)">join</el-button>
        </div>
      </el-card>
    <!-- </template> -->
  </div>
  </div>
</template>

<script>
export default {
  name: 'kuang',

  data() {
    return {
      dataList: [],
      date:'1',
      percentage: ''
    };
  },
  computed: {
    
  },
  async created() {
    const res = await this.$http.get('/getData/findproject')
    // console.log(res);
    this.dataList = res.data.data.records
    console.log(this.dataList);
    console.log(this.dataList[0].endDay);
    // this.date = this.DateMinus(this.dataList.endDay,this.dataList.startDay)
    console.log(this.dataList);
    
  },

  methods: {
    ifGo(params) {
      if(params.statue == 0) {
        this.$router.push({name: 'productDetails',query: {id: params.id}})
      }else {
        this.$message({
          type: 'warning',
          message: 'The Event is Over, Please Look Forward to Other Events'
        })
      }
    }
  },
};
</script>

<style lang="less" scoped>
  //主要的base
  .basePage {
    margin: 0 auto;
    width: 1400px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 50px;
    .el-card {
      margin-top: 60px;
      width: 480px;
      background-color: #fafafa;
      overflow: hidden;
      .btn {
        margin-bottom: 55px;
        .el-button {
          font-size: 20px;
          width: 200px;
          height: 50px;
          border: 0;
          background-color: #F0B90B;
        }
      }
      //中间一大块数据css
      .info {
        width: 100%;
        padding: 10px 20px;
        .speed {
          margin-bottom: 100px;
          .progress {
            width: 90%;
            margin-bottom: 20px;
          }
          .howMoney {
            float: left;
            span {
              font-size: 16px;
              font-weight: 600;
            }
            span:first-child {
              color: #F0B90B;
            }
          }
        }
        //中间rate以及时间主要css
        .base {
          width: 90%;
          display: flex;
          justify-content: space-between;
          margin-bottom: 35px;
          .rate {
            p:first-child {
              margin-bottom: 8px;
              span:first-child {
                font-size: 35px;
                color:#01b364;
                font-weight: 700;
              }
              span:last-child {
                color: #01b364;
                background-color: #cff1dc;
              }
            }
            p:last-child {
              span {
                color: #9496a1;
                font-size: 12px;
              }
            }
          }
          .time {
            p:first-child {
              font-size: 30px;
              font-weight: bold;
              color: #2a333a;
              margin-bottom: 8px;
            }
            p:last-child {
              color: #9496a1;
              font-size: 14px;
              font-weight: normal;
            }
          }
        }
        //USDC
        .name {
          height: 66px;
          margin-bottom: 10px;
          p {
            float: left;
            font-size: 25px;
            font-weight: 900;
          }
        }
      }
      .progress {
        width: 100%;
        height: 22px;
        span {
          // display: block;
          float: right;
          right: 0;
          background-color: #01b364;
          color: #fff;
          width: 67px;
          height: 22px;
          line-height: 22px;
          border-radius: 2px 2px 2px 10px;
        }
        span:last-child {
          background-color: #c7ccd5;
        }
      }
    }
  }
  //-----------------elRow
  .elRow {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .el-col {
      width: 1200px;
      .el-card {
        background-color: #FAFAFA;
        border-radius: 4px;
        text-align: left;
        line-height: 21px;
        // font-size: 14px!important;
        color: grey;
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