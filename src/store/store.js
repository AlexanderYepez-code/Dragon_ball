import { create } from 'zustand';
import { apiClient } from '../api/client';

export const useDbStore = create((set) => ({
  characters: [],
  planets: [],
  isLoading: false,
  error: null,

  fetchCharacters: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await apiClient.get('/characters');
      set({ characters: response.data.items, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
  fetchCharacterById: async (id) => {
    set({ isLoading: true, error: null, currentCharacter: null });
    try {
      const response = await apiClient.get(`/characters/${id}`);
      set({ currentCharacter: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchPlanets: async () => {
    set({ isLoading: true, error: null });
    try {
      // Squadra 3 lavorerà qui
      const response = await apiClient.get('/planets');
      set({ planets: response.data.items, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));