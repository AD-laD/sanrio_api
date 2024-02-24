import { createRouter, createWebHistory } from 'vue-router';
import CharacterPage from '@/views/CharacterPage.vue';

const routes = [
  {
    path: '/character/:id',
    name: 'CharacterPage',
    component: CharacterPage,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
