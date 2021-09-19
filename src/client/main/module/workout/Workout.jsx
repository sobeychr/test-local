import Model from '@api/model';
import { getTimestampFullDate, timestampToString } from '@util/date';

class Workout extends Model {
    static average = {
        calory: 0,
        distance: 0,
        stroke: 0,
        time: 0,
        watt: 0,
    };

    static fields = {
        calory: 0,
        date: 0,
        distance: 0,
        stroke: 0,
        time: 0,
        watt: 0,

        display: {
            calory: '',
            date: '',
            distance: '',
            stroke: '',
            time: '',
            watt: '',
        },
    };

    static sort(a, b) {
        return a.date > b.date ? -1 : 1;
    }

    static parse(sortData) {
        const { calory, date, distance, stroke, time, watt } = sortData;
        return {
            ...sortData,
            display: {
                calory: `${calory}cal`,
                date: getTimestampFullDate(date),
                distance: `${distance}m`,
                stroke: `${stroke}spm`,
                time: timestampToString(time),
                watt: `${watt}w`,
            },
        };
    }

    static parseList(list) {
        const entries = list.map((entry) => new Workout(entry)).sort(this.sort);
        return entries;
    }
}

export default Workout;
