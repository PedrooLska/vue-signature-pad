import Vue from 'vue';
import VueSignature from 'vue-signature-pad';
import App from './App.vue';

Vue.use(VueSignature);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount('#app');
