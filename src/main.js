import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.filter('date', DateFilter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
