import Vue from 'vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VeeValidate, {
  Validator
} from 'vee-validate';
import ru from 'vee-validate/dist/locale/en';
import App from './App.vue';

Validator.localize('ru', ru);
Vue.use(VeeValidate, {
  locale: 'ru',
});

Vue.config.productionTip = false;
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')