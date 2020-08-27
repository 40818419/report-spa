import { mount, createLocalVue } from '@vue/test-utils';
import ReportChart from './ReportChart.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import router from '../../router';
import VueCompositionApi from '@vue/composition-api';
import VueApexCharts from 'vue-apexcharts/dist/vue-apexcharts';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueCompositionApi);
localVue.use(VueApexCharts);
localVue.component('apexchart', VueApexCharts);

describe('file `ReportChart.vue`', () => {
  let wrapper: any;
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  })

  it('should render `ReportChart` component',async () => {
    const mockData = [{
      "uuid": "2d084e17-4e05-470f-a726-c66b991864a1",
      "body": {
        "bankName": "Murray - Hintz Bank",
        "bankBIC": [
          "ANXISTC1"
        ],
        "reportScore": 93.34057365887884,
        "type": "extended"
      },
      "createdAt": "2019-12-17T14:41:33.129Z",
      "publishedAt": "2019-08-20T23:50:25.665Z"
    }];

    wrapper = mount(ReportChart, {
      localVue,
      router,
      vuetify,
    });

    wrapper.setProps({
      categories: ['Murray - Hintz Bank'],
      scores: [93],
    });
    const updateOptions = jest.spyOn(wrapper.vm.$refs.realtimeChart, 'updateOptions');
    const updateSeries = jest.spyOn(wrapper.vm.$refs.realtimeChart, 'updateSeries');

    await wrapper.vm.$nextTick();
    expect(updateSeries).toHaveBeenCalled();
    expect(updateOptions).toHaveBeenCalled();
  })
})
