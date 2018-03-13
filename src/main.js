import Vue from 'vue'
import Vuetify from 'vuetify'
import * as firebase from 'firebase'
import App from './App'
import AlertComp from './shared/Alert.vue'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyCkemNk2Lkb2JILhTYqfae9o_gRhC3i2vY',
      authDomain: 'vue-meetup-7b6ac.firebaseapp.com',
      databaseURL: 'https://vue-meetup-7b6ac.firebaseio.com',
      projectId: 'vue-meetup-7b6ac',
      storageBucket: 'vue-meetup-7b6ac.appspot.com'
    })

    this.$store.dispatch('loadMeetups')
  }
})
