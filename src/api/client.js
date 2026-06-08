import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://dragonball-api.com/api',
    timeout: 10000,
    headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se c'è un errore di rete o l'API risponde con un 404/500, lo logga in rosso
    console.error("🚨 Errore API:", error.response?.status, error.message);
    
    // Passa l'errore store Zustand
    return Promise.reject(error);
  }
);






