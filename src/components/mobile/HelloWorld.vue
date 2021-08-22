<template>
 <div>
     <div class="main-content">
     hello
     </div>
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
  name: 'HelloWorld',
  data () {
    return {
      msg: 'HelloWorld,I am mobile'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
 @import "../../mobCss/index.less";
</style>
