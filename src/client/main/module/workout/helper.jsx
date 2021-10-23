import { getTimestampFullDate, timestampToString, timeStringToTimestamp } from '@util/date';

const NA = 'N/A';

const dataToDisplay = ({ calory, date, distance, split, stroke, time, watt }) => ({
    calory: calory ? `${calory}cal` : NA,
    date: date ? getTimestampFullDate(date) : NA,
    distance: distance ? `${distance}m` : NA,
    split: split ? timestampToString(split, true) : NA,
    stroke: stroke ? `${stroke}spm` : NA,
    time: time ? timestampToString(time) : NA,
    watt: watt ? `${watt}w` : NA,
});

const splitCalc = ({ distance, duration }) => {
    const splitMeter = +distance / 500;
    return parseFloat((+duration / splitMeter).toFixed(3));
};

const splitCalcTimeString = ({ distance, timeString }) => {
    const calc = splitCalc({
        distance,
        duration: timeStringToTimestamp(timeString),
    });
    return timestampToString(calc, true);
};

export { dataToDisplay, splitCalc, splitCalcTimeString };
