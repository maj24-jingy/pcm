import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/pc/HelloWorld'
// import Index from '@/components/pc/index'
// import Login from '@/components/pc/login'
// import Register from '@/components/pc/register'
// import ForgetPass from '@/components/pc/forgetPass'
// import Duihuan from '@/components/pc/mainPage/duihuan'
// import Kuang from '@/components/pc/mainPage/kuang'
// import ZiChan from '@/components/pc/mainPage/ziChan'
// import ShiChang from '@/components/pc/mainPage/shiChang'
// import ProductDetails from '@/components/pc/mainPage/productDetails'
// import User from '@/components/pc/user/user'

Vue.use(Router)

let router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/pc/HelloWorld'], resolve),
      redirect:'/index',
      children:[
          {
            path: '/index',
            name: 'index',
            component: resolve => require(['@/components/pc/index'], resolve),
          },
          {
            path: '/duihuan',
            name: 'duihuan',
            component: resolve => require(['@/components/pc/mainPage/duihuan'], resolve),
          },
          {path: '/kuang',name: 'kuang',component: resolve => require(['@/components/pc/mainPage/kuang'], resolve)},
          {path: '/ziChan',name: 'ziChan',component: resolve => require(['@/components/pc/mainPage/ziChan'], resolve)},
          {path: '/shiChang',name: 'shiChang',component: resolve => require(['@/components/pc/mainPage/shiChang'], resolve)},
          {path: '/productDetails',name: 'productDetails',component: resolve => require(['@/components/pc/mainPage/productDetails'], resolve)},
          {path: '/user',name: 'user',component: resolve => require(['@/components/pc/user/user'], resolve)},
      ],
      
    },
    {path: '/login',name: 'login', component: resolve => require(['@/components/pc/login'], resolve)},
    {path: '/register',name: 'register',component: resolve => require(['@/components/pc/register'], resolve)},
    {path: '/forgetPass',name: 'forgetPass',component: resolve => require(['@/components/pc/forgetPass'], resolve)},


  ]
})

/**
 * 判断是否为移动设备，是，则跳转到移动端的路径
 */
router.beforeEach((to, from, next) => {
  if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/m_index.html#/'
    return
  }
  next()
})

export default router
