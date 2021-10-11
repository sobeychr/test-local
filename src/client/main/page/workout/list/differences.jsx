/* eslint-disable */
import { DUR_SECOND, DUR_MINUTE, DUR_HOUR, DUR_DAY, DUR_WEEK } from '@util/date';

const margins = {
    calory: [
        {
            above: 120,
            className: 'success',
        },
        {
            above: -20,
            below: 0,
            className: 'warning',
        },
        {
            below: -20,
            className: 'error',
        },
    ],
    date: [
        {
            below: DUR_HOUR * 30,
            className: 'success',
        },
        {
            above: DUR_DAY * 2 + DUR_HOUR * 5,
            below: DUR_DAY * 3,
            className: 'warning',
        },
    ],
    time: [
        {
            above: DUR_MINUTE * 3,
            className: 'success',
        },
        {
            above: DUR_MINUTE * -2,
            below: DUR_MINUTE * 2,
            className: 'warning',
        },
    ],
};

const diffEntries = (current, next) => {
    if (!next) {
        return null;
    }

    const values = diffValues(current, next);

    const res = Object.keys(values).reduce((acc, key) => {
        const value = acc[key];

        const entry =
            margins[key] &&
            margins[key].find(({ above, below }) => {
                if (above && below) return value > above && value < below;
                else if (above && !below) return value > above;
                else if (!above && below) return value < below;
                return null;
            });
        const { className = 'plain' } = entry || {};

        return {
            ...acc,
            [key]: {
                className,
                value,
            },
        };
    }, values);

    /*
    const res = Object.keys(values).reduce((acc, key) => {
        const value = acc[key];

        const lowerEntry = marginsLower[key] && marginsLower[key].find(({ diff }) => value < diff);
        const higherEntry = marginsHigher[key] && marginsHigher[key].find(({ diff }) => value > diff);
        const { className = 'error' } = lowerEntry || higherEntry || {};

        return {
            ...acc,
            [key]: {
                className,
                value,
            },
        };
    }, values);
    */

    console.log('tt', {
        values,
        res,
    });

    return {};
};

const diffValues = (current, next) => ({
    calory: current.calory - next.calory,
    date: current.date - next.date,
    distance: current.distance - next.distance,
    split: parseFloat((current.split - next.split).toFixed(3)),
    stroke: current.stroke - next.stroke,
    time: current.time - next.time,
    watt: current.watt - next.watt,
});

export default diffEntries;
