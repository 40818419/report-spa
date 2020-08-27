import { shallowMount, createLocalVue } from '@vue/test-utils';
import Report from './Report.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import router from '../../router';
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueCompositionApi);

describe('file `Report.vue`', () => {
  let wrapper: any;
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  })

  it('should render `Report` component', async () => {
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
    }]

    wrapper = shallowMount(Report, {
      localVue,
      router,
      vuetify,
      mocks: {
        $store: {
          getters: {
            ['report/getReport']: []
          }
        }
      }
    });

    wrapper.vm.setCurrentItems(mockData);

    await wrapper.vm.$nextTick();
    expect(wrapper.vm.categories).toEqual(['Murray - Hintz Bank']);
    expect(wrapper.vm.scores).toEqual([93]);
  })
})
