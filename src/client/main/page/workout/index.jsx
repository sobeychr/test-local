import React, { useEffect } from 'react';
import useWorkout from '@module/workout/store';
import List from './list/List';

const WorkoutPage = () => {
    const { load: loadStore, send: sendStore, workouts } = useWorkout();

    const onAdd = () => {
        sendStore({
            date: Date.now(),
            distance: Math.round(Math.random() * 1000),
            time: 60 * 20,
        });
    };

    useEffect(() => {
        loadStore();
    }, []);

    console.log('workouts', workouts);

    return (
        <div>
            <h1>Workout Page</h1>
            <section>
                <button type='button' onClick={onAdd}>
                    add entry
                </button>
            </section>
            <List workouts={workouts} />
        </div>
    );
};

export default WorkoutPage;
