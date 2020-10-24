import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from'element-ui'; 
import'element-ui/lib/theme-chalk/index.css';
import i18n from '@/i18n'
Vue.use(ElementUI, {
	size: 'default',
	i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
