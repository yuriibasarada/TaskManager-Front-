import Vue from 'vue'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import App from './App.vue'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message.plugin'

import 'materialize-css/dist/js/materialize.min.js'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.use(messagePlugin)

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
