import Vue from 'vue'
import App from './App.vue'
import "../public/css/reset.css"
import router from './router'
import store from "@/store"
import "@/mock"
Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
