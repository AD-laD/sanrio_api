import { createRouter, createWebHistory } from 'vue-router';
import CharacterPage from '@/components/singleCharacter.vue';
import Router from './router.vue';
import PageRouter from './pagerouter.vue';

const routes = [
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: PageRouter,
    props: true,
  },
  {
    path: '/',
    name: 'Homepage',
    component: Router,
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
