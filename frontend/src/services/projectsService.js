// src/services/projectsService.js
import { delay } from './api';

export const projectsService = {
  getAll: async () => {
    await delay();
    const data = localStorage.getItem('labic_projects');
    if (!data) {
      const initialProjects = [
        { id: '1', title: 'Deep Learning Model', status: 'Ativo', startDate: '2022-03-10', endDate: '' },
        { id: '2', title: 'Smart 3D Printer Controller', status: 'Em Execução', startDate: '2023-05-15', endDate: '' },
        { id: '3', title: 'Community Drone Mapping', status: 'Ativo', startDate: '2024-01-20', endDate: '' }
      ];
      localStorage.setItem('labic_projects', JSON.stringify(initialProjects));
      return initialProjects;
    }
    return JSON.parse(data);
  },

  create: async (projectData) => {
    await delay();
    const data = localStorage.getItem('labic_projects');
    const projects = data ? JSON.parse(data) : [];

    const newProject = {
      id: String(Date.now()),
      title: projectData.title,
      status: projectData.status || 'Em Planejamento',
      startDate: projectData.startDate,
      endDate: projectData.endDate || ''
    };

    projects.unshift(newProject);
    localStorage.setItem('labic_projects', JSON.stringify(projects));
    return newProject;
  }
};