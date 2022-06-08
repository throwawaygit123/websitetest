import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import local from 'element-ui/lib/locale/lang/en.js'
// import axios from 'axios'
Vue.use(VueI18n)
Vue.use(ElementUI,{local})
const i18n = new VueI18n({
  locale:'en-CN',
  messages:{
    'zh-CN':require('./lang/zh'),
    'en-US':require('./lang/en')
  },
  silentTranslationWarn: true
})

// const $axios = axios.create({
  
//   timeout: 5000
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  // axios,
  render: h => h(App)
}).$mount('#app')
