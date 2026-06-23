// src/services/api.js

// Simulação de delay de rede ativa para testar loadings no frontend
export const delay = (ms = 600) => new Promise(resolve => setTimeout(resolve, ms));

// Base centralizada para quando o axios/fetch for integrado
export const API_CONFIG = {
  baseURL: 'https://api.labic.institucional.edu.br/v1', // URL futura do backend
  headers: {
    'Content-Type': 'application/json',
  }
};

// Inicializador de banco de dados local (Mock Data inicial baseado nos seus mockups)
export const initializeMockDB = () => {
  if (!localStorage.getItem('labic_researchers')) {
    const initialResearchers = [
      { id: '1', name: 'Dr. Carlos Silva', email: 'carlos.silva@labic.edu', area: 'Inteligência Artificial e Manufatura Aditiva', bio: 'Doutor em Engenharia de Software pela Universidade XYZ. Especialista em aprendizado de máquina aplicado a processos industriais.', link: 'http://lattes.cnpq.br/123' },
      { id: '2', name: 'Dr. Aris Bibo', email: 'aris.bibo@labic.edu', area: 'Coordenador Geral', bio: 'Pesquisador sênior com vasta experiência em gestão de laboratórios tecnológicos.', link: '' },
      { id: '3', name: 'Ma. Júlia Gomes', email: 'julia.gomes@labic.edu', area: 'Robótica Colaborativa', bio: 'Mestre em automação e especialista em robôs industriais de pequena escala.', link: '' }
    ];
    localStorage.setItem('labic_researchers', JSON.stringify(initialResearchers));
  }

  if (!localStorage.getItem('labic_articles')) {
    const initialArticles = [
      { id: '1', title: 'ApplyFlow AI: Otimização de Candidaturas', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Ativo', relatedArea: 'Inteligência Artificial' },
      { id: '2', title: 'Prototipagem AI: Otimização Rápida', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Em Execução', relatedArea: 'Manufatura Aditiva' },
      { id: '3', title: 'Smart 3D: Otimização Controller ativos', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Em Execução', relatedArea: 'Manufatura Aditiva' },
      { id: '4', title: 'Sistemas & Tecnologias Emergentes', authors: 'A. M. Silva, J. S. Gouveia', date: '15 Mai 2026', status: 'Concluído', relatedArea: 'Robótica Colaborativa' }
    ];
    localStorage.setItem('labic_articles', JSON.stringify(initialArticles));
  }
};

// Executa a inicialização das tabelas mockadas ao carregar a camada de serviço
initializeMockDB();