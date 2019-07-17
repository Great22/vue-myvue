// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store  from "./vuex/index.js"
import   "./assets/css/reset.css"
import   "./assets/js/rem.js"
import vueTouch   from "vue-touch"
Vue.config.productionTip = false;
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
global.APX_PROXY = "https://bird.ioliu.cn/v1/?url="
Vue.use(vueTouch, {name: "v-touch"})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
