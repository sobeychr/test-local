import React, { useEffect, useState } from 'react';

import useWorkout from '@module/workout/store';
import List from './list/List';
import { ButtonAdd, ButtonSplit, ModalAddEntry, ModalLoading, ModalSplit } from './components';
import './workout.scss';

const WorkoutPage = () => {
    const { load: loadStore, send: sendStore, workouts } = useWorkout();
    const [isLoading, setIsLoading] = useState(false);
    const [showAddEntry, setAddEntry] = useState(false);
    const [showSplit, setShowSplit] = useState(false);

    const onAdd = (entry) => {
        console.log('onAdd', entry);
        /*
        setIsLoading(true);
        sendStore({
            ...entry,
            date: Date.now(),
        }).then(() => {
            setIsLoading(false);
        });
        */
    };

    const onHideAddEntry = () => setAddEntry(false);
    const onHideSplit = () => setShowSplit(false);

    const onShowAddEntry = () => setAddEntry(true);
    const onShowSplit = () => setShowSplit(true);

    useEffect(() => {
        setIsLoading(true);
        loadStore().then(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <div>
            <h1>Workout Page</h1>
            <section className='buttons'>
                <ButtonSplit onClick={onShowSplit} />
                <ButtonAdd onClick={onShowAddEntry} />
            </section>
            <List workouts={workouts} />
            <ModalAddEntry onClose={onHideAddEntry} onSubmit={onAdd} show={showAddEntry} />
            <ModalLoading show={isLoading} />
            <ModalSplit onClose={onHideSplit} show={showSplit} />
        </div>
    );
};

export default WorkoutPage;
