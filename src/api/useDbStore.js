import { create } from 'zustand';
import { apiClient } from '../api/client';

export const useDbStore = create((set) => ({

    characters: [],
    planets: [],


    // Dati per le pagine di dettaglio
    currentCharacter: null,
    currentPlanet: null,

    // Metadati per la paginazione
    charactersMeta: { currentPage: 1, totalPages: 1 },
    planetsMeta: { currentPage: 1, totalPages: 1 },

    isLoading: false,
    error: null,

    // 1. Prendi tutti i personaggi (con paginazione, di base pagina 1)
    fetchCharacters: async (page = 1) => {
        set({ isLoading: true, error: null });
        try {
            // Passiamo la pagina e il limite (10) come query string
            const response = await apiClient.get(`/characters?page=${page}&limit=8`);
            set({
                characters: response.data.items,
                charactersMeta: {
                    currentPage: response.data.meta.currentPage,
                    totalPages: response.data.meta.totalPages
                },
                isLoading: false
            });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },

    // 2. Prendi un singolo personaggio tramite ID
    fetchCharacterById: async (id) => {
        set({ isLoading: true, error: null, currentCharacter: null });
        try {
            const response = await apiClient.get(`/characters/${id}`);
            set({ currentCharacter: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
    // 3. Prendi tutti i pianeti (con paginazione)
    fetchPlanets: async (page = 1) => {
        set({ isLoading: true, error: null });
        try {
            const response = await apiClient.get(`/planets?page=${page}&limit=12`);
            set({
                planets: response.data.items,
                planetsMeta: {
                    currentPage: response.data.meta.currentPage,
                    totalPages: response.data.meta.totalPages
                },
                isLoading: false
            });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    },
    // 4. Prendi un singolo pianeta tramite ID
    fetchPlanetById: async (id) => {
        set({ isLoading: true, error: null, currentPlanet: null });
        try {
            const response = await apiClient.get(`/planets/${id}`);
            set({ currentPlanet: response.data, isLoading: false });
        } catch (error) {
            set({ error: error.message, isLoading: false });
        }
    }
}));



{/* <Group justify="center" mt="xl">
    <Pagination
        total={charactersMeta.totalPages}
        value={charactersMeta.currentPage}
        onChange={(newPage) => fetchCharacters(newPage)}
        color="dbOrange"
    />
</Group> */}