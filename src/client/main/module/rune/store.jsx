import create from 'zustand';
import { fetchJson } from '@api/fetch';
import Rune from './Rune';
import RuneWord from './RuneWord';

const useRune = create((set, get) => ({
    isRuneLoaded: false,
    isRuneWordLoaded: false,

    runes: [],
    runewords: [],

    loadRune: async () => {
        if (!get().isRuneLoaded) {
            set({ isRuneLoaded: true });
            const data = await fetchJson('/api/rune');
            set({ runes: Rune.parseList(data) });
        }
    },

    loadRuneWord: async () => {
        if (!get().isRuneWordLoaded) {
            set({ isRuneWordLoaded: true });
            const data = await fetchJson('/api/runeword');
            set({ runewords: RuneWord.parseList(data) });
        }
    },

    validateRune: (searchName) => get().runes.find(({ name }) => name === searchName),
}));

export default useRune;
