<template>
    <div class="pagina-sobre">
        <section class="sobre-hero">

            <div class="foto-container">
                <img src="/Perfil.png" alt="Foto de Marcio Bodini Guedes" class="foto-perfil">
            </div>

            <div class="info-container">
                <h1 class="titulo-principal">Marcio Bodini Guedes</h1>

                <p class="subtitulo">
                    Analista de Sistema | Qualidade de Software | Desenvolvedor Full Stack | Entusiasta de Tecnologia
                </p>
            </div>
        </section>

<section class="secao-conteudo">
            <h2>Quem sou eu?</h2>
            <p>Olá! Sou Marcio Bodini Guedes, um apaixonado por tecnologia desde ambientes de rede e cybersecurity até design patterns, desenvolvimento fullstack e qualidade de software. Desde cedo, com 10 anos já "fuçava" os computadores da lan-house do meu pai, que por sinal também era do T.I.(programador Cobol), sim rapaziada eles existiram! Hahahahahaha! <p>Me formei em Análise e Desenvolvimento de Sistemas pela FIAP, estou sempre buscando aprimorar minhas habilidades e conhecimentos na área de TI, até porquê é minha verdadeira paixão de vida!</p> Tenho experiência em desenvolvimento full stack, testes de software e metodologias ágeis. Adoro enfrentar desafios técnicos, inclusive o último foi um joguinho "The Farmer Was Replaced" que é sensacional! Esse o desafio foi parar! Fora do ambiente profissional, sou entusiasta de novas tecnologias, jogos e um bom rock`n`roll. Estou animado para conectar-me com outros profissionais da área e explorar novas oportunidades de crescimento.</p>
</section>

        <section class="secao-conteudo">
            <h2>Formação e Certificações</h2>

<ul class="lista-custom">

        <li>
            <strong>Análise e Desenvolvimento de Sistemas</strong>
            <p>
                <a href="https://www.fiap.com.br" targe="_blank" rel="noopener noreferrer">
                FIAP
                </a>| 2024 - 2025</p>
        </li>

        <li>
            <strong>Quality Assurance</strong>
            <p>
            <a href="https://www.instagram.com/institutojogajunto/" target="_blank" rel="noopener noreferrer">
                Instituto JogaJunto
            </a>
            | Emitida em 2024
            </p>
        </li>

        </ul>
        </section>

        <section class="secao-conteudo">
            <h2>Experiência Profissional</h2>

            <div class="item-experiencia">
                <h3>Analista de T.I. | Automação Comercial | ERP</h3>
                <p class="empresa-data">Consultor de T.I. Autônomo | Mai 2016 - O momento</p>
                <ul class="lista-custom">
                    <li> Consultor técnico para diversas empresas, oferecendo soluções completas em automação de processos, suporte de TI, CRM, ERP e Infraestrutura.</li>
                    <li> Garantia de suporte técnico a mais de 80 clientes, mantendo uma alta taxa de satisfação.</li>
                    <li> Liderança na identificação de problemas sistêmicos na utilização de softwares ERP, o que reduziu o tempo de inatividade operacional.</li>
                </ul>
            </div>
            <div class="item-experiencia">
                <h3>Analista de testes</h3>
                <p class="empresa-data">Mutant | Fev 25 - Ago 2025</p>
                <ul class="lista-custom">
                    <li>Execução de testes manuais e automatizados em um ambiente de garantia de qualidade (QA).</li>
                    <li>Análise e documentação de casos de teste (CTs) e bugs, colaborando ativamente com equipes multidisciplinares (desenvolvedores, POs e SMs).</li>
                    <li>Reestruturação de cenários de testes da GOL para a linguagem BDD, resultando em uma melhoria significativa na leitura e manutenção dos testes.</li>
                    <li>Utilização diária de ferramentas como Jira, Rogue, Grafana, Lighthouse e Postman para gestão e análise de testes. Participação em treinamentos quinzenais para aprimoramento de habilidades e troca de conhecimento com outros QAs.</li>
            </ul>
            </div>
            <div class="item-experiencia">
                <h3>Gerente Operacional | Governança de T.I.</h3>
                <p class="empresa-data">Restaurante Viana | Jul 20 - Fev 2025</p>
                <ul class="lista-custom">
                    <li>Implementação de sistemas ERP (Totvs Chef, NetPDV e Galileo), resultando em uma operação mais ágil e eficiente.</li>
                    <li>Treinei e capacitei a equipe em novos sistemas ERP, aumentando a produtividade geral.</li>
                    <li> Geri de forma eficiente os insumos e controlei estoques, resultando em uma redução de desperdícios e custos operacionais.</li>
                </ul>
            </div>
            <div class="item-experiencia">
                <h3>Gerente de Vendas</h3>
                <p class="empresa-data">Blackball - Billiard for Design | Jul 14 - Fev 15</p>
                <ul class="lista-custom">
                    <li>Demonstrar o produto, avaliar o potencial de compra dos clientes para elaboração da estratégia de venda, organizar agenda de follow up, arrumação da loja, negociação de prazos para entrega, organização logística das montagens dos produtos vendidos, negociação de suporte aos vendedores na tentativa de finalizar a venda.</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
