// src/services/articlesService.js
import { delay } from './api';

export const articlesService = {
  // GET: Lista todos os artigos cadastrados
  getAll: async () => {
    await delay();
    const data = localStorage.getItem('labic_articles');
    return data ? JSON.parse(data) : [];
  },

  // POST: Adiciona um novo artigo validado ao banco local
  create: async (articleData) => {
    await delay();
    const data = localStorage.getItem('labic_articles');
    const articles = data ? JSON.parse(data) : [];
    
    const newArticle = {
      id: String(Date.now()),
      title: articleData.title,
      authors: Array.isArray(articleData.authors) ? articleData.authors.join(', ') : articleData.authors,
      date: new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'Short', year: 'numeric' }).replace('.', ''),
      status: 'Ativo',
      relatedArea: articleData.relatedArea
    };

    articles.unshift(newArticle); // Insere no topo da listagem
    localStorage.setItem('labic_articles', JSON.stringify(articles));
    return newArticle;
  },

  // DELETE: Remove um artigo pelo ID
  delete: async (id) => {
    await delay();
    const data = localStorage.getItem('labic_articles');
    if (data) {
      const articles = JSON.parse(data);
      const filtered = articles.filter(art => art.id !== id);
      localStorage.setItem('labic_articles', JSON.stringify(filtered));
    }
    return true;
  }
};