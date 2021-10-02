import create from 'zustand';
import { fetchJson } from '@api';
import Rune from './Rune';

const useRune = create((set) => ({
    isRuneLoaded: false,
    isRuneWordLoaded: false,

    runes: [],
    runewords: [],

    loadRune: async () => {
        const data = await fetchJson('/api/rune');
        set({
            isRuneLoaded: true,
            runes: Rune.parseList(data),
        });
    },
}));

export default useRune;
