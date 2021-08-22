<template>
  <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">Telephone</mt-tab-item>
      <mt-tab-item id="2">Email</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-field
        :placeholder="accountPlaceholder"
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
        <mt-field
        :placeholder="accountPlaceholder"
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
      </mt-tab-container-item>
    </mt-tab-container>
    
    <div class="footer">
      <div class="module-nav">
        <router-link tag="div" to="/" class="nav-i">
          <div class="iconfont icon">&#xe608;</div>
          <h3>家</h3>
        </router-link>
        <router-link tag="div" to="/duihuan" class="nav-i">
          <div class="iconfont icon">&#xe71a;</div>
          <h3>兑换</h3>
        </router-link>
        <div class="nav-i">
          <div class="iconfont icon-add">&#xe628;</div>
        </div>
        <router-link tag="div" to="/kuang" class="nav-i">
          <div class="iconfont icon">&#xe651;</div>
          <h3>矿业</h3>
        </router-link>
        <router-link tag="div" to="/user" class="nav-i">
          <div class="iconfont icon">&#xe606;</div>
          <h3>用户</h3>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mobilePage",
  data() {
    return {
      selected: '1',
    };
  },
};
</script>

<style lang="less">
@import "../../mobCss/index.less";
</style>