import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import router from './router'
import i18n from './i18n'

import * as JQuery from "jquery";
const $ = JQuery.default;
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap'

// import plugins individually - require exports-loader
import 'bootstrap/js/dist/modal'
import 'bootstrap/js/dist/tooltip'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/scss/bootstrap.scss'

Vue.config.productionTip = false

router.beforeEach((to, from, next) =>{
  let language = to.params.lang;
  if(!language){
    language = 'ar'
  }

  if (language === 'ar') {
    $('body').addClass('rtl');
 
  } else if (language == 'en') {
    $('body').removeClass('rtl');
 
  }
  i18n.locale = language
  next()
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
