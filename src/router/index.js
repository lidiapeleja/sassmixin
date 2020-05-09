import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import '@/assets/styles/_variables.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'bla bla bla',
      metaTags: [
        {
          name: 'description',
          content: 'bla bla bla',
        },
        {
          property: 'og:description',
          content: 'bla bla bla',
        },
      ],
    },
  },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
