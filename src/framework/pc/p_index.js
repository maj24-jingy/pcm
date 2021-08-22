// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../../router/pc/index'
import ElementUI from 'element-ui';
import MyhttpServe from '@/plugins/http.js'
import Axios from 'axios'
Vue.prototype.$axios = Axios
Vue.use(MyhttpServe);

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
import less from 'less'
Vue.use(less)
// require('../node_modules/vux/src/styles/reset.less');
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
//引入公用函数
import processData from '@/utils/utils.js'
Vue.use(processData)
//引入reset
import '@/pcCss/reset.less'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
