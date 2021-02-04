import Vue from 'vue';
import service from '@/api/index';
import App from './App.vue';
import router from './router';

Vue.prototype.axios = service;
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
