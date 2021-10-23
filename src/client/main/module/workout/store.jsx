import create from 'zustand';
import { fetchJson } from '@api/fetch';
import { sendJson } from '@api/send';
import Workout from './Workout';

const useWorkout = create((set, get) => ({
    isLoaded: false,
    workouts: [],

    load: async () => {
        if (!get().isLoaded) {
            set({ isLoaded: true });
            const data = await fetchJson('/api/row');
            set({ workouts: Workout.parseList(data) });
        }
    },

    send: async (workout) => {
        const data = await sendJson({
            body: { workout },
            method: 'PUT',
            url: '/api/row',
        });
        set({ workouts: Workout.parseList(data) });
    },
}));

export default useWorkout;
