# Projeto de currículo como portfólio com Vue 3 e TypeScript

Framework/Build: Vue.js 3 (com Composition API e <script setup>) e Vite.

Linguagem: TypeScript em todo o projeto.

Roteamento: vue-router, configurado com history baseado na BASE_URL para funcionar perfeitamente no GitHub Pages.

Estilização:

Temas Dinâmicos: Sistema de Dark/Light Mode (Claro/Escuro) com CSS Variables.

Contraste: Lógica de design de "contraste", onde a sidebar tem sempre a cor oposta ao fundo da página.

Estado: Um "Composable" (useTheme) para gerenciar o estado do tema e salvá-lo no localStorage.

Fontes: Fontes customizadas (Bitcount, Press Start 2P, Lexend).

Animação: Transições (<Transition>) do Vue para um "fade-in" suave entre as páginas e efeitos "neon" com box-shadow e transition no CSS.

Consumo de API:

A página "Projetos" usa fetch para buscar dados dinamicamente da API pública do GitHub, mostrando seus repositórios mais recentes.

Deploy (CI/CD):

Hospedagem: GitHub Pages.

Automação: Um workflow de GitHub Actions (.yml) que "builda" o projeto Vite e faz o deploy automaticamente a cada push na branch main.

Resolução de problemas:

Configuramos o vite.config.ts (para o base path).

Debugamos o tsconfig.json e tsconfig.node.json (removendo noEmit e allowImportingTsExtensions) para corrigir erros de build que só apareciam no deploy.