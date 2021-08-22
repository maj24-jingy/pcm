<template>
    <div class="login-warp">
        <mt-button type="danger">danger</mt-button>
    <!-- 提醒栏 -->
    <br>
    <br>
    <br>
    <div class="imgDiv">
      <p>User phone login</p>
    </div>
    <!-- 操作区域 -->


    <div class="operateDiv">
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
        v-model="getCode"
        class="myinput"
      >
        <span class="getCode">获取短信验证码</span>
      </mt-field>
      </mt-tab-container-item>

      <mt-tab-container-item id="2">
        <!-- 账号 -->
        <mt-field
        placeholder="username"
        v-model="dataList.userName"
        class="myinput"
      ></mt-field>
      <!-- 密码 -->
      <mt-field
        placeholder="password"
        type="password"
        v-model="dataList.password"
        class="myinput"
        @keyup.enter.native="login"
      ></mt-field>
            <!-- ----------- -->
      <!-- 免费注册块 -->
      <div class="registerDiv">
        <span></span>
        <span @click="$router.push({name: 'register'})">忘记密码</span>
      </div>
      <!-- 登录和切换登录方式块 -->
      <div>
        <mt-button
          size="large"
          class="mybutton"
          @click.native="login"
        >登录</mt-button>
        <mt-button
          size="large"
          type="primary"
          class="mybutton"
          @click.native="$router.push({name: 'register'})"
        >注册</mt-button>
      </div>
      </mt-tab-container-item>

    </mt-tab-container>

    </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            selected:'2',
            upass:'',
            uname:'',
            isUserAccount: false,
            getCode:'',
            mail: 'mail=2437889376@qq.com',
            dataList: {
              userName: '',
              password: ''
            }

        }
    },
    //生命周期  更新后
    updated () {

    },
    methods: {
      async login() {
        //登录接口
        const res = await this.$http.post('login',this.dataList)
        console.log(res);

        if(res.data.code === 200) {
          localStorage.setItem('token', res.data.data.token)
          this.$router.push({name: 'user'})
          this.$toast(res.data.msg);
        }else {
          this.$toast(res.data.msg);

        }
        // this.$router.push({name: 'user'})
        // this.$toast('login success！！！');
      }
    }
}
</script>

<style lang="css">
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
</style>