// Nenhuma lógica extra é necessária aqui por enquanto
</script>

<style scoped>
/* Estilos para a página "Sobre" */
.pagina-sobre {
    padding: 1rem;
}

/* --- Seção Hero (Foto + Resumo) --- */
.sobre-hero {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
}

.foto-container {
    flex-shrink: 0;
    /* Impede que a foto encolha */
}

.foto-perfil {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    /* Garante que a foto não fique distorcida */
    border: 2px solid var(--cor-destaque);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
}

.foto-container:hover .foto-perfil {
    box-shadow:
        0 4px 15px rgba(0, 0, 0, 0.3),
        0 0 15px var(--cor-destaque);
}

.info-container {
    flex-grow: 1;
}

.subtitulo {
    /* Usando a fonte do tema, mas um pouco menor */
    font-family: "Press Start 2P", system-ui;
    font-size: 1rem;
    color: var(--cor-texto);
    opacity: 0.8;
    margin-top: -1.5rem;
    /* Puxa para mais perto do título */
}

.resumo {
    font-size: 0.9rem;
    line-height: 1.7;
    /* NOTA: A fonte "Press Start 2P" é ruim para leitura longa.
    O 'body' já a define, mas se quiser trocar SÓ AQUI, 
    descomente a linha abaixo:
  */
    /* font-family: 'Arial', sans-serif; */
}

/* --- Seções de Conteúdo (Formação/Experiência) --- */
.secao-conteudo {
    margin-bottom: 3rem;
    border-top: 1px solid var(--cor-hover-fundo);
    padding-top: 2rem;
}

.secao-conteudo h2 {
    font-family: "Press Start 2P", system-ui;
    color: var(--cor-destaque);
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
}

/* Lista de Experiência */
.item-experiencia {
    margin-bottom: 2rem;
}

.item-experiencia h3 {
    font-family: "Press Start 2P", system-ui;
    font-size: 1rem;
    color: var(--cor-texto);
}

.item-experiencia .empresa-data {
    font-weight: bold;
    opacity: 0.7;
    margin-top: -0.5rem;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
}

.lista-custom {
    padding-left: 20px;
    list-style: none;
    padding-left: 0;
}

.lista-custom li {
    margin-bottom: 0.75rem;
}


/* --- Responsividade --- */
@media (max-width: 768px) {
    .sobre-hero {
        flex-direction: column;
        /* Empilha a foto e o texto */
        text-align: center;
    }

    .subtitulo {
        margin-top: -1rem;
        margin-bottom: 1.5rem;
        font-size: 0.9rem;
    }

    .foto-perfil {
        width: 150px;
        height: 150px;
    }

    .secao-conteudo h2,
    .item-experiencia h3 {
        text-align: center;
    }
}
</style>