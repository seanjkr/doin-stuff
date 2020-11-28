import Vue from 'vue'
import App from './App.vue'
import { MdField } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import { MdList } from 'vue-material/dist/components';
import { MdButton } from 'vue-material/dist/components';
import { MdCard } from 'vue-material/dist/components';
import { MdIcon } from 'vue-material/dist/components';
import { MdToolbar } from 'vue-material/dist/components';

Vue.use( MdField );
Vue.use( MdList );
Vue.use( MdButton );
Vue.use( MdCard );
Vue.use( MdIcon );
Vue.use( MdToolbar );

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')