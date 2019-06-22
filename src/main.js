import Vue from 'vue'
import App from './App.vue'
import Sweetalert from 'vue-sweetalert2'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(Sweetalert);
Vue.use(BootstrapVue)
new Vue({
  render: h => h(App),
}).$mount('#app')
