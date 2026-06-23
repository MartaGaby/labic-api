// src/services/authService.js

const USERS_KEY = 'labic_users';
const SESSION_KEY = 'labic_session';

// 1. O "Seed": Injeta o Super Admin se o sistema estiver virgem (Dia 1)
const initializeDatabase = () => {
  const existingUsers = localStorage.getItem(USERS_KEY);
  if (!existingUsers) {
    const superAdmin = [
      {
        id: 1,
        name: 'Coordenação LABIC',
        email: 'coordenacao@labic.edu',
        password: 'Labic@Admin2026!', // Senha robusta e menos previsível
        role: 'SUPER_ADMIN'
      }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(superAdmin));
  }
};

// Roda a inicialização assim que o serviço é importado
initializeDatabase();

// Simulador de delay de rede
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  login: async (email, password) => {
    await delay(1000); // Finge que está indo na internet

    const users = JSON.parse(localStorage.getItem(USERS_KEY)) || [];
    
    // Procura o usuário no banco local
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      throw new Error('Endereço de e-mail ou senha inválidos.');
    }

    // Cria a sessão removendo a senha por segurança (Corrigido para evitar erro de variável não usada no ESLint)
    const userData = { ...user };
    delete userData.password;
    
    const sessionToken = `mock-jwt-token-${userData.id}-${Date.now()}`;
    
    const session = {
      user: userData,
      token: sessionToken
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
  },

  logout: async () => {
    await delay(500);
    localStorage.removeItem(SESSION_KEY);
  },

  getCurrentUser: () => {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session).user : null;
  },

  isAuthenticated: () => {
    return !!localStorage.getItem(SESSION_KEY);
  }
};