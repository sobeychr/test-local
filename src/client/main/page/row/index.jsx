import React, { useEffect } from 'react';
import create from 'zustand';

import List from './list/List';

const useStore = create(set => ({
    workouts: [],

    load: () => {
        fetch('/api/row')
            .then(response => response.json())
            .then(data => set({ workouts: data }))
            .catch(err => {
                console.warn('load err', err);
            });
    },

    send: workout => {
        fetch('/api/row', {
            body: JSON.stringify({ workout }),
            method: 'PUT',
            headers: { accept: 'application/json', 'content-type': 'application/json' },
        })
            .then(response => response.json())
            .then(data => set({ workouts: data }))
            .catch(err => {
                console.warn('send err', err);
            });
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

    return <div>
        <h1>Row Page</h1>
        <section>
            <button type='button' onClick={onAdd}>add entry</button>
        </section>
        <List workouts={workouts} />
    </div>;
};

export default RowPage;
