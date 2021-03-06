import Vue from 'vue';
import VueRouter from 'vue-router';
import Progress from '../views/Progress.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/progress'
  },
  {
    path: '/progress',
    component: Progress,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/rank',
    name: 'Rank',
    component: () => import(/* webpackChunkName: "Rank" */ '../views/Rank.vue')
  },
  {
    path: '/robot',
    name: 'Robot',
    component: () => import(/* webpackChunkName: "Rank" */ '../views/RobotStatic.vue')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
