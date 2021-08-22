<template>
  <div style="width:100%;">
    <div class="navPage">
      <p><strong>MAKE MORE MONEY</strong></p>      
      <p class="seconP"><strong>Safe, Stable, High-yield</strong></p>      
      <img src="@/assets/img/navPage.jpg"  />
      <el-button type="primary" @click="$router.push({name: 'register'})">To manager Money</el-button>
    </div>
    <div class="mainPage">
      <div class="teacher-card-list">
        <my-card cover="ttt"/>
        <my-card />
        <my-card />
      </div>
      <div class="product">
        <div class="productName">
          <p>Product</p>
        </div>
        <!-- <el-row> -->
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" slot-scope>
            <img src="../../assets/img/product1.png" class="image">
            <div style="padding: 14px;">
              <p>Convert</p>
                <el-button type="primary" class="button" @click="$router.push({name: 'duihuan'})">Trade</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="elCard">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" slot-scope>
            <img src="../../assets/img/product2.png" class="image">
            <div style="padding: 14px;">
              <p>Mining</p>
                <el-button type="primary" class="button" @click="$router.push({name: 'kuang'})">Trade</el-button>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" class="elCard">
          <el-card :body-style="{ padding: '0px' }" shadow="hover" slot-scope>
            <img src="../../assets/img/product3.png" class="image">
            <div style="padding: 14px;">
              <p>Assets Custody</p>
                <el-button type="primary" class="button" @click="$router.push({name: 'ziChan'})">Trade</el-button>
            </div>
          </el-card>
        </el-col>
        <!-- </el-row> -->
      </div>

       <div class="Cumulative">
        <div class="CumulativeName">
          <p>Cumulative Turnover</p>
        </div>
        <div class="cumuMainpage">
        <el-col :span="6">
          <el-card shadow="hover">
            <p>Cumulative transaction</p>
            <p>{{this.trade}}</p>
          </el-card>
      </el-col>
      <el-col :span="6" class="cumuCard">
          <el-card shadow="hover" >
            <p>Cumulative mining transaction</p>
            <p>{{this.mining}}</p>
          </el-card>
      </el-col>
      <el-col :span="6" class="cumuCard">
          <el-card shadow="hover" >
            <p>Cumulative transaction of custody</p>
            <p>{{this.locked}}</p>
          </el-card>
      </el-col>
      </div>
      </div>
      </div>
      <div class="feature">
        <div class="featureName">
          <p>Feature</p>
        </div>
        <el-row>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/img/feature1.png" class="image">
            <div style="padding: 14px;" class="featurePicOne">
              <p>Convert</p>
            </div>
            <div style="padding: 14px;">
              <p>Multi-dimensional assets</p>
              <p>management plans like</p>
              <p>optimizing the aggregator</p>
              <p>and clearing plan</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/img/feature2.png" class="image">
            <div style="padding: 14px;" class="featurePicOne">
              <p>Safe</p>
            </div>
            <div style="padding: 14px;">
              <p>Multi-dimensional assets</p>
              <p>management plans like</p>
              <p>optimizing the aggregator</p>
              <p>and clearing plan</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="6" >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/img/feature3.png" class="image">
            <div style="padding: 14px;" class="featurePicOne">
              <p>Innovative</p>
            </div>
            <div style="padding: 14px;">
              <p>Multi-dimensional assets</p>
              <p>management plans like</p>
              <p>optimizing the aggregator</p>
              <p>and clearing plan</p>
            </div>
          </el-card>
        </el-col>
        
        </el-row>

      </div>
  </div>
</template>

