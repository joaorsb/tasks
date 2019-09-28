import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/features/Accounts/Register'
import Login from '@/features/Accounts/Login'
import Logout from '@/features/Accounts/Logout'
import MatchesList from '@/features/Matches/MatchesList'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Home,
      beforeEnter: AuthGuard
    },
    {
      path: '/matches',
      name: 'matches',
      component: MatchesList,
      beforeEnter: AuthGuard
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
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout
    },
  ]
})
