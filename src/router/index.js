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
      title: 'SASS Mix() Function Color Finder',
      metaTags: [
        {
          name: 'description',
          content: 'SASS Mix() Function Color Finder',
        },
        {
          property: 'og:description',
          content: 'SASS Mix() Function Color Finder',
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
