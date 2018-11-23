// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
// 舊版是import 'vue-loading-overlay/dist/vue-loading.min.css'
import 'bootstrap'
import VeeValidate from 'vee-validate'
import zhTWValidate from 'vee-validate/dist/locale/zh_TW'
// zhTWValidate中文語系相關驗證

import App from './App'
import router from './router'
import './bus'
import currencyFilter from './filters/currency'
import dateFilter from './filters/date'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.defaults.withCredentials = true

VeeValidate.Validator.localize('zh_TW', zhTWValidate)
Vue.use(VeeValidate)

Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.filter('date', dateFilter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
// router.beforeEach((to, from, next)為導航守衛，使用者必須登入才能前往頁面
router.beforeEach((to, from, next) => {
  // ...
  // if (to.meta.requireAuth)如果頁面是需要登入的
  if (to.meta.requireAuth) {
    const api = `${process.env.APIPATH}/api/user/check`
    // 'https://vue-course-api.hexschool.io/api/noelstore/products'
    // API伺服器路徑+所申請的API PATH
    axios.post(api).then((response) => {
      console.log(response.data)
      if (response.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    // 如果不需要登入就可以直接進入
    next()
  }
})
