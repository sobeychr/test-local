import React, { useEffect } from 'react';
import create from 'zustand';

import { fetchJson, sendJson } from '@api';
import List from './list/List';

const useStore = create((set) => ({
    workouts: [],

    load: async () => {
        const data = await fetchJson('/api/row');
        set({ workouts: data });
    },

    send: async (workout) => {
        const data = await sendJson({
            body: { workout },
            method: 'PUT',
            url: '/api/row',
        });
        set({ workouts: data });
    },
}));

const RowPage = () => {
    const { load: loadStore, send: sendStore, workouts } = useStore();

    const onAdd = () => {
        sendStore({
            date: '2020-02-03',
            distance: Math.round(Math.random() * 1000),
            time: Date.now(),
        });
    };

    useEffect(() => {
        loadStore();
    }, []);

    return (
        <div>
            <h1>Row Page</h1>
            <section>
                <button type='button' onClick={onAdd}>
                    add entry
                </button>
            </section>
            <List workouts={workouts} />
        </div>
    );
};

export default RowPage;
