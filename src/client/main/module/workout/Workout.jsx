import Model from '@api/model';
import { getTimestampFullDate, timestampToString } from '@util/date';

class Workout extends Model {
    static fields = {
        date: 0,
        distance: 0,
        time: '',
    };

    static parse(sortData) {
        const { date, time } = sortData;
        const newDate = getTimestampFullDate(date);

        return {
            ...sortData,
            date: newDate,
            time: timestampToString(time),
        }
    }

    static parseList(list) {
        return list.map(entry => new Workout(entry));
    }
}

export default Workout;