<script>
// import mycard from '@/components/pc/fuyong/MCard.vue'
import MyCard from '../pc/fuyong/MCard.vue'
export default {
  name: 'home',
  components: {MyCard},
  props: {
    cover: {
      type: String,
      default:
        require("../../assets/img/product1.png"),
    },
    ss: {
      type: String,
      default:
        "13213",
    },
  },
  data() {
    return {
      trade:'xx',
      mining: 'xx',
      locked: 'xx'
    };
  },

  async created() {
    const res = await this.$http.get('/getData/finddeal')
    console.log(res);
    if (res.data.code === 200) {
      const data = res.data.data.records
      // console.log(data);
      this.trade = data[0].trade
      this.mining = data[0].mining
      this.locked = data[0].locked
    }
    console.log(this.trade);
    // console.log(this.trade);
  },
  mounted () {
    this.getHa()
  },
  methods: {
    getHa() {
      console.log(formatDate(1628868300000));
function formatDate(date) {
  var date = new Date(date);
  var YY = date.getFullYear() + '-';
  var MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  var DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
  var hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
  var ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
  return YY + MM + DD +" "+hh + mm + ss;
}     }
    
  },
};
</script>

<style lang="less" scoped>

 .feature {
    width: 1400px;
    margin: 50px auto 50px;
    .featureName {
      width: 265px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: #F0B90B;
      margin: 0 auto 60px;
      border-bottom: 3px solid #f0b90b;
      p {
        font-size: 35px;
        font-weight: 900;
      }
    }
   .time {
    font-size: 13px;
    color: #999;
  }
  .el-row {
    // width: 1600px;
    margin: 50px 0 0  0px;
    display: flex;
    justify-content: space-around;
    .featurePicOne {
      font-size: 20px;
      font-weight: bolder;
    }
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 40%;
    display: block;
    margin: 40px auto 20px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
 }
.mainPage {
  height: 1300px;
  overflow: hidden;
  background-color: #f2f2f2;
  //Cumulative
  .Cumulative {
    width: 1200px;
    margin: 530px auto 130px;
    .cumuCard {
      margin-left: 77px;
    }
    .CumulativeName {
      width: 500px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: #F0B90B;
      margin: 0 auto 60px;
      border-bottom: 3px solid #f0b90b;
      p {
        font-size: 35px;
        font-weight: 900;
      }
    }
    .cumuMainpage {
      width: 1400px;
      height: 200px;
      margin: 0 auto;
    }
    .el-card {
      height: 120px;
      position: relative;
      p:first-child{
        position: absolute;
        font-size: 14px;
    color: #b3bdc7;
    font-weight: 600;
      }
      p:last-child{
        position: absolute;
        bottom: 25%;
        font-size: 28px;
        color: #002445;
        margin-top: 8px;
        font-weight: bolder;
      }
    }
  }
  .teacher-card-list {
  width: 1300px;
  margin: 80px auto 100px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  .teacher-card {
  margin-right: 26px;
  }
  .teacher-card:nth-child(4n) {
    margin-right: 0;
  }
  }
  .product {
    width: 1200px;
    margin: 0px auto 90px;
    .el-row {
    display: flex;
    justify-content: space-around;
    }
    .productName {
      width: 265px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      // background-color: #F0B90B;
      margin: 0 auto 60px;
      border-bottom: 3px solid #f0b90b;
      p {
        font-size: 35px;
        font-weight: 900;
      }
    }
    .el-card div p{
      font-size: 22px;
    }   
    //product 下面的卡片css样式
     .button {
    padding: 0;
    background-color: #F0B90B;
    color: #231F2A;
    padding: 6px 0;
    width: 150px;
    height: 50px;
    text-align: center;
    margin: 40px auto 0;
    border-radius: 4px;
    font-size: 16px;
    border: 0;
  }

  .elCard {
    margin-left: 150px;
  }
  .image {
      width: 40%;
      display: block;
      margin: 40px auto 20px;
    }
  }
}

  .navPage{
    width: 100%;
    height: 540px;
    transition: 0.5s all;
    box-shadow: 2px 2px 8px 2px rgba(193, 193, 193, 1);   
    position: relative;;
    P {
      position: absolute;
      left:10%;
      top: 20%;
      strong {
        // font-family: PingFangSC-Semibold, sans-serif;
        font-family: 'Heavy';
        font-size: 46px;
        font-weight: 900;
      }
    }
    .seconP {
      top: 33%;
    }
    img{
      position: absolute;
      height: 500px;
      right: 100px;
      
    }
    .el-button {
      position: absolute;
      background-color: #F0B90B;
      border: 0;
      height: 60px;
      left: 10%;
      top: 50%;
    }
  }
</style>