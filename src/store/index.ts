import Vue from 'vue';
import Vuex from 'vuex';
import { report } from '@/modules/report/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    report,
  },
});
