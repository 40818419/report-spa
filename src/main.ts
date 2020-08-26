import Vue from 'vue';
import App from '@/components/App.vue';
import './registerServiceWorker';
import VueCompositionApi from '@vue/composition-api';
import VueApexCharts from 'vue-apexcharts';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.use(VueCompositionApi);
Vue.use(VueApexCharts);

Vue.component('apexchart', VueApexCharts);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
