import { leadingZero } from './number';

const DUR_SECOND = 1000;
const DUR_MINUTE = DUR_SECOND * 60;
const DUR_HOUR = DUR_MINUTE * 60;
const DUR_DAY = DUR_HOUR * 24;
const DUR_WEEK = DUR_DAY * 7;

const timeStringToTimestamp = (string) => {
    const split = string.split(':');

    if (split.length === 1) {
        return +split[0];
    } else if (split.length === 2) {
        const [minutes, seconds] = split;
        return +minutes * DUR_MINUTE + +seconds;
    } else if (split.length === 3) {
        const [hours, minutes, seconds] = split;
        return +hours * DUR_HOUR + +minutes * DUR_MINUTE + +seconds;
    }

    throw new Error('Unable to parse TimeString', {
        function: 'timeStringToTimestamp',
        string,
    });
};

const getTimestampDate = (ts) => {
    const date = new Date(ts);
    return [
        leadingZero(date.getFullYear(), 4),
        leadingZero(date.getMonth()),
        leadingZero(date.getDate()),
    ].join('-');
};

const getTimestampTime = (ts) => {
    const date = new Date(ts);
    return [
        leadingZero(date.getHours()),
        leadingZero(date.getMinutes()),
        leadingZero(date.getSeconds()),
    ].join(':');
};

const getTimestampFullDate = (ts) => `${getTimestampDate(ts)} ${getTimestampTime(ts)}`;

const timestampToString = (ts, ms = false) => {
    const weeks = Math.floor(ts / DUR_WEEK);
    const days = Math.floor((ts % DUR_WEEK) / DUR_DAY);
    const hours = Math.floor((ts % DUR_DAY) / DUR_HOUR);
    const minutes = Math.floor((ts % DUR_HOUR) / DUR_MINUTE);
    const seconds = Math.floor((ts % DUR_MINUTE) / DUR_SECOND);
    const milliseconds = Math.floor(ts % DUR_SECOND);

    return [
        weeks && `${weeks}w`,
        days && `${days}d`,
        hours && `${leadingZero(hours)}h`,
        minutes && `${leadingZero(minutes)}m`,
        seconds && `${leadingZero(seconds)}s`,
        ms && milliseconds && `${milliseconds}ms`,
    ]
        .filter(Boolean)
        .join(' ');
};

export {
    DUR_SECOND,
    DUR_MINUTE,
    DUR_HOUR,
    DUR_DAY,
    DUR_WEEK,
    getTimestampDate,
    getTimestampFullDate,
    getTimestampTime,
    timestampToString,
    timeStringToTimestamp,
};
