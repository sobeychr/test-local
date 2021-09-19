import create from 'zustand';
import { fetchJson, sendJson } from '@api';
import Workout from './Workout';

const useWorkout = create((set) => ({
    workouts: [],

    load: async () => {
        const data = await fetchJson('/api/row');
        set({ workouts: Workout.parseList(data) });
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
