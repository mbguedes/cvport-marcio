<template>
    <div>
        <button class="menu-toggle" @click="toggleMenu">
            <i :class="isOpen ? 'bi bi-x-lg' : 'bi bi-list'"></i>
        </button>

        <aside :class="['sidebar', { 'open': isOpen || isDesktop}]">
            <nav>
                <ul class="direcao">
                    <li><router-link to="/" @click="closeMenu">Sobre</router-link></li>
                    <li><router-link to="/Projetos" @click="closeMenu">Projetos</router-link></li>
                </ul>

                <div class="theme-toggle-container">
                    <button @click="toggleTheme" class="theme-toggle" :aria-label="isDark ? 'Ativar modo claro' : 'Ativar modo escuro'">
                        <i :class="isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill'"></i>
                    </button>
                </div>

                <ul class="social">
                    <li><a href="https://github.com/mbguedes" target="_blank" aria-label="GitHub"><i class="bi bi-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/mbguedesdev/" target="_blank" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></li>
                    <li><a href="mailto:marcio.techwork@gmail.com" target="_blank" aria-label="Email"><i class="bi bi-envelope-at-fill"></i></a></li>
                </ul>

            </nav>
        </aside>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
// Importa o nosso Composable de gerenciamento de tema
import { useTheme } from '@/composables/useTheme'; 

// 1. Lógica do Tema
const { isDark, toggleTheme } = useTheme();

// 2. Lógica Original da Sidebar
const isOpen = ref(false)
const isDesktop = ref(window.innerWidth >= 768);

const toggleMenu = () => {
    isOpen.value = !isOpen.value;
};

// Fecha o menu ao clicar num link no mobile
const closeMenu = () => {
    if(!isDesktop.value) isOpen.value = false
};

// Lida com o redimensionamento da janela
const handleResize = () => {
    isDesktop.value = window.innerWidth >= 768
    // Se a tela for desktop, fecha o menu mobile (caso esteja aberto)
    if (isDesktop.value) isOpen.value = false
};

// Adiciona e remove o listener de resize
onMounted(() => {
    window.addEventListener('resize', handleResize)
    handleResize(); // Executa uma vez ao montar
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100px;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    transform: translateX(0);
    transition: transform 0.3s ease, background-color 0.3s ease;

    /* Cores do Tema */
    background-color: var(--cor-sidebar-fundo);
    border-right: 1px solid var(--cor-hover-fundo); /* Borda sutil */
}

.sidebar nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center; /* Centraliza os ícones/texto */
    flex: 1;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    text-align: center; /* Centraliza itens */
}

.sidebar li {
    margin-bottom: 1.5rem;
}

.sidebar a {
    /* Cor do Tema */
    color: var(--cor-sidebar-texto); 
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease, color 0.3s ease;
}

.sidebar .social a {
    font-size: 1.5rem;
}

.sidebar .social a:hover,
.sidebar .direcao a:hover {
    color: var(--cor-destaque);
}
.sidebar .social a:hover {
    transform: scale(1.5);
}


.theme-toggle-container {
    margin: 2rem 0;
}
.theme-toggle {
    background: var(--cor-destaque);
    border: none;
    color: var(--cor-sidebar-texto);
    font-size: 1.2rem;
    padding: 0.5rem;
    border-radius: 50%;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;
}
.theme-toggle:hover {
    background: var(--cor-destaque);
    color: var(--cor-sidebar-fundo); /* Inverte a cor para contraste */
}



.menu-toggle {
    background: var(--cor-destaque)); /* Fundo para destacar */
    border: 1px solid var(--cor-hover-fundo);
    color: black;
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 2001;
    display: none;
    padding: 0.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    cursor: pointer;
}

/* Media Query para Mobile */
@media (max-width: 768px) {
    .menu-toggle{
        display: block;
    }
    .sidebar{
        width: 150px;
        transform: translateX(-100%);
        border-right: 1px solid var(--cor-hover-fundo);
    }
    .sidebar.open{
        transform: translateX(0);
        box-shadow: 5px 0px 15px rgba(0,0,0,0.1);
    }
}
</style>