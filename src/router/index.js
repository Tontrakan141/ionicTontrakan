import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue'
import AddMemoriesPage from '../pages/AddMemoriesPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/addmemories',
    component: AddMemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import ('../pages/MemoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../pages/AddMemoriesPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;