import create from 'zustand';
import { fetchJson } from '@api';
import Rune from './Rune';

const useRune = create((set, get) => ({
    isRuneLoaded: false,
    isRuneWordLoaded: false,

    runes: [],
    runewords: [],

    loadRune: async () => {
        if(!get().isRuneLoaded) {
            set({ isRuneLoaded: true });
            const data = await fetchJson('/api/rune');
            set({ runes: Rune.parseList(data) });
        }
    },
}));

export default useRune;
