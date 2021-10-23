import Model from '@api/model';
import { dataToDisplay, splitCalc } from './helper';

class Workout extends Model {
    static fields = {
        calory: 0,
        date: 0,
        distance: 0,
        split: 0,
        stroke: 0,
        time: 0,
        watt: 0,

        display: {
            calory: '',
            date: '',
            distance: '',
            split: '',
            stroke: '',
            time: '',
            watt: '',
        },
    };

    static parse = (sortData) => {
        const { distance, time } = sortData;
        const split = splitCalc({ distance, duration: time });

        const newData = {
            ...sortData,
            split,
        };

        return {
            ...newData,
            display: dataToDisplay(newData),
        };
    };

    static parseList = (list) => {
        const entries = list.map((entry) => new Workout(entry)).sort(this.sort);

        return entries;
    };

    static sort = (a, b) => (a.date > b.date ? -1 : 1);
}

export default Workout;
