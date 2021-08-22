<template>
  <div class="login-warp">
    <mt-button type="danger">danger</mt-button>
    <!-- 提醒栏 -->
    <br />
    <br />
    <br />
    <div class="imgDiv">
      <p>User Registration</p>
    </div>
    <!-- 操作区域 -->

    <div class="operateDiv" >
      <mt-field placeholder="Username" v-model="dataList.username" class="m"></mt-field>
      <mt-field placeholder="Password" v-model="dataList.password" class="passWd"></mt-field>
      <mt-field placeholder="Password Again" v-model="password1" class="m"></mt-field>

      <mt-navbar v-model="selected">
        <mt-tab-item id="1">Telephone</mt-tab-item>
        <mt-tab-item id="2">Email</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          
          <!-- 账号 -->
          <mt-field
            placeholder="phone"
            v-model="uname"
            class="myinput"
          ></mt-field>
          <!-- 短信验证码 -->
          <mt-field
            v-show="!isUserAccount"
            placeholder="校验码"
            v-model="getCode"
            class="myinput"
          >
            <span class="getCode">获取短信验证码</span>
          </mt-field>
          <!-- 登录和切换登录方式块 -->
          <div>
            <mt-button
              size="large"
              type="primary"
              class="mybutton"
              @click.native="changeLoginMethod"
              >注册</mt-button>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <!-- 账号 -->
          <mt-field placeholder="email" v-model="dataList.email" class="myinput"></mt-field>
          <!-- 密码 -->
          <mt-field
            v-show="isUserAccount"
            placeholder="密码"
            type="password"
            v-model="upass"
            class="myinput"
            @keyup.enter.native="login"
          ></mt-field>
          <!-- 短信验证码 -->
          <mt-field
            v-show="!isUserAccount"
            placeholder="校验码"
            v-model="eCode"
            class="myinput"
          >
          <span v-show="show" @click="getMA">获取验证码</span>
	        <span v-show="!show" class="count">{{count}} s</span>
          </mt-field>
          <!-- 登录和切换登录方式块 -->
          <div>
            <mt-button
              size="large"
              type="primary"
              class="mybutton"
              @click.native="emailRegist"
              >注册</mt-button
            >
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
      <!-- ----------- -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "2",
      show: true,
      count: '',
      timer: null,
      upass: "",
      uname: "",
      isUserAccount: false,
      getCode: "",
      // email: "",
      dataList: {
        username: '',
        password: '',
        phone:'',
        email: '',
        roleCode: '1'
      },
      way: '邮箱',
      eCode: '',
      password1: ''
    };
  },
  
  methods: {
    async emailRegist() {
      //调用封装函数  判断是否两次密码是否一致
      let aa = this.verifyPassword(this.dataList.password, this.password1)
      if(aa) {
        //注册接口
        const res =await this.$http.post(`/account?code=${this.eCode}&way=${this.way}`,this.dataList);
        console.log(res);
        if(res.data.code === 200) {
          //跳转登录页面
          this.$toast(res.data.msg);
          this.$router.push({name: 'login'})
        }else {
        this.$toast(res.data.msg);
        }
      }else {
        this.$toast('两次输入密码不一致');
      }
    },
    async getMA() {
      //验证码判断60秒后才能再次获取
      const TIME_COUNT = 60;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.show = false;
        this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count--;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
        }
        }, 1000)
      }
      const res = await this.$http.get(`/send?mail=${this.dataList.email}`)
      console.log(res);

    }
  }
};
</script>

<style lang="less">
.page-badge-container {
  padding: 0 10px;
}

/* 你需要登录才能继续仿问的布局样式 */
.tipslogin {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: rgb(238, 238, 238);
  padding-left: 20px;
  padding-right: 20px;
}
/* 半闭样式 */
.closeSpan {
  color: rgb(153, 153, 153);
}
/* 图片 logo 根样式 */
.imgDiv {
  display: flex;
  justify-content: center;
}
/* 图片样式 */
.logo {
  width: 80px;
  height: 80px;
}
/* 上面的线隐藏 */
.mint-cell-wrapper {
  background-image: linear-gradient(180deg, #fff, #fff 0%, transparent 0%);
}
/* 输入框底边框样式 */
.mint-cell-wrapper {
  border: 1px solid #495949;
}

/* 修改按钮按钮下的默认颜色 */
.mint-button::after {
  background-color: transparent;
}
/* 操作区域的样式*/
.operateDiv {
  padding-left: 20px;
  padding-right: 20px;
}
/* 输入框边距 */
.myinput {
  margin-top: 30px;
}
/* 获取短信验证码字体颜色 */
.getCode {
  color: #ff5000;
  font-size: 17px;
  border-left: 1px solid #b5b5b5;
  padding-left: 7px;
}
/* 免费注册根样式 */
.registerDiv {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 免费注册字体样式*/
.registerDiv span {
  color: #555;
}
/* 登录短信验证按钮边距 */
.mybutton {
  margin-top: 20px;
}
/* 修改默认 butoon 的样式 达到和淘宝登录一样 */
.mint-button--default {
  background: linear-gradient(to right, #2dbcfe, 5%, #1e2822);
  border-radius: 25px;
  color: #fff !important;
  height: 48px;
}
/* 同上 */
.mint-button--primary {
  border-radius: 25px;
  height: 48px;
  background: linear-gradient(to right, #2dbcfe, 5%, #6e7b55);
  border: 1px solid #ff5000;
  color: #ff5000;
}
/* 修改默认弹框的样式，达到基本和淘宝的效果一样 */
.mint-msgbox {
  border-radius: 8px;
  width: 70%;
}
/* 弹出框内容样式 */
.mint-msgbox-content {
  min-height: 50px;
  font-size: 18px;
}
/* 弹出内容居中 */
.mint-msgbox-message {
  line-height: 50px;
}
/* 弹出框确定按钮样式 */
.mint-msgbox-btns {
  height: 60px;
}
/* 弹出框确定按钮字体 */
.mint-msgbox-confirm {
  color: #f40;
}
.passWd {
  margin-top: .5rem;
  margin-bottom: .5rem;
}
</style>
