import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/features/Accounts/Register'
import Login from '@/features/Accounts/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
