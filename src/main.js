import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
import VueGallery from 'vue-gallery';
import App from './App.vue'
Vue.use(VueFullPage);
Vue.use(VueGallery);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
