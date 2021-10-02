import Model from '@api/model';
import { splitCalc } from './helper';
import { getTimestampFullDate, timestampToString } from '@util/date';

const NA = 'N/A';

class Workout extends Model {
    static average = {
        calory: 0,
        distance: 0,
        split: 0,
        stroke: 0,
        time: 0,
        watt: 0,
    };

    static averageDisplay = {
        calory: '',
        diffDate: '',
        distance: '',
        split: '',
        stroke: '',
        time: '',
        watt: '',
    };

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

    static dataToDisplay = ({
        calory,
        date,
        distance,
        split,
        stroke,
        time,
        watt,
    }) => ({
        calory: calory ? `${calory}cal` : NA,
        date: date ? getTimestampFullDate(date) : NA,
        distance: distance ? `${distance}m` : NA,
        split: split ? timestampToString(split, true) : NA,
        stroke: stroke ? `${stroke}spm` : NA,
        time: time ? timestampToString(time) : NA,
        watt: watt ? `${watt}w` : NA,
    });

    static parse = (sortData) => {
        const { calory, date, distance, stroke, time, watt } = sortData;
        const split = splitCalc(distance, time);

        const newData = {
            ...sortData,
            split,
        };

        return {
            ...newData,
            display: this.dataToDisplay(newData),
        };
    };

    static parseList = (list) => {
        const entries = list.map((entry) => new Workout(entry)).sort(this.sort);

        const totals = entries.reduce((acc, entry) => ({
                ...acc,
                calory: acc.calory + entry.calory,
                distance: acc.distance + entry.distance,
                split: acc.split + entry.split,
                stroke: acc.stroke + entry.stroke,
                time: acc.time + entry.time,
                watt: acc.watt + entry.watt,
            }),
            this.average);

        this.average = {
            calory: totals.calory / entries.length,
            distance: totals.distance / entries.length,
            split: totals.split / entries.length,
            stroke: totals.stroke / entries.length,
            time: totals.time / entries.length,
            watt: totals.watt / entries.length,
        };

        this.averageDisplay = this.dataToDisplay(this.average);

        return entries;
    };

    static sort = (a, b) => a.date > b.date ? -1 : 1;
}

export default Workout;
