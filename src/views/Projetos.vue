<template>
    <div>
        <h2 class="titulo-projetos">Projetos ON</h2>
        <p class="subtitulo-projetos">
            Meus repositórios mais recentes do GitHub.
        </p>

        <div v-if="loading" class="estado-feedback">
            Carregando projetos do GitHub...
        </div>

        <div v-if="error" class="estado-feedback erro">
            {{ error }}
        </div>

        <div v-if="!loading && !error" class="projetos-grid">

            <div v-for="repo in repos" :key="repo.id" class="projeto-card">

                <div class="card-header">
                    <h3>
                        <a :href="repo.html_url" target="_blank" rel="noopener noreferrer">
                            {{ repo.name }}
                        </a>
                    </h3>
                </div>

                <p class="descricao">{{ repo.description || 'Sem descrição.' }}</p>

                <div class="card-footer">
                    <span v-if="repo.language" class="language">
                        <i class="bi bi-code-slash"></i> {{ repo.language }}
                    </span>
                    <span class="stars" title="Stars">
                        <i class="bi bi-star-fill"></i> {{ repo.stargazers_count }}
                    </span>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// --- Configuração ---
const GITHUB_USERNAME = 'mbguedes';
const REPO_COUNT = 8; // Quantos repositórios mostrar

// --- Tipagem para os dados da API ---
interface Repo {
    id: number;
    name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    stargazers_count: number;
}

// --- Estado Reativo ---
const repos = ref<Repo[]>([]);
const loading = ref(true);
const error = ref<string | null>(null);

// --- Lógica de Busca ---
onMounted(async () => {
    try {
        //A API PUXA O PUSH MAIS RECENTE E SEGUE NA ORDEM
        const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=${REPO_COUNT}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Não foi possível buscar os repositórios.');
        }

        const data = await response.json();


        repos.value = data;

    } catch (e: any) {
        error.value = e.message || 'Ocorreu um erro ao buscar os dados.';
    } finally {
        loading.value = false;
    }
});
</script>

<style scoped>
/* Títulos da Página */



.titulo-projetos {
    font-family: "Press Start 2P", monospace;
    color: var(--cor-destaque);
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0.5rem;
}

.subtitulo-projetos {
    text-align: center;
    font-size: 0.9rem;
    opacity: 0.8;
    margin-top: 0;
    margin-bottom: 3rem;
}

/* Feedback de Carregamento/Erro */
.estado-feedback {
    text-align: center;
    font-size: 1rem;
    padding: 2rem;
    opacity: 0.7;
}

.erro {
    color: #ff4d4d;
}

/* Grid Responsivo de Cards */
.projetos-grid {
    display: grid;
    /* Cria colunas de no mínimo 300px, que se ajustam automaticamente */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

/* Estilo do Card Individual */
.projeto-card {
    /* Usamos a cor da sidebar para o card, criando o contraste */
    background-color: var(--cor-sidebar-fundo);
    color: var(--cor-sidebar-texto);
    border-radius: 8px;
    padding: 1.5rem;

    /* Faz o card crescer para preencher o espaço (para o rodapé) */
    display: flex;
    flex-direction: column;

    border: 1px solid var(--cor-hover-fundo);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.projeto-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-header h3 {
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    font-family: "Press Start 2P", system-ui;
}

/* O link dentro do H3 usa a cor de destaque */
.card-header h3 a {
    color: var(--cor-destaque);
    text-decoration: none;
}

.card-header h3 a:hover {
    text-decoration: underline;
}

.descricao {
    font-family: "Lexend", system-ui, sans-serif;
    font-size: 0.9rem;
    line-height: 1.6;
    /* Ocupa o espaço disponível, empurrando o rodapé para baixo */
    flex-grow: 1;
    opacity: 0.8;
}

/* Rodapé do Card */
.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    font-size: 0.8rem;
    opacity: 0.7;
}

.language,
.stars {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.stars {
    /* Cor amarela para estrelas */
    color: #f1c40f;
}
</style>