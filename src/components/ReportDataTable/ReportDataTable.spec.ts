import { mount, createLocalVue } from '@vue/test-utils';
import ReportDataTable from './ReportDataTable.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import router from '../../router';
import VueCompositionApi from '@vue/composition-api';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueCompositionApi);

describe('file `ReportDataTable.vue`', () => {
  let wrapper: any;
  let vuetify: any;

  const mockData = [{
    "uuid": "2c84d52d-2584-410d-9728-e7392b0765dc",
    "body": {
      "bankName": "Blanda - Witting Bank",
      "bankBIC": [
        "JNDIBEA1"
      ],
      "reportScore": 79.49769153273903,
      "type": "extended"
    },
    "createdAt": "2020-03-07T15:51:28.133Z"
  },
    {
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
    },]

  beforeEach(() => {
    vuetify = new Vuetify();

    wrapper = mount(ReportDataTable, {
      localVue,
      router,
      vuetify,
      propsData: {
        data: mockData
      }
    });
  });

  describe('should render `reportScoreHeaderFilter` filter',() => {
    it('should filter data not matched with range slider values', () => {
      wrapper.vm.slider = [2,200];
      expect(wrapper.vm.reportScoreHeaderFilter(1)).toBe(false);
    });
  });

  describe('should render `publishedAtHeaderFilter` filter', () => {
    it('should filter data not matched with publishedAtFilter` values ', () => {
      wrapper.vm.publishedAtFilter = null;
      expect(wrapper.vm.publishedAtHeaderFilter(null)).toBe(true);

      wrapper.vm.publishedAtFilter = true;
      expect(wrapper.vm.publishedAtHeaderFilter(true)).toBe(true);

      wrapper.vm.publishedAtFilter = false;
      expect(wrapper.vm.publishedAtHeaderFilter(false)).toBe(false);
    });
  });
});
