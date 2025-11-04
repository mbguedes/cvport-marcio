import { createRouter, createWebHistory } from 'vue-router';
import Sobre from '../views/Sobre.vue'
import Projetos from '../views/Projetos.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
    {
        path: '/',
        name: 'Sobre',
        component: Sobre
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: Projetos
    }
    ]
});

export default router;