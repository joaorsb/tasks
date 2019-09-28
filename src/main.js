import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from './store/index'
import moment from 'moment-timezone'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase'
import * as env from '../dev.env'

Vue.config.productionTip = false
const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

const firebaseConfig = {
  apiKey: env.apiKey,
  authDomain: env.authDomain,
  databaseURL: env.databaseURL,
  projectId: env.projectId,
  storageBucket: "",
  messagingSenderId: env.messagingSenderId,
  appId: env.appId
}


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          const loggedUser = {
            id: user.uid,
            email: user.email,
            password: ''
          }
          this.$store.dispatch('Accounts/setUser', loggedUser)
          this.$store.dispatch('Accounts/setToken', user.refreshToken)
        }
    })

  }
}).$mount('#app')
export const db = firebase.firestore()
