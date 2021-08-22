<template>
  <div>
    <div class="banner">
      <p>{{this.banner}} Locked Staking</p>
    </div>
    <div class="base-info">
      <el-card :body-style="{ padding: '25px 38px' }">
        <div class="tips">
          <p>Annual Yield in Past 3 Days</p>
          <p>
            <span>12123333 USDC</span>
            <span>/ 12123333 USDC</span>
          </p>
        </div>
        <div class="base">
          <div class="rate">
            <span>127.75%</span>
            <span>Daily Return Rate 0.35%</span>
          </div>
          <div class="speed">
            <div>
              <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="ul">
            <div class="li">
              <p class="gray">Locked Period（Days）</p>
              <p>49</p>
            </div>
            <div class="li">
              <p class="gray">Starting Time</p>
              <p>2021-07-13 00:00:00</p>
            </div>
            <div class="li">
              <p class="gray">Locked Amounts</p>
              <p>30000 USDC</p>
            </div>
          </div>
          <div class="buy">
            <div class="top">
              <p>
                <span class="gray">Lockable Quota:</span>
                <span>0</span>
              </p>
              <span>Purchase USDC</span>
            </div>
            <div class="input">
              <div>
                <el-input placeholder="Locked Amounts" 
                size='medium'
                v-model="input2" class="elInput">
                  <template slot="append">
                    <el-button type="text">Maximum</el-button>
                  </template>
                </el-input>
              </div>
              <el-button type="primary">Lock up</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'zichan',
  data() {
    return {
      banner:'USDC',
      input2: ''
    };
  },

  created() {
    console.log(this.$route.query.id);
  },

  methods: {
    
  },
};
</script>

<style lang="less" scoped>
  //------------------base-info
  .base-info {
    margin: -54px 0px 60px;
    .el-card {
      margin: 0 auto;
      width: 90%;
      // height: 330px;
      //--------------------info
      .info {
        margin: 65px 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .ul {
          width: 700px;
          .li {
            margin-top: 30px;
            width: 100%;
            display: flex;
            p:first-child {
              width: 280px;
              font-size: 20px;
              color: #a0a5a9;
              text-align: left;
            }
            p:last-child {
              width: 420px;
              font-size: 22px;
              text-align: left;
              color: #000;
            }
          }
        }
        .buy {
          width: 500px;
          text-align: left;
          .top {
            margin-top: 30px;
            display: flex;
            >span {
              color: #F0B90B;
              cursor: pointer;
              padding-left: 20px;
              padding-top: 3px;
            }
            p {
              .gray {
                color: #a0a5a9;
              }
              span {
                font-size: 20px;
                color: #040404;
              }
            }
          }
          .input {
            margin-top: 50px;
            display: flex;
            >div {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 300px;
              .el-input__inner {
                height: 61px;
              }
               /deep/.el-input__inner {
                height: 52px;
                width: 250px;
              }
            }
            >.el-button {
              margin-left: 20px;
              height: 50px;
              width: 150px;
              font-size: 22px;
              border: 0;
              background-color: #F0B90B;
            }
          }
        }
      }
      //--------------------base
      .base {
        margin-top: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        .rate {
          span:first-child {
            font-size: 45px;
            font-weight: bold;
            color: #01b364;
          }
          span:last-child {
            margin-left: 10px;
            font-size: 16px;
            padding: 4px 6px;
            color: #01b364;
            border-radius: 4px;
            background-color: #ebf8f0;
          }
        }
        .speed {
          width: 505px;
        }
      }
      //--------------------tips
      .tips {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        p:first-child {
          color: #959ca2;
          font-size: 22px;
        }
        p:last-child {
          span:first-child {
            color: #2483ff;
            font-size: 19px;
          }
          span:last-child {
            color: #000;
            font-size: 19px;
          }
        }
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