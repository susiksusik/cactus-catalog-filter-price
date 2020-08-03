import Vue from "vue";
import App from "./App.vue";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'

Vue.config.productionTip = false;
Vue.use(Buefy)
Vue.use(Table)
Vue.use(Input)
Vue.config.devtools = true

new Vue({
  render: h => h(App)
}).$mount("#app");
