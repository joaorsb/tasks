import Vue from 'vue'
import Vuex from 'vuex'
import Accounts from '@/features/Accounts/store/'

Vue.use(Vuex)
const modules = {
  Accounts

}

export default new Vuex.Store({
  modules
})
