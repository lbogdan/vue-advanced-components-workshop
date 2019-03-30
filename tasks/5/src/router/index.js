import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home.vue';
import Page1 from '../pages/Page1.vue';
import Page2 from '../pages/Page2.vue';
import Page3 from '../pages/Page3.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
    },
    {
      path: '/pages/1',
      component: Page1,
      name: 'page-1',
    },
    {
      path: '/pages/2',
      component: Page2,
      name: 'page-2',
    },
    {
      path: '/pages/3',
      component: Page3,
      name: 'page-3',
    },
  ],
});
