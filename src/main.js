import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import ProfilePlugin from "./plugins/profile-plugin.js";
import ConverterPlugin from "./plugins/converter-plugin.js";
import ResourcePlugin from "./plugins/resource-plugin.js";
import PopockSolidPlugin from "./plugins/popock-solid-plugin.js";
import PopockToolPlugin from "./plugins/popock-tool-plugin.js";
Vue.use(ProfilePlugin, { cutoff: 100 });
Vue.use(ConverterPlugin);
Vue.use(ResourcePlugin);
Vue.use(PopockSolidPlugin);
Vue.use(PopockToolPlugin);



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
