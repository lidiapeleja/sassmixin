import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueGtag from 'vue-gtag';
import '../node_modules/animate.css/animate.css';
import '../node_modules/aos/dist/aos.css';
import vueHeadful from 'vue-headful';

Vue.component('vue-headful', vueHeadful);

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: 'UA-145817345-1' },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
