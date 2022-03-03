// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App, apexchart: VueApexCharts },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBnAb9owSJTmCqhJjsIVSGK_E7-XwLTb5o',
      authDomain: 'kaka-stream.firebaseapp.com',
      projectId: 'kaka-stream',
      storageBucket: 'kaka-stream.appspot.com',
      messagingSenderId: '909517773655',
      appId: '1:909517773655:web:fa6d33868207a31f0d3c12'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
