import { shallowMount, createLocalVue } from '@vue/test-utils';
import App from './App.vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import router from '../router';
import VueCompositionApi from '@vue/composition-api'

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueCompositionApi);

describe('file `App.vue`', () => {
  let wrapper: any;
  let vuetify: any;

  beforeEach(() => {
    vuetify = new Vuetify();
  })

  it('should render `App` component', () => {
    const dispatch = jest.fn();

    wrapper = shallowMount(App, {
      localVue,
      router,
      vuetify,
      mocks: {
        $store: {
          dispatch
        }
      }
    });

    expect(dispatch).toHaveBeenCalledTimes(1);
  })
})
