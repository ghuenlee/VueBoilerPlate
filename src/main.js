import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// Setting up Bootstrap
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Setting up FontAwesome
import FontAwesomeVue from '@fortawesome/vue-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
import regular from '@fortawesome/fontawesome-free-regular'

fontawesome.library.add(regular, solid)
Vue.component('fa-icon', FontAwesomeVue)
Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
