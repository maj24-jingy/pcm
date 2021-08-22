<template>
    <div>
		<div class="head">
			<div class="iconfont icon headTou">&#xe617;</div>
			<!-- <img src="" alt=""> -->
			<div>
			<p>昵称：<i style="font-weight:800">132</i></p>
			<p style="margin-top:1rem">132121312</p>
			</div>
			</div>
			<div class="bod">
				<mt-cell
				class="bodFirst"
				title="用户资产"
				to="/checklist"
				is-link
				icon="sign-out"
				value="多选框">
				</mt-cell>
				<mt-cell
				title="用户充提"
				to="/radio"
				is-link
				icon="jia"
				>
				</mt-cell>
				<mt-cell
				title="Field"
				to="/radio"
				icon="scann"
				is-link
				value="输入框">
				</mt-cell>
				<mt-cell
				title="Field"
				to="/radio"
				is-link
				value="输入框">
				</mt-cell>
				<mt-cell
				title="Field"
				to="/radio"
				is-link
				icon="search"
				value="输入框">
				</mt-cell>
				<mt-cell
				title="登出"
				class="sign-out"
				to="/login"
				is-link
				icon="sign-out"
				value="输入框">
				</mt-cell>
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
  name: 'mobilePage'
}
</script>

<style lang="less">
 @import "../../mobCss/index.less";
 .head {
   height: 8rem;
   margin: 1rem;
   border-radius: 0.3125rem;
//    border: 1px solid red;
	// box-shadow: 0 0 .25rem 0.2rem rgb(83, 107, 240);
   box-shadow: 0 0 50px 10px #fff,
               0 0 40px 40px #0973bd;
   display: flex;
   align-items: center;
    .headTou {
      font-size: 4rem;
	  margin-right: 2rem;
	  color: #1db9a5;
    }
 }
 .mint-cell-text {
	 display: flex;
	 left: 0rem;
 }
 .bodFirst {
	 margin-top: 3rem;
 }
 .mintui {
	float: left;	
	margin-right: .5rem;
 }

 .sign-out {
	color: red;
 }

</style>
