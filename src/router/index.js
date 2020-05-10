import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

import '@/assets/styles/_variables.scss';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

import VueGtm from 'vue-gtm';
import VueRouter from 'vue-router';
const router = new VueRouter({ routes, mode, linkActiveClass });
 
Vue.use(VueGtm, {
  id: 'GTM-MGQ7VDN' or ['GTM-MGQ7VDN', 'GTM-MGQ7VDN'], // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
  queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
    gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview:'env-4',
    gtm_cookies_win:'x'
  },
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
});

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
