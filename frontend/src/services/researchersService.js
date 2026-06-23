// src/services/researchersService.js
import { delay } from './api';

export const researchersService = {
  // GET: Retorna os pesquisadores ativos
  getAll: async () => {
    await delay();
    const data = localStorage.getItem('labic_researchers');
    return data ? JSON.parse(data) : [];
  },

  // POST: Cadastra um novo pesquisador
  create: async (researcherData) => {
    await delay();
    const data = localStorage.getItem('labic_researchers');
    const researchers = data ? JSON.parse(data) : [];

    const newResearcher = {
      id: String(Date.now()),
      name: researcherData.name,
      email: researcherData.email,
      area: researcherData.area,
      bio: researcherData.bio,
      link: researcherData.link || ''
    };

    researchers.unshift(newResearcher);
    localStorage.setItem('labic_researchers', JSON.stringify(researchers));
    return newResearcher;
  },

  // DELETE: Remove um pesquisador da equipe
  delete: async (id) => {
    await delay();
    const data = localStorage.getItem('labic_researchers');
    if (data) {
      const researchers = JSON.parse(data);
      const filtered = researchers.filter(res => res.id !== id);
      localStorage.setItem('labic_researchers', JSON.stringify(filtered));
    }
    return true;
  }
};