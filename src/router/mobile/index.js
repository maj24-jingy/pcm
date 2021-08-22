import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/mobile/HelloWorld'
import Login from '@/components/mobile/login'
import Register from '@/components/mobile/register'

import Duihuan from '@/components/mobile/duihuan'
import Kuang from '@/components/mobile/kuang'
import User from '@/components/mobile/user'

Vue.use(Router)
// import less from 'less'
// Vue.use(less)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/duihuan',
      name: 'duihuan',
      component: Duihuan
    },
    {
      path: '/kuang',
      name: 'kuang',
      component: Kuang
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})

/**
 * 验证
 */
router.beforeEach((to, from, next) => {
  if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    window.location.href = '/p_index.html#/'
    return
  }
  next()
})

export default router