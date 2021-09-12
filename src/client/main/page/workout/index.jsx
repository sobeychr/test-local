import React, { useEffect, useState } from 'react';

import useWorkout from '@module/workout/store';
import List from './list/List';
import { ButtonAdd, ButtonSplit, ModalSplit } from './components';
import './workout.scss';

const WorkoutPage = () => {
    const { load: loadStore, send: sendStore, workouts } = useWorkout();
    const [showSplit, setShowSplit] = useState(false);

    const onAdd = () => {
        sendStore({
            date: Date.now(),
            distance: Math.round(Math.random() * 1000),
            time: 60 * 20,
        });
    };

    const onSplitHide = () => setShowSplit(false);
    const onSplitShow = () => setShowSplit(true);

    useEffect(() => {
        loadStore();
    }, []);

    return (
        <div>
            <h1>Workout Page</h1>
            <section className='buttons'>
                <ButtonSplit onClick={onSplitShow} />
                <ButtonAdd onClick={onAdd} />
            </section>
            <List workouts={workouts} />
            <ModalSplit show={showSplit} onClose={onSplitHide} />
        </div>
    );
};

export default WorkoutPage;
