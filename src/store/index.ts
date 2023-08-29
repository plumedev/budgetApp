import { createStore } from 'vuex';
import { getModule } from 'vuex-module-decorators';

import SubStore from '@/store/subStore';

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    subStore: SubStore,
  },
});

export default store;

export const subStore = (): SubStore => getModule(SubStore, store);
