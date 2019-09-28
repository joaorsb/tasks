import Vue from 'vue'
import Vuex from 'vuex'
import Accounts from '@/features/Accounts/store/'
import Matches from '@/features/Matches/store/'

Vue.use(Vuex)
const modules = {
  Accounts,
  Matches

}

export default new Vuex.Store({
  modules
})
