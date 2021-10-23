import Model from '@api/model';
import { timestampToString } from '@util/date';
import { dataToDisplay } from './helper';

class Difference extends Model {
    static fields = {
        current: null,
        next: null,

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

    static dataToDisplay = (currentData) => {
        const { date, split, time } = currentData;
        const newData = dataToDisplay(currentData);
        return {
            ...newData,
            date: timestampToString(date),
            split: timestampToString(split, true),
            time: timestampToString(time),
        };
    };

    static parse(sortData) {
        const { current, next } = sortData;

        if (!next) {
            return sortData;
        }

        const newData = {
            current,
            next,
            calory: current.calory - next.calory,
            date: current.date - next.date,
            distance: current.distance - next.distance,
            split: +(current.split - next.split).toFixed(3),
            stroke: current.stroke - next.stroke,
            time: current.time - next.time,
            watt: current.watt - next.watt,
        };

        return {
            ...newData,
            display: this.dataToDisplay(newData),
        };
    }
}

export default Difference;
