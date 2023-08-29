import { createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
import VueLoaders from 'vue-loaders';

import { App } from '@/views/App/App';
import router from './router';
import store from './store';

import { i18n } from '@/utils/I18N/I18N';

import './assets/scss/main.scss';

import 'bootstrap/dist/css/bootstrap.css';

createApp(App)
  .use(Notifications)
  .use(i18n)
  .use(store)
  .use(router)
  .use(VueLoaders)
  .mount('#app');
