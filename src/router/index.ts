import { createRouter, createWebHistory } from 'vue-router'
import Sobre from '../views/Sobre.vue'
import Projetos from '../views/Projetos.vue'

const routes = [
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

const router = createRouter({
    // Esta linha usa a variável de ambiente BASE_URL, que corrige
    // tanto o deploy quanto o seu localhost (que agora roda em /cvport-marcio/)
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router