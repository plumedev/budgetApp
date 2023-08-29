import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

import Home from '@/views/Home/Home';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new-page/:pageId',
    name: 'NewPage',
    component: () => import('@/views/NewPage/NewPage'),
  },
  {
    path: '/*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
