// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router/mobile/index'
import MyhttpServe from '@/plugins/http.js'

//引入mintui
import Mint from 'mint-ui'
//引入全局样式
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(MyhttpServe);
import processData from '@/utils/utils.js'
Vue.use(processData)

Vue.config.productionTip = false
import less from 'less'
Vue.use(less)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
