import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

//Criada função para receber uma data inicial e retornar um contador de Ano e Mes
function atualizarContador(dataInicial) {
  const agora = new Date();
  const inicio = new Date(dataInicial);

  const diferenca = agora - inicio;
  const anos = Math.floor(diferenca / (1000 * 60 * 60 * 24 * 365));
  const meses = Math.floor((diferenca % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

  // Retorna o texto formatado
  return `${anos > 0 ? `${anos} ano${anos === 1 ? '' : 's'}, ` : ''}${meses} mes${meses === 1 ? '' : 'es'}`;
}

// Data inicial da experiência
const dataInicialEasypro = '2023-07-21';
const dataInicialBackdesk = '2024-01-01';
const dataInicialGestTraf = '2020-02-01';
const dataInicialSite = '2021-02-01';

// Atualiza o valor do contador no elemento HTML e EASYPRO
setInterval(() => {
  const contadorTexto = atualizarContador(dataInicialEasypro);
  const contadorElemento = document.getElementById('contador');
  if (contadorElemento) {
    contadorElemento.textContent = contadorTexto;
  }
}, 1000);

// Atualiza o contador do Backdesk
setInterval(() => {
  const contadorBackdesk = atualizarContador(dataInicialBackdesk);
  const contadorElementoBackdesk = document.getElementById('contadorBackdesk');
  if (contadorElementoBackdesk) {
    contadorElementoBackdesk.textContent = contadorBackdesk;
  }
}, 1000);

// Atualiza o contador da GestTraf
setInterval(() => {
  const contadorGestTraf = atualizarContador(dataInicialGestTraf);
  const contadorElementoGestTraf = document.getElementById('contadorGestTraf');
  if (contadorElementoGestTraf) {
    contadorElementoGestTraf.textContent = contadorGestTraf;
  }
}, 1000);

// Atualiza o contador da Criação de Sites
setInterval(() => {
  const contadorSite = atualizarContador(dataInicialSite);
  const contadorElementoSite = document.getElementById('contadorSite');
  if (contadorElementoSite) {
    contadorElementoSite.textContent = contadorSite;
  }
}, 1000);

// Atualiza o hoverChangeExperience para Easypro Tech
setInterval(() => {
  const contadorEasy = atualizarContador(dataInicialEasypro);

  hoverChangeExperience(
    ".EASYPRO_TECH",  
    `Minha primeira experiência com código foi na EASYPRO TECH, uma 
            empresa que desenvolve sistemas para indústrias. Lá, tive contato 
            com Back-end e Front-end, além de diversas oportunidades, como nossa participação 
            na Hannover Messe, a maior feira industrial e tecnológica do mundo. Essa experiência 
            me permitiu compreender melhor a grandiosidade do mercado global.`,
    "Primeiro contato com Desenvolvimento",
    "Empresa - EASYPRO TECH",
    `Jun 2023 - Dias atuais: ${contadorEasy}`
  );
}, 1000);

// Atualiza o hoverChangeExperience para Backdesk
setInterval(() => {
  const contadorBackdesk = atualizarContador(dataInicialBackdesk);

  hoverChangeExperience(
    ".BACKDESK",
    `Como CMO, lidero estratégias de marketing e comunicação, focando 
    no fortalecimento da marca, geração de leads qualificados e expansão de mercado.
     Minha atuação inclui a gestão de campanhas, análise de resultados e alinhamento
      das ações com os objetivos estratégicos da empresa.`,
    "CMO - Chief Marketing Officer",
    "Empresa - BACKDESK",
    `Jan 2024 - Dias atuais: ${contadorBackdesk}`
  );
}, 1000);

// Atualiza o hoverChangeExperience para Gestao de Trafego
setInterval(() => {
  const contadorGestTraf = atualizarContador(dataInicialGestTraf);

  hoverChangeExperience(
    ".gestao_trafego",
    `Como gestor de tráfego, atuei em diversas empresas desenvolvendo e gerenciando campanhas de
     anúncios pagos em plataformas como Google Ads, Meta Ads e Linkedin Ads. Minha experiência inclui 
     a criação de estratégias para atrair tráfego qualificado, otimização de campanhas para maximizar 
     ROI e análise de métricas para garantir resultados alinhados aos objetivos de cada negócio.`,
    "Gestor de Tráfego",
    "Planejar, executar e gerenciar campanhas.",
    `Fev 2020 - Dias atuais: ${contadorGestTraf}`
  );
}, 1000);

// Atualiza o hoverChangeExperience para Site
setInterval(() => {
  const contadorSite = atualizarContador(dataInicialSite);

  hoverChangeExperience(
    ".Wix",
    `Trabalhei como Social Media e Web Designer em diversas empresas, com foco na 
    criação de conteúdos relevantes e personalizados para diferentes nichos de mercado. 
    Minha atuação incluiu estratégias voltadas para a criação e promoção de marcas, desenvolvendo 
    materiais visuais impactantes e campanhas que fortaleceram a identidade e presença digital das 
    empresas.`,
    "Social Media & Web Designer",
    "Criação e promoção de marca",
    `Fev 2021 - Dias atuais: ${contadorSite}`
  );
}, 1000);



hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
