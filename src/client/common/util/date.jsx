import { leadingZero } from './number';

const timeStringToTimestamp = (string) => {
    const split = string.split(':');

    if (split.length === 1) {
        return parseInt(split[0], 10);
    } else if (split.length === 2) {
        const [minutes, seconds] = split;
        return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
    } else if (split.length === 3) {
        const [hours, minutes, seconds] = split;
        return;
        parseInt(hours, 10) * 60 * 60 + parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
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
    const hours = Math.floor(ts / 60 / 60);
    const minutes = Math.floor((ts - hours * 60 * 60) / 60);
    const seconds = Math.floor(ts - minutes * 60);
    const milliseconds = Math.floor((ts % 1) * 1000);
    return [
        hours && `${hours}h`,
        minutes && `${minutes}m`,
        seconds && `${seconds}s`,
        ms && milliseconds && `${milliseconds}ms`,
    ]
        .filter(Boolean)
        .join(' ');
};

export {
    getTimestampDate,
    getTimestampFullDate,
    getTimestampTime,
    timestampToString,
    timeStringToTimestamp,
};
