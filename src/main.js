import Vue from 'vue'
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'
//import VueGallery from 'vue-gallery';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faMapMarked, faHotel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'

library.add(faClock)
library.add(faMapMarked)
library.add(faHotel)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueFullPage);
//Vue.use(VueGallery);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
